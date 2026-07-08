import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export async function compileBlogMDX(source: string) {
  return compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });
}
