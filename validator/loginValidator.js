const validator = require('validator')

const validate = user => {
    let error = {}

    if (!user.email) {
        error.email = 'Please give Email'
    } else if (!validator.isEmail(user.email)) {
        error.email= 'Please give Email'
    }
    if (!user.password) {
        error.password = 'Please give Password'
    }
    


    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate