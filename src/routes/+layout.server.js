export async function load() {
    try {
        const res4 = await fetch('https://registry.npmjs.com/sk-seo/latest');
        const data4 = await res4.json();
        const version = data4.version;
        if(res4.ok){
            return { version };
        } else {
            return { version: `0.2.3`};
        }
    } catch (error) {
        console.log(error.status, error.message)
        return { version: `0.2.3` }
    }


    if(res4.ok){
        return { version };
    }else{
        return { version: `0.2.3` }
        this.error(res4.status, data4.message);
    }
}