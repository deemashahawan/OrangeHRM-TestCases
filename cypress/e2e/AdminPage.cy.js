import LogIn from "../PageObjects/LoginPage";
import AdminPage from "../PageObjects/AdminPage";

describe('Admin page test cases', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            cy.fixture('User.json').then((data) => {
              const ln=new LogIn();
              ln.setUserName(data.validUser.Username);
              ln.setPassword(data.validUser.Password);
              ln.clickOnLoginButton();
              });

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
      });

      it('add new user with valid inputs',()=>{
        const admin=new AdminPage();
        admin.elements.currentUser().invoke('text').then((user)=>{
        admin.addNewUser('Admin',user,'Enabl','Halash','hala123@','hala123@');
        })
      });

      it('add new user with already exist username',()=>{
        const admin=new AdminPage();
        admin.elements.currentUser().invoke('text').then((user)=>{
        admin.addNewUser('Admin',user,'Enabl','deemashahwan','deema123','deema123');
        })
        admin.alreadyExistUsername();
      });

      it('search by username,user role,empName,status',()=>{
        const admin=new AdminPage();
        admin.elements.currentUser().invoke('text').then((user)=>{
        const searchCriteria1 = { username: 'user1',userrole: 'Admin', employeename:user,status:'Enabled' };
        admin.searchUsers(searchCriteria1);
        })
      });

      it('search by username',()=>{
        const admin=new AdminPage();
        const searchCriteria1 = { username: 'deemashahwan' };
        admin.searchUsers(searchCriteria1);
      });

      it('search by username,empName',()=>{
        const admin=new AdminPage();
        admin.elements.currentUser().invoke('text').then((user)=>{
        const searchCriteria1 = { username: 'deemashahwan', employeename:user };
        admin.searchUsers(searchCriteria1);
        })
      });

})