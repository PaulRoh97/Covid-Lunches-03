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

    describe('Test input validation', () => {
        beforeAll(async () => {
            page = await browser.newPage()
            await page.goto('http://localhost:3000/login')
        })

        afterEach(async () => {
            // reload page after every test to start fresh
            await page.reload()
        })

        afterAll(async () => {
            await page.close()
        })

        test('sign in attempt without any inputs should show error', async () => {
            await page.evaluate(() => document.querySelector('.sign-in-btn').click())
            let emptyFieldError = await page.$('div.input-alert')
            expect(emptyFieldError).toBeTruthy()
        })

        test('sign in attempt with only one input (email) should still show error', async () => {
            let emailAddress = 'test@test.com'
            await page.type('#email', emailAddress)
            await page.evaluate(() => document.querySelector('.sign-in-btn').click())

            let emptyFieldError = await page.$('div.input-alert')
            expect(emptyFieldError).toBeTruthy()
        })

        test('sign in attempt with only one input (password) should still show error', async () => {
            let password = '903uekasnf'
            await page.type('#password', password)
            await page.evaluate(() => document.querySelector('.sign-in-btn').click())

            let emptyFieldError = await page.$('div.input-alert')
            expect(emptyFieldError).toBeTruthy()
        })
    })

    describe('Test email validation once both fields are not empty', () => {
        beforeAll(async () => {
            page = await browser.newPage()
            await page.goto('http://localhost:3000/login')
        })

        afterEach(async () => {
            // reload page after every test to start fresh
            await page.reload()
        })

        afterAll(async () => {
            await page.close()
        })

        test('sign in attempt with invalid email should show error (missing "email.com")', async () => {
            let invalidEmail = 'johndoe@'
            let somePassword = '903uekasnf'
            await page.type('#email', invalidEmail)
            await page.type('#password', somePassword)

            await page.evaluate(() => document.querySelector('.sign-in-btn').click())
            let invalidEmailError = await page.$('div.email-alert')
            expect(invalidEmailError).toBeTruthy()
        })

        test('sign in attempt with invalid email should show error (missing @ symbol)', async () => {
            let invalidEmail = 'johndoeemail.com'
            let somePassword = '903uekasnf'
            await page.type('#email', invalidEmail)
            await page.type('#password', somePassword)

            await page.evaluate(() => document.querySelector('.sign-in-btn').click())
            let invalidEmailError = await page.$('div.email-alert')
            expect(invalidEmailError).toBeTruthy()
        })

        test('sign in attempt with invalid email should show error (missing characters before @ symbol)', async () => {
            let invalidEmail = '@email.com'
            let somePassword = '903uekasnf'
            await page.type('#email', invalidEmail)
            await page.type('#password', somePassword)

            await page.evaluate(() => document.querySelector('.sign-in-btn').click())
            let invalidEmailError = await page.$('div.email-alert')
            expect(invalidEmailError).toBeTruthy()
        })

        test('sign in attempt with valid email should clear error', async () => {
            let invalidEmail = '@email.com'
            let somePassword = '903uekasnf'
            await page.type('#email', invalidEmail)
            await page.type('#password', somePassword)

            await page.evaluate(() => document.querySelector('.sign-in-btn').click())
            let invalidEmailError = await page.$('div.email-alert')
            expect(invalidEmailError).toBeTruthy()

            /*  
            since this account doesn't exist but the email is a valid format, 
            the page will simply reload instead of loggin in the user, 
            consequently removing the error
            */
            let validEmail = 'johndoe@email.com'
            somePassword = '903uekasnf'
            await page.evaluate(() => document.getElementById('email').value = '')
            await page.type('#email', validEmail)

            await Promise.all([
                page.evaluate(() => document.querySelector('.sign-in-btn').click()),
                page.waitForNavigation() // wait for reload after submit
            ])
            
            invalidEmailError = await page.$('div.email-alert')
            expect(invalidEmailError).toBeFalsy()
        })
    })
})