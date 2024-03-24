export class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description !== undefined ? description : "";
    }

    toStr() {
        return "Task n°: " + this.id + "\nName: " + this.name + "\nDescription: " + this.description;
    }

    describe() {
        console.log(this.toStr());
    }
}