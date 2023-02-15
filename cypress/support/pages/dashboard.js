import CommonPage from '../shared/common';

export default class DashboardPage extends CommonPage {
  get leftMenu_content() {
    return {
      dashboard: 'Dashboard',
      calendar: 'Calendar',
      jobs: 'Jobs',
      supportHours: 'Support hours',
      inbox: 'Inbox',
      billing: 'Billing',
      myClients: 'My clients',
      account: 'Account',
      mySupportWorkes: 'My support workers',
    };
  }

  get coordinatorLeftMenu_content() {
    return {
      dashboard: 'Dashboard',
      searchWorkers: 'Search workers',
      shortlist: 'Shortlist',
      approvedWorkers: 'Approved workers',
      compliance: 'Compliance',
      account: 'Account',
    };
  }

  get membersApp() {
    return 'app-members-area';
  }

  get avatar() {
    return '#profileCardAvatar';
  }

  get setup_your_account() {
    return '#urgentCallToAction a';
  }

  get app_verify_mobile_number() {
    return 'app-verify-mobile-number';
  }

  get verificationCodeInput() {
    return 'input[formcontrolname="verificationCode"]';
  }

  get account_btn() {
    return '.editProfile span';
  }

  /**
   * Navigate to designated page.
   *
   * @param item - menu
   * @param admin - The defaul is False
   */
  navigateInLeftMenu(item, admin = false) {
    cy.log(`Navigate to ${item} in left menu`);

    if (!admin) {
      cy.get('#mainMenuSection .itemList a.itemLink')
        .contains(item)
        .parents('a')
        .click({ force: true });
    } else {
      cy.get('li.main-navigation-list__item')
        .contains(item)
        .should('exist')
        .click({ force: true });
    }

    return this;
  }

  /**
   * Verify Dashboard page is visible.
   * 
   * @returns this
   */
  verifyDashboardVisible() {
    return this.log('Verify Dashboard page is visible')
      .verifyElementVisible(this.membersApp)
      .verifyElementVisible(this.avatar)
      .verifyTextVisible('Call 1300 73 65 73')
      .verifyTextVisible('Help centre');
  }
}
