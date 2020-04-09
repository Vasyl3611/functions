class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.eventList = [];
    }
    getName() {
        return this.name + " " + this.surname;
    }
    getUserInfo() {
        console.log(this.name + " " + this.surname);
    }
    addEventobject(eventObject) {
        this.eventList.push(eventObject);
    }
}

class Event {
    constructor(name, location, price) {
        this.name = name;
        this.location = location;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    setName() {
        this.name = eventName;
    }
    getEvent() {
        return this.location + " " + this.price;
    }
    setEvent() {
        this.price = price;
        this.location = location;
    }
}
