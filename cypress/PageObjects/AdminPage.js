class AdminPage{

    elements={
        currentUser:()=>cy.get('.oxd-userdropdown-name'),
        userName :()=>cy.get('div[data-v-957b4417] input.oxd-input.oxd-input--active'),
        userRolr:()=> cy.get('.oxd-label:contains("User Role")').parent().next(),
        EmployeeName:()=>cy.get('.oxd-autocomplete-text-input > input'),
        SearchBtn:()=>cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'),
        ResetBtn:()=>cy.get('.oxd-button.oxd-button--medium.oxd-button--ghost'),
        AddBtn:()=>cy.contains('Add'),
        //add user
        newEmployeeName:()=>cy.get('input[placeholder="Type for hints..."][data-v-75e744cd]'),
        newUserName :()=> cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        password:()=>cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmPass:()=>cy.get('input.oxd-input.oxd-input--active[type="password"][data-v-1f99f73c]').should('have.attr', 'autocomplete', 'off'),
        saveUser:()=>cy.get('.oxd-form-actions').contains('Save'),
        selectUserRole:()=> cy.get('[data-v-957b4417]').contains('User Role').parent().next(),
        selectStatus:()=> cy.get('[data-v-957b4417]').contains('Status').parent().next(),
        autoComplete: ()=>cy.get('.oxd-autocomplete-dropdown'),
        successwindow:()=> cy.get('.oxd-toast'),
        usernameErrorMessage:()=>cy.get('.oxd-input-field-error-message')

        
    }

    alreadyExistUsername(){
        this.elements.usernameErrorMessage().should('contain', 'Already exists');
    }
    verfiyAddUser(){
        this.elements.successwindow().should('exist');
    }
    
    searchUsers(searchCriteria) {
        if (searchCriteria.username !== undefined) {
          this.elements.userName().type(searchCriteria.username);
        }
        if (searchCriteria.userrole !== undefined) {
            this.elements.userRolr().click();
            cy.contains('.oxd-select-option span',searchCriteria.userrole ).click();
        }
        if (searchCriteria.employeename !== undefined) {
          this.elements.EmployeeName().type(searchCriteria.employeename);
          this.elements.autoComplete().contains(String(searchCriteria.employeename).split(' ')[0]).click(); 
        }
        if (searchCriteria.status !== undefined) {
          this.elements.selectStatus().click();
          cy.contains('.oxd-select-option span', searchCriteria.status).click();
        }
        this.elements.SearchBtn().click({force: true});
      }
           

        addNewUser(userRolr,empName,userstatus,username,pass,confPass)
        {
            this.elements.AddBtn().click();

            this.elements.newEmployeeName().type(empName);

            this.elements.autoComplete().contains(String(empName).split(' ')[0]).click();

            this.elements.selectUserRole().click();
            cy.contains('.oxd-select-option span', userRolr).click();
            this.elements.selectStatus().click();
            cy.contains('.oxd-select-option span', userstatus).click();
            this.elements.newUserName().type(username);
            this.elements.password().type(pass);
            this.elements.confirmPass().type(confPass);
            this.elements.saveUser().click();

        }

// interface parm{
//     username?:String,
// userRole?:string
// }





}
export default AdminPage;