/** create first simple middleware */
const midOne = async (request, response, next) => { 
    console.log(`Run Middleware One`)
    next() /** next() function digunakan untuk melanjutkan proses ke controller */
}

module.exports = {  
    midOne
}