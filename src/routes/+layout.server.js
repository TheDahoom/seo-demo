import { redirect } from '@sveltejs/kit';
export async function load({ url }) {
    console.log(url.hostname);
    if (url.hostname.includes('pages.dev')){
        redirect(301,'https://skseo.dev'+url.pathname);
    }
}