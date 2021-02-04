import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Shiftly');
  });

  it('should display login page', async () => {
    await page.loginNavigateTo();
    expect(await page.getFormText()).toEqual('Email');
  });

  it('when login is successful, they should forward to employee dashboard', async () => {
    await page.loginNavigateTo();
    await page.fillCredentials();
    await setTimeout(() => expect(browser.getCurrentUrl()).toContain("#/employee"), 3000)
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
