import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));
  return files.map(file => ({ slug: file.replace(/\.mdx?$/, "") }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const file = path.join(process.cwd(), "src/content/blog", `${params.slug}.mdx`);
    const raw = fs.readFileSync(file, "utf8");
    const { content, data } = matter(raw);

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
      },
    });

    return (
      <>
        <Nav />
        <div className="inner-page">
          <div className="inner-page-hero-section">
            <div className="container">
              <div className="inner-page-header">
                <h1 className="inner-page-title">{data.title || 'Untitled'}</h1>
                <p className="inner-page-subtitle">{data.excerpt || ''}</p>
                <div className="text-sm text-[#a9adb3] mt-4">{data.date || ''}</div>
              </div>
            </div>
          </div>
          
          <div className="inner-page-main-content">
            <div className="container">
              <article className="inner-page-card">
                <div className="prose prose-invert prose-lg max-w-none">
                  {mdxContent as React.ReactNode}
                </div>
              </article>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } catch (error) {
    return (
      <>
        <Nav />
        <div className="inner-page">
          <div className="inner-page-hero-section">
            <div className="container">
              <div className="inner-page-header">
                <h1 className="inner-page-title">Post Not Found</h1>
                <p className="inner-page-subtitle">The blog post you're looking for doesn't exist.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
