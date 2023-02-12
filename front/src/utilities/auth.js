class Auth{
    constructor(){
        this.authenticated = false
    }

    loging(cb){
        this.authenticated = true
        cb()
    }
    
    logout(cb){
        this.authenticated = false
        cb()
    }
    
    isAthenticated(){
        return this.authenticated 
    }
}

export const auth = new Auth()