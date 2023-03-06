/**
 * Base actions that are common to all pages
 */
export default class CommonPage {
  get dialog_btn() {
    return 'mat-dialog-container button';
  }

  get dialog_closeBtn() {
    return 'mat-dialog-container button.close';
  }

  get dialog_actions_btn() {
    return '.mat-dialog-actions button';
  }

  get menu_item() {
    return 'button.mat-menu-item';
  }

  get content_anchor() {
    return 'mat-dialog-content a';
  }

  get default_btn() {
    return 'button';
  }

  get default_btnSpan() {
    return 'button>span';
  }

  get default_textarea() {
    return 'textarea[formcontrolname]';
  }

  get default_selectorInput() {
    return 'app-suburb-selector input';
  }

  get default_required() {
    return '.required';
  }

  get default_chkLabel() {
    return '.mat-checkbox-label';
  }

  get default_radioLabel() {
    return '.radioLabel';
  }

  /**
   * Log designated text.
   *
   * @param text - The string that user wants to log 
   * @returns this
   */
  log(text) {
    cy.log(text);
    return this;
  }

  /**
   * Visit a designated page.
   *
   * @param url - The url that user wants to visit
   * @returns this
   */
  visitPage(url) {
    cy.visit(url);
    return this;
  }

  /**
   * Add waiting time to wait for response if needed.
   *
   * @param time - The time that user wants to wait
   * @returns this
   */
  wait(time) {
    cy.wait(time);
    return this;
  }

  /**
   * Input into the text field.
   *
   * @param selector - A designated element 
   * @param text - The text that user wants to type
   * @returns this
   */
  inputTextField(selector, text) {
    cy.get(selector).should('exist').wait(1000).clear() // set wait cypress to run stable
      .type(text);
    return this;
  }

  /**
   * Input the last text field.
   * 
   * @param selector - The element 
   * @param text - The text
   */
  inputLastTextField(selector, text) {
    cy.get(selector).last().should('exist').clear()
      .type(text);
    return this;
  }

  /**
   * Input text field at position.
   * 
   * @param selector - A designated element
   * @param text - The text 
   * @param position - The position of element
   * @returns this
   */
  inputTextFieldAtPosition(selector, text, position) {
    cy.get(selector).eq(position).should('exist').clear({ force: true })
      .type(text, { force: true });
    return this;
  }

  /**
   * Clear the value of Input.
   * 
   * @param selector - The element
   * @param isForce - - This is optional. The default is False. Force the click even when element hasn't reached an actionable state
   * @returns this
   */
  clearValueInput(selector, isForce = false) {
    cy.get(selector).should('be.visible').clear({ force: isForce });
    return this;
  }

  /**
   * Click a designated element.
   *
   * @param selector - A designated element
   * @param isForce - This is optional. The default is False. Force the click even when element hasn't reached an actionable state
   * @returns this
   */
  clickElement(selector, isForce = false) {
    cy.get(selector).should('exist').click({ force: isForce });
    return this;
  }

  /**
   * Click a designated element by index.
   *
   * @param selector - A designated element
   * @param index - The index of the designated element
   * @param isForce - This is optional. The default is False. Force the click even when element hasn't reached an actionable state
   * @returns this
   */
  clickElementByIndex(selector, index, isForce = false) {
    cy.get(selector).eq(index).should('exist').click({ force: isForce });
    return this;
  }

  /**
   * Click a designated element with text.
   *
   * @param selector - A designated element
   * @param text - The text that element contains
   * @param isForce - This is optional. The default is False. Force the click even when element hasn't reached an actionable state
   * @returns this
   */
  clickElementOnText(selector, text, isForce = false) {
    cy.get(selector).contains(text).should('exist').click({ force: isForce });
    return this;
  }

  /**
   * Click the last element.
   * 
   * @param selector - A designated element
   * @param isForce  - This is optional. The default is False. Force the click even when element hasn't reached an actionable state
   * @returns this
   */
  clickLastElement(selector, isForce = false) {
    cy
      .get(selector).last().should('exist')
      .click({ force: isForce });
    return this;
  }

  /**
   * Verify the current URL.
   * 
   * @param url - The URL that user wants to verify 
   * @returns this
   */
  verifyCurrentURL(url) {
    cy.url().should('contain', url);
    return this;
  }

  /**
   * Verify that element is visible.
   *
   * @param selector -  A designated element
   * @returns this
   */
  verifyElementVisible(selector) {
    cy.get(selector).should('be.visible');
    return this;
  }

  /**
   * Verify that element contains text.
   *
   * @param selector - A designated element
   * @param text - The text that user wants to verify
   * @param position - This is optional. The default is False. The position of the designated element
   * @returns this
   */
  verifyElementContainsText(selector, text, position = null) {
    if (position) {
      cy.get(selector).eq(position).contains(text).should('exist');
    } else {
      cy.get(selector).contains(text).should('exist');
    }
    return this;
  }

  /**
   * Verify Element is not exist.
   * 
   * @param selector - A designated element 
   * @returns this
   */
  verifyElementNotExist(selector) {
    cy.get(selector).should('not.exist');
    return this;
  }

  /**
   * Verify Element is not exist.
   * 
   * @param selector - A designated element 
   * @returns this
   */
  verifyElementNotVisible(selector) {
    cy.get(selector).should('not.visible');
    return this;
  }

  /**
   * Verify Text is visible.
   * 
   * @param text - The text
   * @returns this
   */
  verifyTextVisible(text) {
    cy
      .get('body').contains(text).should('be.visible');
    return this;
  }

  /**
   * Verify Text is exist.
   * 
   * @param text - The text
   * @returns this
   */
  verifyTextExist(text) {
    cy
      .get('body').contains(text).should('exist');
    return this;
  }

  /**
   * Verify Text isn't exist.
   * 
   * @param text - The text
   * @returns this
   */
  verifyTextNotExist(text) {
    cy.get('body').contains(text).should('not.exist');
    return this;
  }


  /**
   * Select an item in the selector dropdown. 
   * 
   * @param selector - A designated dropdown element
   * @param value - A value need to select
   * @param position - The position of element
   * @returns this
   */
  selectDropdown(selector, value, position = 0) {
    cy.get(selector).eq(position).should('exist').select(value, { force: true });
    return this;
  }

  /**
   * Verify the element if it's exist.
   * 
   * @param selector - the element
   * @param timeOut - the waiting timeout 
   * @returns this 
   */
  verifyElementExist(selector, timeOut = 500) {
    cy.wait(timeOut);
    cy.get(selector).should('exist');
    return this;
  }

  /**
   * Clear the text field.
   * 
   * @param selector - the element
   * @param isForce - force if needed 
   * @returns this 
   */
  clearTextField(selector, isForce = false) {
    cy.get(selector).should('be.visible').clear({ force: isForce });
    return this;
  }

  /**
   * Get attribut of selector.
   * 
   * @param {string} selector - The list text or an item
   * @param {string} type - val
   * @returns this
   */
  getAttribute(selector, type) {
    cy
      .get(selector)
      .invoke(type)
      .then((text) => text);
    return this;
  }
}
