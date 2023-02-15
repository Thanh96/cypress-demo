import LoginPage from '../support/pages/login';
import DashboardPage from '../support/pages/dashboard'

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login', () => {
  const clientEmail = 'automation_joshua+client@donotuse.com.au';
  const clientPass = 'qaAutomation2021';

  it('ES-T118. Login with valid credentials', () => {
    loginPage 
      .log('*** Go to login page')
      .visitPage('/')

      .log(`*** Login: ${clientEmail}`)
      .login(clientEmail, clientPass);
    
    dashboardPage
      .verifyDashboardVisible();
  });
});
