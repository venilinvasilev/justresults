export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
export const truncate = (str, n, useWordBoundary) => {
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n - 1); // the original check
    return (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" "))
        : subString) + "...";
};
export const parseFormData = (targetForm) => {
    const obj = {};
    for (const iterator of Array.from(targetForm.elements)) {
        if (iterator.type === 'checkbox' || iterator.type === 'radio') {
            Object.assign(obj, { [`${iterator.id}`]: iterator.checked });
        } else {
            Object.assign(obj, { [`${iterator.id}`]: iterator.value });
        }
    }
    return obj;
}