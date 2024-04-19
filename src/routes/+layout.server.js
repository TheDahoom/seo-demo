export async function load() {
    const res4 = await fetch('https://registry.npmjs.com/sk-seo/latest');
    const data4 = await res4.json();
    const version = data4.version;

    if(res4.ok){
        return { version };
    }else{
        this.error(res4.status, data4.message);
    }
}