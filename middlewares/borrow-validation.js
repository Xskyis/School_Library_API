const Joi = require(`joi`).extend(require('@joi/date'));

/** membuat fungsi utk validasi request dari member */
const validateBorrow = (request, response, next) => {  
    const rules = Joi
        .object()
        .keys({ 
            memberID: Joi.required(),
            adminID: Joi.required(),
            date_of_borrow: Joi.date().format(['YYYY-MM-DD', 'DD-MM-YYYY']).required(),
            date_of_return: Joi.required(),
            details_of_borrow: Joi.required(),
            status: Joi.required()
        })
        .options({ abortEarly: false })
    
    /** get error of validation if exist */
    let { error } = rules.validate(request.body)

    /** if error is exist */
    if (error != null) {
        /** gett all error message */
        let errMessage = error.details.map(it => it.message).join(",")
        
        /** return error message with code 422 */
        return response.status(422).json({  
            success: false,
            message: errMessage
        })
    }

    /** if error doesn`t exist, continue to controller */
    next()
}

module.exports = { validateBorrow }