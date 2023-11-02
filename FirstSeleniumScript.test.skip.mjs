import { By, Builder } from 'selenium-webdriver'

describe('Selenium.dev web form', () => {
  let driver
  beforeAll(() => {
    return new Builder()
      .forBrowser('chrome')
      .build()
      .then(drv => (driver = drv))
      .then(() =>
        driver.get('https://www.selenium.dev/selenium/web/web-form.html')
      )
  })

  afterAll(() => {
    return driver.quit()
  })

  test('we can use the web form', async () => {
    expect(await driver.getTitle()).toBe('Web form')

    await driver.manage().setTimeouts({ implicit: 500 })

    let textBox = await driver.findElement(By.name('my-text'))
    let submitButton = await driver.findElement(By.css('button'))

    await textBox.sendKeys('Selenium')
    await submitButton.click()

    let message = await driver.findElement(By.id('message'))
    expect(await message.getText()).toBe('Received!')
  })
})
