export function getParamFromUrl(url, paramName) {
    const re = new RegExp(`.*[?&]${paramName}=([^&]+)(&|$)`);
    const match = url.match(re);
    return match ? match[1] : '';
}

export function getQueryParam  (url) {
    const urlArr = url.split("/");
    const query = urlArr.pop();
    return query
}
