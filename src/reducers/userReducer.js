const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {...state, 
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                birthDate: action.payload.birthDate,
                password: action.payload.password,
                isAuthenticated: action.payload.isAuthenticated,
                id: action.payload.id,
                token: action.payload.token
            };
        case "LOGOUT_USER":
            window.localStorage.clear();
            return {...state};
        case "UPDATE_USER":
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                birthDate: action.payload.birthDate,
            }
        default:
            return state;
  }
}

export default userReducer;