import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_6WziOW0q.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/posts/post-1","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-1.md","pathname":"/posts/post-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/posts/post-2","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-2.md","pathname":"/posts/post-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/posts/post-3","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-3.md","pathname":"/posts/post-3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/posts/post-4","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-4.md","pathname":"/posts/post-4","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-os4i7owy]{color:#00539f}.tags[data-astro-cid-os4i7owy]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-os4i7owy]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\na[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/tags/[tag]","isIndex":false,"type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":".skill[data-astro-cid-kh7btl4r]{color:var(--skillColor);font-weight:var(--fontWeight);text-transform:var(--textCase)}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n"},{"type":"external","src":"/_astro/post-1.-7RCswCG.css"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/iyadukunze/Desktop/portfolio/src/pages/posts/post-1.md",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/posts/post-2.md",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/posts/post-3.md",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/posts/post-4.md",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/iyadukunze/Desktop/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/posts/post-1@_@md":"pages/posts/post-1.astro.mjs","\u0000@astro-page:src/pages/posts/post-2@_@md":"pages/posts/post-2.astro.mjs","\u0000@astro-page:src/pages/posts/post-3@_@md":"pages/posts/post-3.astro.mjs","\u0000@astro-page:src/pages/posts/post-4@_@md":"pages/posts/post-4.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_Fkfss-eS.mjs","/src/pages/blog.astro":"chunks/pages/blog_Pzw9NFHo.mjs","/src/pages/posts/post-2.md":"chunks/pages/post-2_WhAhFWfY.mjs","/src/pages/posts/post-3.md":"chunks/pages/post-3_mkIjB3N6.mjs","/src/pages/posts/post-4.md":"chunks/pages/post-4_sLF_Y6XD.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_lRkq5mb8.mjs","\u0000@astrojs-manifest":"manifest_hYxm2Fr6.mjs","/home/iyadukunze/Desktop/portfolio/src/components/Greeting":"_astro/Greeting.1WtxUDuQ.js","/astro/hoisted.js?q=0":"_astro/hoisted.4btz69pL.js","@astrojs/preact/client.js":"_astro/client.kRbLldhl.js","/home/iyadukunze/Desktop/portfolio/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.EtMxuM9-.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
