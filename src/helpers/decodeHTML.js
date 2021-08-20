// https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it

export function decodeHtml(text) {
    let newText = text
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
    return newText
}