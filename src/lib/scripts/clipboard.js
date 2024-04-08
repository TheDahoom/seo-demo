export async function copyToClipboard(data, mimeType = 'text/plain') {
    if (navigator.clipboard.write) {
        await navigator.clipboard.write([
            new ClipboardItem({
                [mimeType]: new Blob([data], {
                    type: mimeType
                }),
                ['text/plain']: new Blob([data], {
                    type: 'text/plain'
                })
            })
        ]);
    }
    else {
        // fallback since .writeText has wider browser support
        await new Promise((resolve) => {
            resolve(navigator.clipboard.writeText(String(data)));
        });
    }
}