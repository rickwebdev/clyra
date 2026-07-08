import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function getPostFiles(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"));
}

function fileToPost(file: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data } = matter(raw);
  return {
    slug: file.replace(/\.mdx?$/, ""),
    title: data.title ?? file,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
  };
}

export async function getPosts(): Promise<Post[]> {
  return getPostFiles()
    .map(fileToPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostSlugs(): Promise<string[]> {
  return getPostFiles().map((file) => file.replace(/\.mdx?$/, ""));
}

export async function getPost(
  slug: string
): Promise<{ content: string; data: Record<string, unknown> } | null> {
  const mdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const md = path.join(BLOG_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null;
  if (!file) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { content, data } = matter(raw);
  return { content, data };
}
