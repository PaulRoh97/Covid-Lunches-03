
/*Anything I had to npm install */
const webdriver = require('selenium-webdriver');
var assert = require('assert');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var is_valid_pic_path = require("C:\\Users\\College Student #F19\\Documents\\College Stuff\\CMSC 447\\COVIDLunches\\Covid-Lunches-03\\Covid Lunches\\assets\\js\\profilepic.js");
var is_valid_pic_extension = require("C:\\Users\\College Student #F19\\Documents\\College Stuff\\CMSC 447\\COVIDLunches\\Covid-Lunches-03\\Covid Lunches\\assets\\js\\profilepic.js");

//var converter = require("../app/converter");

// Input capabilities
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Test Suite 1', function () {
    var driver;
    this.timeout(0);

    before(async function () {
        driver = await new Builder().forBrowser('firefox').build();
        var test_page = "file:///C:/Users/College%20Student%20%23F19/Documents/College%20Stuff/CMSC%20447/COVIDLunches/Covid-Lunches-03/Covid%20Lunches/inner-page.html";

        await driver.get(test_page);
    });

    after(async function () {
        await driver.quit();
    });

    /*Correctly identifies the webpage*/
    it('Test Load and Title Page', function () {
        var expected_title = "Restaurantly Bootstrap Template - Inner Page";
        driver.getTitle().then(function (title) {
            expect(title).equals(expected_title);
        })
    })

    it('Valid extension', function () {
        var src = "file:///C:/Users/College%20Student%20%23F19/Documents/College%20Stuff/CMSC%20447/COVIDLunches/Covid-Lunches-03/Covid%20Lunches/assets/img/chefs/chefs-1.jpg";
        assert.ok(is_valid_pic_extension(src));
    })

    it('Loaded Profile ValidPic', function () {
        var can_load_src = false;
        var src = "file:///C:/Users/College%20Student%20%23F19/Documents/College%20Stuff/CMSC%20447/COVIDLunches/Covid-Lunches-03/Covid%20Lunches/assets/img/chefs/chefs-1.jpg";
        is_valid_pic_path(src, function (exists) {
            assert.ok(exists);
        })
    })

    /*The profile pic is not broken*/
    it('Loaded Profile Pic', function () {
        //var pictures = driver.findElement(By.id('profilepic'));

        var pictures = driver.findElement(By.xpath("//img[contains(@alt,'Profile')]"));
        assert.ok(pictures.getAttribute("naturalWidth") > 0, "I can't figure out how to check the image" + pictures.complete);

        //picture.getAttribute("naturalWidth").equals("0");
        /*var req = new XMLHttpRequest();
        req.open('get', picture.getAttribute("src"), false);
        req.send(null);
        assert.ok(200 === req.status, "Profile image didn't load. ");
        *///

        //assert.ok(picture.visible);
        // assert.ok(picture.getAttribute("naturalWidth") > 0, "Profile image didn't load" + picture.complete);
    })


});