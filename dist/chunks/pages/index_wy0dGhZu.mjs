import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../astro_6WziOW0q.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './_tag__WmeudnOF.mjs';
/* empty css                          */
import 'clsx';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';

const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Tag Index";
  const allPost = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1_qXESPOQ2.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2_WhAhFWfY.mjs'),"../posts/post-3.md": () => import('./post-3_mkIjB3N6.mjs'),"../posts/post-4.md": () => import('./post-4_sLF_Y6XD.mjs')}), () => "../posts/*.md");
  const tags = [...new Set(allPost.map((post) => post.frontmatter.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${tags.map((tg) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tg}`, "href")} data-astro-cid-os4i7owy>${tg}</a> </p>`)} </div> ` })} `;
}, "/home/iyadukunze/Desktop/portfolio/src/pages/tags/index.astro", void 0);

const $$file$1 = "/home/iyadukunze/Desktop/portfolio/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "! Thank you for visiting!"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "New Greeting"
    })]
  });
}

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>My awesome blog subtitle</h2> ${renderComponent($$result2, "Greeting", Greeting, { "client:visible": true, "messages": ["Hej", "Hallo", "Hola", "Habari"], "client:component-hydration": "visible", "client:component-path": "/home/iyadukunze/Desktop/portfolio/src/components/Greeting", "client:component-export": "default" })} ` })}`;
}, "/home/iyadukunze/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/iyadukunze/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
