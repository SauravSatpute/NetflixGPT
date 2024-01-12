export const checkValidData = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

    if(!isEmailValid) {
        return "Email Id is not valid";
    }

    if(!isPasswordValid) {
        return "Password is not valid";
    }

    // if(!isUserValid) {
    //     return "User Name is not valid";
    // }

    return null;
}

export const checkValidDateSignUp = (email, password, userName) => {
    const isUserValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName);

    if(!isUserValid) {
        return "User Name is not valid";
    }
    
    return checkValidData(email,password);
}