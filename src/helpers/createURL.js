
export const createSearchURL = (keywords, setUrl) => {
    const newUrl = `https://api.stackexchange.com/2.3/search?intitle=${encodeURI(keywords)}&order=desc&sort=activity&site=stackoverflow`;
    setUrl(newUrl)
}