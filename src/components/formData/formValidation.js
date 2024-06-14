export let formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}
export let formDataLogin = {
    email: '',
    password: '',
}

export let errorsLogin = {
    email: '',
    password: '',
}

export let errors = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: '',
}

function validateField(value, fieldName, errorObject, errorMessage) {
    if (value.trim() === '') {
        errorObject[fieldName] = errorMessage;
    } else {
        errorObject[fieldName] = ''
    }
}

export function formLoginValidation() {
    validateField(formDataLogin.email, 'email', errorsLogin, 'Email is required.')
    validateField(formDataLogin.password, 'password', errorsLogin, 'Password is required.')
}

export function formRegisterValidation() {
    validateField(formData.name, 'name', errors, 'Name is required.')
    validateField(formData.email, 'email', errors, 'Email is required.')
    validateField(formData.password, 'password', errors, 'Password is required.')
    validateField(formData.confirmPassword, 'confirmPassword', errors, 'Confirm Password is required.')
}






