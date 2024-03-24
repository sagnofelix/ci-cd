export class User{
    constructor(id, fname, lname) {
        this.id=id
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