const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {...state, 
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age,
                birthdate: action.payload.birthDate,
                password: action.payload.password,
                isAuthenticated: action.payload.isAuthenticated,
                id: action.payload.id,
                token: action.payload.token
            };
        case "LOGOUT_USER":
            window.localStorage.clear();
            return {...state};
        default:
            return state;

  }
}

export default userReducer;