import LogIn from "../PageObjects/LoginPage";
describe('Login page test cases', () => {
 
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Login with valid username and password', () => {
    cy.fixture('User.json').then((data) => {
      const ln=new LogIn();
      ln.setUserName(data.validUser.Username);
      ln.verfiyUsername(data.validUser.Username);
      ln.setPassword(data.validUser.Password);
      ln.verfiyPassword(data.validUser.Password);
      ln.clickOnLoginButton();
      ln.verfiyLogin();
      }); 
  });

  it('Login with invalid username', () => {
    cy.fixture('User.json').then((data) => {
      const ln=new LogIn();
      ln.setUserName(data.invalidUsername.Username);
      ln.verfiyUsername(data.invalidUsername.Username);
      ln.setPassword(data.validUser.Password);
      ln.verfiyPassword(data.validUser.Password);
      ln.clickOnLoginButton();
      ln.invalidUsernameOrPassword();
      }); 
  });

  it('Login with invalid password', () => {
    cy.fixture('User.json').then((data) => {
      const ln=new LogIn();
      ln.setUserName(data.validUser.Username);
      ln.verfiyUsername(data.validUser.Username);
      ln.setPassword(data.invalidUserPassword.Password);
      ln.verfiyPassword(data.invalidUserPassword.Password);
      ln.clickOnLoginButton();
      ln.invalidUsernameOrPassword();
      }); 
  });
  
  it('Login with Empty fields', () => {
    cy.fixture('User.json').then((data) => {
      const ln=new LogIn();
      ln.verfiyUsername(data.EmptyFields.Username);
      ln.verfiyPassword(data.EmptyFields.Password);
      ln.clickOnLoginButton();
      ln.emptyUsernameAndPassword();
      }); 
  });
  
  it('Login with SQL injection', () => {
    cy.fixture('User.json').then((data) => {
      const ln=new LogIn();
      ln.setUserName(data.SQLInjection.Username);
      ln.verfiyUsername(data.SQLInjection.Username);
      ln.setPassword(data.SQLInjection.Password);
      ln.verfiyPassword(data.SQLInjection.Password);
      ln.clickOnLoginButton();
      ln.invalidUsernameOrPassword();
      }); 
  });

  




})