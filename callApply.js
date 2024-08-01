const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 30000
}

// normalPerson.chargeBill()
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
console.log(friendlyPerson.salary);
friendlyChargeBill(4000);
console.log(friendlyPerson.salary);