import CommonPage from '../shared/common';

export default class LoginPage extends CommonPage {
  // Login 
  get emailInput() {
    return "input[type='email']";
  }

  get passInput() {
    return "input[type='password']";
  }

  get loginSubmit() {
    return '#loginBtn';
  }

  get loginTitle() {
    return 'app-login h1';
  }

  get appLogin() {
    return 'app-login';
  }

  get loginDesc() {
    return 'app-login h2';
  }

  // Sign up
  get registerBtn() {
    return '#content a[href="/register"]';
  }

  /**
   * Login with email and password.
   * 
   * @param email - The email that user wants to login 
   * @param pass - The password that user wants to login
   * @returns this
   */
  login(email, pass) {
    return this
      .log('Navigate to mable page')
      .visitPage('/')

      .log('Check login page')
      .verifyCurrentURL('/login')
      .verifyElementVisible(this.appLogin)
      .verifyElementContainsText(this.loginTitle, 'Login')
      .verifyElementContainsText(
        this.loginDesc,
        'Login to manage your Mable account.',
      )

      .log('Input email')
      .inputTextField(this.emailInput, email)

      .log('Input password')
      .inputTextField(this.passInput, pass)

      .log('Submit login')
      .clickElement(this.loginSubmit)
  }

  /**
   * Logout.
   * 
   * @returns this 
   */
  logout() {
    this
      .log('Logout')
      .clickElementOnText('app-header button', 'Logout');
    return this;
  }
}
