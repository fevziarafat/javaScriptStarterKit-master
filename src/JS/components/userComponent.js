import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../../crossCuttingConcerns/logging/logger.js";
import User from "../../models/user.js";
import UserService from "../services/userService.js";

console.log("user component loaded");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Fevzi", "ARAFAT", "Çorum");
let user2 = new User(1, "Engin", "DEMİROĞ", "Ankara");

userService.add(user1);
userService.add(user2);

console.log(userService.geyById(1));

console.log(userService.list());

console.log("------------------------");

userService.load();
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);