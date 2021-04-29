const puppeteer = require('puppeteer')

describe('Menu Options', () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch()
    })

    afterAll(async () => {
        await browser.close()
    })

    describe('Test if menu items renders on the page.', () => {
        beforeEach(async () => {
            page = await browser.newPage()
            await page.goto('http://localhost:3000/')
        })

        afterAll(async () => {
            await page.close()
        })

        test('Card buttons change menu items to entree.', async () => {
            let name = 'filter-active'

            await page.evaluate(() => document.querySelector('#menu-entree').click())
            const el = await page.$('#menu-entree')
            const className = await (await el.getProperty('className')).jsonValue()
            expect(className).toMatch(name)
        })

        test('Card buttons change menu items to side.', async () => {
            let name = 'filter-active'

            await page.evaluate(() => document.querySelector('#menu-side').click())
            const el = await page.$('#menu-side')
            const className = await (await el.getProperty('className')).jsonValue()
            expect(className).toMatch(name)
        })
        
        test('Card buttons change menu items to beverage.', async () => {
            let name = 'filter-active'

            await page.evaluate(() => document.querySelector('#menu-beverage').click())
            const el = await page.$('#menu-beverage')
            const className = await (await el.getProperty('className')).jsonValue()
            expect(className).toMatch(name)
        })

        test('Card buttons change menu items to all.', async () => {
            let name = 'filter-active'

            await page.evaluate(() => document.querySelector('#menu-all').click())
            const el = await page.$('#menu-all')
            const className = await (await el.getProperty('className')).jsonValue()
            expect(className).toMatch(name)
        })
    })
})