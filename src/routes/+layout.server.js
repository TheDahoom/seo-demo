import { redirect } from '@sveltejs/kit';
export async function load({ url }) {
    console.log(url.hostname);
    if (url.hostname === 'sk-seo.pages.dev'){
        redirect(301,'https://skseo.dev'+url.pathname);
    }
}