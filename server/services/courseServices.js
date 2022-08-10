const pattern = /^([0-9A-Za-z])+[0-9A-Za-z_\.\-]+\@(northeastern)\.(edu)$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

const emailError = 'Invalid Email, must be @northeastern.edu'
const passwordError = 'Ensure password has one uppercase letter, one special case letter, one digit, one lowercase letter, minimum length 8'

exports.validateInput = (req) => {
    let errorMessage = ''
    if(!(typeof req.body.email==='undefined') && !pattern.test(req.body.email)) {
        errorMessage = emailError
    }
    if(!(typeof req.body.password==='undefined') && !passwordPattern.test(req.body.password)) {
        if(errorMessage !== '') {
            errorMessage = errorMessage + ' | ' + passwordError
        }
        else errorMessage = passwordError
    }
    return errorMessage
}
