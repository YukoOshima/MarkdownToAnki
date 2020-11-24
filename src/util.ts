import fetch from 'node-fetch'

export function normalizeHighlightLang(lang: string | undefined) {
    switch (lang && lang.toLowerCase()) {
        case 'tsx':
        case 'typescriptreact':
            return 'jsx';
        case 'json5':
        case 'jsonc':
            return 'json';
        case 'c#':
        case 'csharp':
            return 'cs';
        default:
            return lang;
    }
}

export async function postToAnki(body: any) {
    try {
        const resp = await fetch('http://127.0.0.1:8765', {
            method: 'POST',
            body: JSON.stringify(body)
        })
        return await resp.json();
    } catch (e) {
       console.log(e);
    }
}