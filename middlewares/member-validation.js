/** load joi */
const Joi = require(`joi`)

/** membuat fungsi utk validasi request dari member */
const validateMember = (request) => {  
    const rules = Joi
        .object()
        .keys({ 
            /** name is required */
            name: Joi.string().required(),
            address: Joi.string().required(),
            contact: Joi.number().required(),
            /** gender hanya boleh "male" atau "female" */
            gender: Joi.string().valid(`Male`, `Female`)
        })
        .options({ abortEarly: false })
    
    /** get error of validation if exist */
    let { error } = rules.validate(request.body)

    /** if error is exist */
    if (error != null) {
        /** get all error message */
        let errMessage = error.details.map(it => it.message).join(",")
        
        return {    
            status: false,
            message: errMessage
        }
    }

    /** if error doesn`t exist, continue to controller */
    return {    
        status: true
    }
}

module.exports = validateMember