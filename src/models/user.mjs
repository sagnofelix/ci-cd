export class User{
    constructor(fname,lname) {
        this.fname = fname,
        this.lname = lname
    }

    fullName = () => {
        return this.fname + " " + this.lname
    }

    sayName = () =>  {
        console.log("Hello \nI'm "+this.fullName())
    }

}