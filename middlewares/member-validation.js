/** load joi */
const Joi = require(`joi`)

/** membuat fungsi utk validasi request dari member */
const validateMember = (request, response, next) => {  
    const rules = Joi
        .object()
        .keys({ 
            /** name is required */
            name: Joi.string().required(),
            address: Joi.string().required(),
            contact: Joi.number().required(),
            /** gender hanya boleh "male" atau "female" no gay */
            gender: Joi.string().valid(`Male`, `Female`),
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

module.exports = { validateMember }