import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Post = { slug: string; title: string; date: string; excerpt?: string };

export default async function BlogIndex() {
  const dir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));
  const posts: Post[] = files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx?$/, ""),
      title: data.title ?? file,
      date: data.date ?? "",
      excerpt: data.excerpt ?? ""
    };
  });

  return (
    <>
      <Nav />
      <div className="inner-page">
        <div className="inner-page-hero-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball blog-ball-1"></div>
            <div className="section-floating-ball blog-ball-2"></div>
            <div className="section-floating-ball blog-ball-3"></div>
          </div>
          <div className="container">
            <div className="inner-page-header">
              <h1 className="inner-page-title">Blog</h1>
              <p className="inner-page-subtitle">Insights, tips, and strategies for WordPress success</p>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="section-floating-elements">
            <div className="section-floating-ball blog-content-ball-1"></div>
            <div className="section-floating-ball blog-content-ball-2"></div>
            <div className="section-floating-ball blog-content-ball-3"></div>
          </div>
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card group">
                  <div className="blog-card-content">
                    <h3 className="blog-card-title group-hover:text-blue-400 transition-colors">{p.title}</h3>
                    <p className="blog-card-excerpt">{p.excerpt}</p>
                    <div className="blog-card-meta">
                      <span className="blog-card-date">{p.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
