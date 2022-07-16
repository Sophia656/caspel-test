export const getPageCount = (totalItems, limit) => {
    return Math.ceil(totalItems / limit)
}

export const pagination = (totalItems) => {
    let result = []
    for (let i = 1; i <= totalItems; i++) {
        result.push(i)
    }
    return result;
}

export const getCurrentData = (page, data, limit) => {
    const currentData = []

    for (let i = (page * limit - limit); i < (page * limit) && i >= (page * limit - limit); i++) {
        data.map((item, index) => {
            if (index === i) {
                currentData.push(item)
            }
        })
    }

    return currentData;
}