import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../astro_6WziOW0q.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './_tag__WmeudnOF.mjs';

const $$Astro = createAstro("https://example.com");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_qXESPOQ2.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_WhAhFWfY.mjs'),"./posts/post-3.md": () => import('./post-3_mkIjB3N6.mjs'),"./posts/post-4.md": () => import('./post-4_sLF_Y6XD.mjs')}), () => "../pages/posts/*.md");
  const pageTitle = "My Astro Learning Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`<li><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></li>`)} </ul>` })}`;
}, "/home/iyadukunze/Desktop/portfolio/src/pages/blog.astro", void 0);

const $$file = "/home/iyadukunze/Desktop/portfolio/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
