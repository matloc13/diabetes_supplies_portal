
const allDevsReducer = (state, action) => {
// console.log(action.payload);

    switch (action.type) {
        case "ADD_DEVICE_TO_ARR":
            return [...state, action.payload];
        case "SET_DEVICE_ARR":
            return state = action.payload;
        default:
            return;
    }
}

export default allDevsReducer;