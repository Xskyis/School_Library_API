const Joi = require(`joi`)


/** membuat fungsi utk validasi request dari member */
const validateBook = (request, response, next) => {  
    const rules = Joi
        .object()
        .keys({ 
            isbn: Joi.number().required(),
            title: Joi.string().required(),
            author: Joi.string().required(),
            publisher: Joi.string().required(),
            category: Joi.string().required(),
            stock: Joi.number().required(),
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

module.exports = { validateBook }