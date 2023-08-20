class LogIn{

    txtUserName='input[name="username"]';
    txtPassword='input[name="password"]';
    txtloginButton="button[type='submit']";
    txtVerfiyLogin="h6[data-v-f0c5131f]";
    txtInvalid="p[data-v-87fcf455]";
    txtEmptyFields="span[data-v-957b4417]";

    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }
    verfiyUsername(username){
        cy.get(this.txtUserName).should("have.value", username);
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }
    verfiyPassword(password){
        cy.get(this.txtPassword).should("have.value", password);
    }
    clickOnLoginButton(){
        cy.get(this.txtloginButton).click();
    }
    verfiyLogin(){
        cy.get(this.txtVerfiyLogin).should("contain", "Dashboard");
    }
    invalidUsernameOrPassword(){
        cy.get(this.txtInvalid).should("contain", "Invalid credentials");
    }
    emptyUsernameAndPassword(){
        cy.get(this.txtEmptyFields).should("contain", "Required");
    }

}
export default LogIn;