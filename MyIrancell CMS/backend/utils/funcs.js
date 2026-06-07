const MyIrancellDB = require('../db/MyIrancellDB')


const getUserIdFromUserToken = userToken => {
    let getMainUserIDQuery = `SELECT id FROM users WHERE token = "${userToken}"`
    return new Promise((resolve, reject) => {
        MyIrancellDB.query(getMainUserIDQuery, (error, result) => {
            if (error) {
                console.log('Error in getting main user id from user token =>', error);
                return false
            }
            resolve(result)
        })
    })
}

module.exports = getUserIdFromUserToken