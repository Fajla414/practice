const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function (amount, box, tax) {
        console.log(this);
        this.salary = this.salary - amount - box - tax;
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

// // normalPerson.chargeBill()
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// console.log(friendlyPerson.salary);
// friendlyChargeBill(4000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30])
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40])
console.log(heroPerson.salary);