const puppeteer = require('puppeteer')

describe('Profile Page', () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch()
    })

    afterAll(async () => {
        await browser.close()
    })

    describe('Test if user data renders from database', () => {
        beforeAll(async () => {
            page = await browser.newPage()
            await page.goto('http://localhost:3000/profile')
        })

        afterEach(async () => {
            // reload page after every test to start fresh
            await page.reload()
        })

        afterAll(async () => {
            await page.close()
        })

        test('a profile picture should be rendered', async () => {
            let imgSrc = '/img/chefs/chefs-1.jpg'
            let localHost = 'http://localhost:3000'

            // imageSource should have the following format:
            // http://localhost:3000/source/of/the/image
            let imageSource = await page.$eval('.db-profile-pic', img => img.src);

            // in order to ignore the localHost, I slice imageSource starting 
            // at len(localHost), and ending at len(imageSource)
            // this should give the exact path to the image, if successful and should match imgSrc defined above
            imageSource = imageSource.slice(localHost.length, imageSource.length)

            expect(imageSource).toMatch(imgSrc)
        })

        test('first and last name should be retrieved and rendered from db', async () => {
            let name = 'John Doe'

            let firstLastName = await page.$eval('.db-first-last', name => name.innerHTML);
            expect(firstLastName).toMatch(name)
        })

        test('email address should be retrieved and rendered from db', async () => {
            let email = 'test@test.com'

            let emailAddress = await page.$eval('.db-email', email => email.innerHTML);
            expect(emailAddress).toMatch(email)
        })
    })

    describe('Test password validation', () => {
        beforeAll(async () => {
            page = await browser.newPage()
            await page.goto('http://localhost:3000/profile')
        })

        afterEach(async () => {
            // reload page after every test to start fresh
            await page.reload()
        })

        afterAll(async () => {
            await page.close()
        })

        test('there should be no error message initially', async () => {
            let errorDiv = await page.$('div.pass-alert')
            expect(errorDiv).toBeFalsy()
        })

        test('there should an invalid password message since not password is input before submit', async () => {
            await page.evaluate(() => document.querySelector('#save-button').click())
            let errorDiv = await page.$('div.pass-alert')
            expect(errorDiv).toBeTruthy()
        })

        test('unmatched password error should not display until a valid password is entered', async () => {
            let errorDiv = await page.$('div.unmatched-password')
            expect(errorDiv).toBeFalsy()
        })

        test('unmatched password error should display since a valid password is entered', async () => {
            /* 
                if the new password is valid and the `confirm password` field is empty/does 
                not match the new password, an error will display 
            */
            let newPasswordField = '#new-pass'
            let validPassword = 'abcd123!@#'

            await page.type(newPasswordField, validPassword)
            await page.evaluate(() => document.querySelector('#save-button').click())

            let errorDiv = await page.$('div.unmatched-password')
            expect(errorDiv).toBeTruthy()
        })
    })
})