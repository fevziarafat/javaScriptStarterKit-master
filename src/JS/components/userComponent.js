import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../../crossCuttingConcerns/logging/logger.js";
import Customer from "../../models/customer.js";
import User from "../../models/user.js";
import UserService from "../services/userService.js";

//console.log("user component loaded");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

// let user1 = new User(1, "Fevzi", "ARAFAT", "Çorum");
// let user2 = new User(1, "Engin", "DEMİROĞ", "Ankara");

//userService.add(user1);
//userService.add(user2);

//console.log(userService.geyById(1));

//console.log(userService.list());

console.log("------------------------");

userService.load();

let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Anakara", "eee");

customerToAdd.type = "customer";

//console.log("console.log(userService.add);");
//userService.add;
userService.add(customerToAdd);
console.log("console.log(userService.customers);");
console.log(userService.customers);
console.log("console.log(userService.employees);");
console.log(userService.employees);
console.log("console.log(userService.errors);");
console.log(userService.errors);

console.log(userService.getCustomersSorted());
