const puppeteer = require('puppeteer')

describe('Index Page', () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch()
    })

    afterAll(async () => {
        await browser.close()
    })

    
    describe('Unlogged page tests if Buttons Render', () => {
        beforeAll(async () => {
            page = await browser.newPage()
            await page.goto('http://localhost:3000/')

            /*Want screenshot to make sure pic rendered in right spot */
            await page.screenshot({path: 'page-start-screenshot.png'});
        })

        afterAll(async () => {
            
            await page.close()
        })

        /*signup and login testing */
        test('Signup nav button works', async () => {
            let homeUrl = 'http://localhost:3000/sign-up'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_signup_link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('Login main button works', async () => {
            let homeUrl = 'http://localhost:3000/login'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_login_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('Signup main button works', async () => {
            let homeUrl = 'http://localhost:3000/sign-up'
            /*click the button*/
            await Promise.all([
                page.$eval('#main_signup_link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('Login main button works', async () => {
            let homeUrl = 'http://localhost:3000/login'
            /*click the button*/
            await Promise.all([
                page.$eval('#main_login_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })

        /*All nav buttons on this page */
        test('Home header button works', async () => {
            let homeUrl = 'http://localhost:3000/'
            /*click the button*/
            await Promise.all([
                page.$eval('#home-logo-link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('Home nav button works', async () => {
            let homeUrl = 'http://localhost:3000/'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_home_link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('Home footer button works', async () => {
            let homeUrl = 'http://localhost:3000/'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })

        /*resource buttons on this page */
        test('resource nav button works', async () => {
            let homeUrl = 'http://localhost:3000/'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_resource_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('resource footer button works', async () => {
            let homeUrl = 'http://localhost:3000/#resources'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_resource_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })

        /*about buttons on this page */
        test('About nav button works', async () => {
            let homeUrl = 'http://localhost:3000/'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_about_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('About footer button works', async () => {
            let homeUrl = 'http://localhost:3000/#about'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_about_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        
        /*menu buttons on this page */
        test('Menu nav button works', async () => {
            let homeUrl = 'http://localhost:3000/'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_menu_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })

        /*contact buttons on this page */
        test('contact nav button works', async () => {
            let homeUrl = 'http://localhost:3000/'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_contact_link', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('contact footer button works', async () => {
            let homeUrl = 'http://localhost:3000/#contact'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_contact_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })

        /*miscellanious links*/
        test('up arrow works', async () => {
            let homeUrl = 'http://localhost:3000/'
            /*click the button*/
            await Promise.all([
                page.$eval('#up_arrow', elem => elem.click()),
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('social twitter works', async () => {
            let homeUrl = 'http://localhost:3000/#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_tweet', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('social facebook works', async () => {
            let homeUrl = 'http://localhost:3000/#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_face', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('social linkedin works', async () => {
            let homeUrl = 'http://localhost:3000/#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_linked', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('social instagram works', async () => {
            let homeUrl = 'http://localhost:3000/#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_inst', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('social google plus works', async () => {
            let homeUrl = 'http://localhost:3000/#'
            /*click the button*/
            await Promise.all([
                page.$eval('#social_goog', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('footer delivery works', async () => {
            let homeUrl = 'http://localhost:3000/#'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_delivery_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('footer recipe works', async () => {
            let homeUrl = 'http://localhost:3000/#'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_recipe_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
        test('footer allery works', async () => {
            let homeUrl = 'http://localhost:3000/#'
            /*click the button*/
            await Promise.all([
                page.$eval('#footer_allergy_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            //console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            await page.goto('http://localhost:3000/');
        })
    })
    
})