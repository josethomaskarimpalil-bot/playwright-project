class SignOut{
    constructor(page){
        this.page=page
        this.signoutfield=page.locator('#logout2')
    }

    async signout(){
        await  this.signoutfield.click()
        return this
    }
}
module.exports=SignOut