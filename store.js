import { observable, action, computed } from "mobx"

class Store {

    @observable count = 0;
    @observable fname = ["Osman", "Furkan"];
    @observable lname = ["Pekaydın", "Baban"];
    @observable phone = ["05534965640", "05534965641"];
    @observable mail = ["pekaydin580@gmail.com", "pekaydin58@hotmail.com"];

    @action increment() {
        this.count += 1;
    }

    @action decrement() {
        this.count -= 1;
    }

    @action.bound changeFirstName() {
        const shifted = this.fname.shift();
        this.fname.push(shifted);
    }

    @action.bound changeLastName() {
        const shifted = this.lname.shift();
        this.lname.push(shifted);
    }

    @action.bound changeMail() {
        const shifted = this.mail.shift();
        this.mail.push(shifted);
    }

    @action.bound changePhone() {
        const shifted = this.phone.shift();
        this.phone.push(shifted);
    }

    @computed get fullname() {
        return this.fname[0] + " " + this.lname[0];
    }
}

export default new Store();
