const baseUrl = () => {
    if (window.location.href.indexOf('localhost') > -1) {
        return `http://localhost:3000`;
    } else {
        return `https://diabetes-supplies-inventory.herokuapp.com`;
    }
};
// console.log('bob', baseUrl());
const BASE_URL = baseUrl();

export default BASE_URL;
