const deviceReducer = (state, action) => {
    console.log(state);
    console.log(action);
  
    switch (action.type) {
        case "CREATE_DEVICE":
            return;
        case "ADD_NEW_CHANGE":
            return;
        case "ADD_NEW_FAILURE":
            return;
        case "ADD_NEW_AQUIRED":
            return;
        default:
            return state;
    }
}

export default deviceReducer;