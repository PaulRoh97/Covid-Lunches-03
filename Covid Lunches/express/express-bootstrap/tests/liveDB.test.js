const accounts = require("../controllers/account.controller");
const db = require("../models");
const Account = db.accounts;
const { QueryTypes } = require('sequelize');
const { sequelize } = require("../models");


//Select Statements

test("Testing general select statements", async() => {
    await sequelize.query("SELECT * FROM `accounts` WHERE email = 'test@test.com'", { type: QueryTypes.SELECT })
        .then(data => {
        expect(data[0].id).toEqual(1)
    })
});


//Create Statements
test("Testing general create statements", async() => {
    await sequelize.query("INSERT IGNORE INTO `accounts`(`email`,`password`,`firstName`,`lastName`)VALUES('delete@delete.com','password','Test','Case');", { type: QueryTypes.INSERT })
        .then(data => {
            expect(data[1]).toEqual(1)
    })
});


//Delete Statements
test("Testing general delete statements", async() => {
    await sequelize.query("DELETE FROM `accounts` WHERE email = 'delete@delete.com'", { type: QueryTypes.DELETE })
        .then(async data => {
            await sequelize.query("SELECT * FROM `accounts` WHERE email = 'delete@delete.com'", { type: QueryTypes.SELECT })
                .then(newData => {
                    expect(newData).toEqual([])
        })
    })
})