export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/post-1_qXESPOQ2.mjs').then(n => n.p);

export { page };
