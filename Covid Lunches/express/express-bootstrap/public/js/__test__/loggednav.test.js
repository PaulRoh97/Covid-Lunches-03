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
            await page.goto('http://localhost:3000/home')

            /*Want screenshot to make sure pic rendered in right spot */
            await page.screenshot({path: 'page-start-screenshot.png'});
        })

        afterAll(async () => {
            
            await page.close()
        })

        /*All nav buttons on this page */
        test('Home header button works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#home-logo-link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('Home nav button works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_home_link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('Home footer button works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })

        /*resource buttons on this page */
        test('resource nav button works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_resource_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('resource footer button works', async () => {
            let homeUrl = 'http://localhost:3000/home#resources'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_resource_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })

        /*pickup buttons on this page */
        test('Pickup nav button works', async () => {
            let homeUrl = 'http://localhost:3000/inner-page'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_pickup_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('Pickup footer button works', async () => {
            let homeUrl = 'http://localhost:3000/inner-page'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_pickup_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('Pickup footer2 button works', async () => {
            let homeUrl = 'http://localhost:3000/inner-page'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer2_pickup_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })

        /*about buttons on this page */
        test('About nav button works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_about_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('About footer button works', async () => {
            let homeUrl = 'http://localhost:3000/home#about'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_about_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        
        /*menu buttons on this page */
        test('Menu nav button works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_menu_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })

        /*contact buttons on this page */
        test('contact nav button works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_contact_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('contact footer button works', async () => {
            let homeUrl = 'http://localhost:3000/home#contact'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_contact_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })

        /*miscellanious links*/
        test('up arrow works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#up_arrow', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('social twitter works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_tweet', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('social facebook works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_face', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('social linkedin works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_linked', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('social instagram works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_inst', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('social google plus works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_goog', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('footer delivery works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_delivery_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('footer recipe works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_recipe_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
        test('footer allery works', async () => {
            let homeUrl = 'http://localhost:3000/home#'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_allergy_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/home');
        })
    })
    
})