// https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it

export function decodeHtml(text) {
    if (!text){
        return "";
    }
    let newText = text
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, ">")
        .replace(/>/g, "<")
        .replace(/&gt;/g, ">")
    return newText
}