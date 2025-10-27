import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Post = { slug: string; title: string; date: string; excerpt?: string };

async function getAllPosts(): Promise<Post[]> {
  const dir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));
  return files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx?$/, ""),
      title: data.title ?? file,
      date: data.date ?? "",
      excerpt: data.excerpt ?? ""
    };
  });
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));
  return files.map(file => ({ slug: file.replace(/\.mdx?$/, "") }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const file = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
    const raw = fs.readFileSync(file, "utf8");
    const { content, data } = matter(raw);

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
      },
    });

    // Get all posts for navigation
    const allPosts = await getAllPosts();
    const currentIndex = allPosts.findIndex(post => post.slug === slug);
    const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

    return (
      <>
        <Nav />
        <div className="inner-page">
          <div className="inner-page-hero-section">
            <div className="container">
              {/* Breadcrumbs */}
              <nav className="breadcrumbs mb-6">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">/</span>
                <Link href="/blog" className="breadcrumb-link">Blog</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">{data.title || 'Untitled'}</span>
              </nav>

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

              {/* Post Navigation */}
              <div className="post-navigation mt-12">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Previous Post */}
                  {prevPost && (
                    <Link href={`/blog/${prevPost.slug}`} className="post-nav-card post-nav-prev flex-1">
                      <div className="post-nav-content">
                        <span className="post-nav-label">← Previous</span>
                        <h3 className="post-nav-title">{prevPost.title}</h3>
                        <p className="post-nav-excerpt">{prevPost.excerpt}</p>
                      </div>
                    </Link>
                  )}

                  {/* Back to Blog */}
                  <Link href="/blog" className="post-nav-card post-nav-center flex-1 md:flex-none md:w-48">
                    <div className="post-nav-content text-center">
                      <span className="post-nav-label">All Posts</span>
                      <h3 className="post-nav-title">← Blog</h3>
                    </div>
                  </Link>

                  {/* Next Post */}
                  {nextPost && (
                    <Link href={`/blog/${nextPost.slug}`} className="post-nav-card post-nav-next flex-1">
                      <div className="post-nav-content">
                        <span className="post-nav-label">Next →</span>
                        <h3 className="post-nav-title">{nextPost.title}</h3>
                        <p className="post-nav-excerpt">{nextPost.excerpt}</p>
                      </div>
                    </Link>
                  )}
                </div>

                {/* Related Posts Carousel */}
                <div className="related-posts mt-12">
                  <h3 className="related-posts-title">More Articles</h3>
                  <div className="related-posts-grid">
                    {allPosts
                      .filter(post => post.slug !== slug)
                      .slice(0, 3)
                      .map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="related-post-card">
                          <div className="related-post-content">
                            <h4 className="related-post-title">{post.title}</h4>
                            <p className="related-post-excerpt">{post.excerpt}</p>
                            <span className="related-post-date">{post.date}</span>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
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
              {/* Breadcrumbs for error page */}
              <nav className="breadcrumbs mb-6">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">/</span>
                <Link href="/blog" className="breadcrumb-link">Blog</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">Post Not Found</span>
              </nav>

              <div className="inner-page-header">
                <h1 className="inner-page-title">Post Not Found</h1>
                <p className="inner-page-subtitle">The blog post you're looking for doesn't exist.</p>
                <Link href="/blog" className="btn btn-primary mt-4">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
