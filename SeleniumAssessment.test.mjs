import { By, Builder } from 'selenium-webdriver'

describe('Luma - Software Testing Board - Demo Store', () => {
  let driver
  beforeAll(() => {
    return new Builder()
      .forBrowser('chrome')
      .build()
      .then(drv => (driver = drv))
      .then(() => driver.manage().setTimeouts({ implicit: 500 }))
      .then(() => driver.get('https://magento.softwaretestingboard.com/'))
  })

  afterAll(() => {
    return driver.quit()
  })

  test('we can load the home page and has all the high level expected sections', async () => {
    expect(await driver.getTitle()).toBe('Home Page')
    expect(
      await Promise.all([
        driver.findElement(By.className('header content')), // Luma header with search
        driver.findElement(By.className('nav-sections')), // Top menu bar
        driver.findElement(By.id('maincontent')), // all content between menu bar and footer
        driver.findElement(By.className('blocks-promo')), // section of products being promoted
        driver.findElement(By.className('block-products-list')), // section showing the "Hot Sellers"
        driver.findElement(By.className('page-footer')) // the page footer
      ])
    ).toBeTruthy()
    // TODO: this test should be extended to check there are only single instances of each of the above classes
  })

  test('clicking first promoted product navigates to product page', async () => {
    // Given there is a main promoted product and When we click it
    await driver.findElement(By.className('block-promo home-main')).click()

    //Then
    expect(await driver.getTitle()).toBe('New Luma Yoga Collection')
    expect(
      await driver.findElement(By.css('#page-title-heading > span')).getText()
    ).toBe('New Luma Yoga Collection')

    // TODO: add more checks of this page, eg. the expected sections? - TBC
  })
})
