const puppeteer = require('puppeteer')

describe('Inner Page', () => {
    let browser
    let page

    beforeEach(async () => {
        browser = await puppeteer.launch()
    })

    afterEach(async () => {
        await browser.close()
    })

    describe('Test if elements renders from database', () => {
        beforeEach(async () => {
            page = await browser.newPage()
            await page.goto('http://localhost:3000/inner-page')

            /*Want screenshot to make sure pic rendered in right spot */
            await page.screenshot({path: 'page-start-screenshot.png'});
        })

        afterAll(async () => {
            
            await page.close()
        })

        /*May need more in profilepic css, but need at least 2*/
        test('Should have at least 2 profile pics for mobile/desktop modes', async () => {

            // imageSource should have the following format:
            // http://localhost:3000/source/of/the/image
            let imageLen = (await page.$$('.profilepic')).length;
            console.log('Number of pictures: ' + imageLen);
            expect(imageLen).toBeGreaterThan(1);
            //expect(imageLen).toBe(2);

            /*Mo-bile mode! Mo-bile mode! Go! Go! Go!*/
            /*await page.emulate(puppeteer.devices['iPhone 6']);
            imageLen = (await page.$$('.profilepic')).length;
            console.log('Number of pictures in mobile: ' + imageLen);
            expect(imageLen).toBeGreaterThan(1);*/
        })

        test('Profile picture should be rendered', async () => {
            let imgSrc = '/img/chefs/chefs-1.jpg'
            let localHost = 'http://localhost:3000'

            // imageSource should have the following format:
            // http://localhost:3000/source/of/the/image
            let imageSource = await page.$eval('.profilepic', img => img.src);

            // in order to ignore the localHost, I slice imageSource starting 
            // at len(localHost), and ending at len(imageSource)
            // this should give the exact path to the image, if successful and should match imgSrc defined above
            imageSource = imageSource.slice(localHost.length, imageSource.length);

            expect(imageSource).toMatch(imgSrc);
        })

        test('Schedule table rendered with sample information', async () => {
            let sampleRowLen = 4;
            
            let rows = await page.$$eval('#pickup-table tr', row => row);
            let rowNum = rows.length - 1;

            console.log('Length of table: ' + rowNum);
            expect(rowNum).toBe(sampleRowLen);
        })

        test('Alerts same as incorrect entry', async () => {
            let alertLen = (await page.$$('.alert-danger')).length;
            let lateLen = (await page.$$('.incomplete')).length;

            console.log('Alerts on page: ' + alertLen);
            expect(alertLen).toBe(lateLen);
        })

        test('Home header button works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#home-logo-link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            
        })

        test('Home nav button works', async () => {
            let homeUrl = 'http://localhost:3000/home'
            /*click the button*/
            await Promise.all([
                page.$eval('#nav_home_link', elem => elem.click()),
                //page.$eval('.home_link', elem => elem.click()),
                page.waitForNavigation(), 
            ]);
            console.log('Our page url: ' + page.url());
            expect(page.url()).toBe(homeUrl);
            
        })


    })
    
})