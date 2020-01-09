import { browser, by, element } from 'protractor';
import {WriteStream} from 'fs';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  selectRio() {
    element(by.cssContainingText('.select-cidade option', 'Rio de Janeiro')).click();
    browser.driver.sleep(500);
    element(by.cssContainingText('.select-cidade option', 'Nilópolis')).click();
    browser.driver.sleep(500);
    return true;
  }

}
