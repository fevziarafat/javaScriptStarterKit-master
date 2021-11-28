import User from "./user.js";

export default class Customer extends User {
  //prototyping
  constructor(id, firstName, lastName, city, age, creditCardNumber) {
    super(id, firstName, lastName, city, age);
    this.creditCardNumber = creditCardNumber;
  }
}
