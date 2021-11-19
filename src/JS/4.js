class Customer{
    constructor(id,customerNumber) {
        this.id=id,
        this.customerNumber=customerNumber
    }
}


let customer=new Customer(1,"12345");
//prototyping nesneye bambaşka bir özellik ekleme yöntemidir
customer.name="Fevzi arafat"
console.log(customer.id)
console.log(customer.name)

Customer.bisey="bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)