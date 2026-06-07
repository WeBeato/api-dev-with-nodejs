const MyIrancellDB = require('../db/MyIrancellDB')


const getUserIdFromUserToken = userToken => {
    let getMainUserIDQuery = `SELECT id FROM users WHERE token = ${userToken}`
    MyIrancellDB.query(getMainUserIDQuery, (error, result) => {
        if (error) {
            console.log('Error in getting main user id from user token =>', error);
            return false
        }
        return result
    })
}

module.exports = getUserIdFromUserToken