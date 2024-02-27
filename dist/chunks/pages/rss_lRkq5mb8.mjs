import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_qXESPOQ2.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_WhAhFWfY.mjs'),"./posts/post-3.md": () => import('./post-3_mkIjB3N6.mjs'),"./posts/post-4.md": () => import('./post-4_sLF_Y6XD.mjs')})),
    customData: `<language>en-us</language>`
  });
}

export { GET };
