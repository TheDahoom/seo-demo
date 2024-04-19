import { redirect } from '@sveltejs/kit';
export async function load({ url }) {
    if (url.origin.includes('pages.dev')){
        redirect(301,'https://skseo.dev'+url.pathname);
    }
}