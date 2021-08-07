// interfaces
// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     },
// }
// const greetPerson = (person: IsPerson) => {
//     console.log('hello ', person.name)
// }
// greetPerson(me)
// console.log(me)
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 350)
// docTwo = new Payment('mario', 'pipe works', 200)
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('mario', 'work on mario app', 300)
// const invTwo = new Invoice('peach', 'work on mario app', 350)
// let invoices: Invoice[] = []
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
