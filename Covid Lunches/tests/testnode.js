
/*Anything I had to npm install */
const webdriver = require('selenium-webdriver');
var assert = require('assert');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Input capabilities
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Test Suite 1', function () {
    var driver;
    this.timeout(0);

    before(async  function () {
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

    /*The profile pic is not broken*/
    it('Loaded Profile Pic', function () {
        //var pictures = driver.findElement(By.id('profilepic'));

        var pictures = driver.findElement(By.xpath("//img[contains(@alt,'Profile')]"));
        assert.ok(pictures.getAttribute("naturalWidth") > 0, "I can't figure out how to check the image"  + pictures.complete);

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