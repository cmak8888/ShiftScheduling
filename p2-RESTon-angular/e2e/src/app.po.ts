import { browser, by, element } from 'protractor';

export class AppPage {

  private credentials = {
    email: 'g@g.com',
    password: 'test123'
  };
  startingURL: string = browser.baseUrl;


  // Landing Page Test
  async navigateTo(): Promise<unknown> {
    return browser.get(this.startingURL);
  }
  async getTitleText(): Promise<string> {
    return element(by.css('rev-root .content h1')).getText();
  }

  // Authentication Test
  fillCredentials(credentias: any = this.credentials) {
    element(by.css('[name="email"]')).sendKeys(credentias.email);
    element(by.css('[name="password"]')).sendKeys(credentias.password);
    element(by.css('.button')).click();
  }

  // Signin Page Test
  async loginNavigateTo(): Promise<unknown> {
    return browser.get(this.startingURL + "login");
  }
  async getFormText(): Promise<string> {
    return element(by.css('.label')).getText();
  }

  // Employee Dashboard Page
  async employeeDashNavigateTo(): Promise<unknown> {
    return browser.get(this.startingURL + "employee");
  }
  async getDashText(): Promise<string> {
    return element(by.css('.content h3')).getText();
  }

  // Logout
  logOut() {
    return element(by.css('a[href="/login"]')).click();
  }
}
