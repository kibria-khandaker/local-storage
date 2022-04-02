const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('shopping_cart'))
}
// console.log(getFromLocalStorage());

const addToLocalStorage = (id) => {
    const exist = getFromLocalStorage();
    // console.log(exist());

    let soppingCart = {};

    if (!exist) {
        soppingCart[id] = 1;
    } else {
        soppingCart = exist;

        if (soppingCart[id]) {
            // console.log(soppingCart[id]);
            const newCount = soppingCart[id] + 1;
            soppingCart[id] = newCount;
        }else{
            soppingCart[id] = 1;
        }
    }
    localStorage.setItem('shopping_cart', JSON.stringify(soppingCart))
};

const clearLocalStorage = () => {
    localStorage.removeItem('shopping_cart')
}

export { addToLocalStorage, getFromLocalStorage, clearLocalStorage };

