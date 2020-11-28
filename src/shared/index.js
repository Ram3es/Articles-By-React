export const byFieldABC = (item) =>{
    return (a,b) => a[item] > b[item] ? 1 : -1
}

export const byFieldCBA = (item) =>{
    return (a,b) => a[item] < b[item] ? 1 : -1
}