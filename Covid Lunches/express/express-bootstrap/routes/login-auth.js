const db = require('../models')

async function validateLogin(email, password){
    db.accounts.findAll({where: {email: "test"}}).then(data => {
        console.log("found :")
        data.forEach((object) => console.log(object.password));

    });

    let count = await db.accounts.findOne({ where: { email: email} })
      .then(function(account) {
        if(password == account.password){
            return true;
        }
        return false;
        // if (count >= 1) {
        //   return true;
        // }
        // console.log("not found")
        // return false;
    });
    return {countVal: count};
    

}

function validateEmail(){
    return true;
}

function validatePassword(){
    return true;
}
module.exports = {validateLogin};