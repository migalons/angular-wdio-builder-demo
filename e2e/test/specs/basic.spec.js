const assert = require('assert')

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('');
    const title = browser.getTitle();
    assert.strictEqual(title, 'AngularWdio BuilderTest')
  })
  it('should say app is running', () => {
    browser.url('');
    const message = $('body > app-root > div.content > div.card.highlight-card.card-small > span').getText();
    assert.strictEqual(message, 'angular-wdio-builder-test app is running!')
  })
})
