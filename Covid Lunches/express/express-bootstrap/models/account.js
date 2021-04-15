module.exports = (sequelize, Sequelize) => {

    const Account = sequelize.define("account", {
    
    email: {
    
    type: Sequelize.STRING,
    allowNull: false,
    unique: true

    },
    password: {
    
    type: Sequelize.STRING,
    allowNull: false,
        
    },

    firstName: {
    
    type: Sequelize.STRING,
    allowNull: false
    
    },
    
    lastName: {
    
    type: Sequelize.STRING,
    allowNull: false
    
    },
    
    profilePic: {
    
    type: Sequelize.STRING
    
    }
    
    });
    
    
    return Account;
    
    };