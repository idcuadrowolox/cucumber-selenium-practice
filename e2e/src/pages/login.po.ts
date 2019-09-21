import { by, element } from 'protractor';
import { AppPage } from './app.po';

export class LoginPage extends AppPage {
  get usernameInput() {
    return element(by.id('username'));
  }

  get usernameError() {
    return element(by.id('e-username'));
  }

  get passworInput() {
    return element(by.id('password'));
  }

  get passworError() {
    return element(by.id('e-password'));
  }

  get submitButton() {
    return element(by.id('button-login'));
  }

  getUsernameErrorMessage() {
    return this.usernameError.getText() as Promise<any>;
  }

  getPasswordErrorMessage() {
    return this.passworError.getText() as Promise<any>;
  }

  writeUser(username: string) {
    return this.usernameInput.sendKeys(username) as Promise<any>;
  }

  writePassword(password: string) {
    return this.passworInput.sendKeys(password) as Promise<any>;
  }

  doLogin() {
    return this.submitButton.click() as Promise<any>;
  }
}
