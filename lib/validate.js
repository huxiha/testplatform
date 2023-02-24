export function register_validate(values) {
    const errors = {};
    if(!values.username) {
        errors.username = "Required";
    }
    if(!values.password) {
        errors.password = "Required";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid password";
    }

    if(!values.cPassword) {
        errors.cPassword = "Required";
    } else if(values.cPassword.includes(" ")){
        errors.cPassword = "Invalid password";
    } else if(values.cPassword !== values.password) {
        errors.cPassword = "Missmatch to password";    
    }

    return errors;

}

export function login_validate(values) {
    const errors = {};
    if(!values.username) {
        errors.username = "Required";
    }
    if(!values.password) {
        errors.password = "Required";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid password";
    }

    return errors;    

}