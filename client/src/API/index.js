export const getOrders = () => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
};

export const updateCustomer = (obj) => {
    return fetch(`https://dummyjson.com/users/${obj.id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
}
export const addCustomer = (obj) => {
    return fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })
        .then(res => res.json())
}