// You do not need to make any changes to this file
const axios = {
    get(url) {
        return fetch(url)
            .then(res => res.json())
            .then(d => ({ data: d }));
    }
}

export { axios };