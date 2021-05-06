const puppeteer = require('puppeteer')

describe('Home Page', () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch()
    })

    afterAll(async () => {
        await browser.close()
    })

    describe('Home Page tests if Buttons Render', () => {
        beforeAll(async () => {
            page = await browser.newPage()
            await page.goto('https://covidlunches.herokuapp.com/home')

            /*Want screenshot to make sure pic rendered in right spot */
            await page.screenshot({path: 'page-start-screenshot.png'});
        })

        afterAll(async () => {
            
            await page.close()
        })

        /*All nav buttons on this page */
        test('Home header button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#home-logo-link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('Home nav button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_home_link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('Home footer button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })

        /*resource buttons on this page */
        test('resource nav button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_resource_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('resource footer button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#resources'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_resource_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })

        /*pickup buttons on this page */
        test('Pickup nav button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/inner-page'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_pickup_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('Pickup footer button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/inner-page'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_pickup_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        /*about buttons on this page */
        test('About nav button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_about_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('About footer button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#about'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_about_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        
        /*menu buttons on this page */
        test('Menu nav button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_menu_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })

        /*contact buttons on this page */
        test('contact nav button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_contact_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('contact footer button works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#contact'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_contact_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })

        /*miscellanious links*/
        test('up arrow works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#up_arrow', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('social twitter works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_tweet', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('social facebook works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_face', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('social linkedin works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_linked', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('social instagram works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_inst', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
        test('social google plus works', async () => {
            let homeUrl = 'https://covidlunches.herokuapp.com/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_goog', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('https://covidlunches.herokuapp.com/home');
        })
    })
    
})