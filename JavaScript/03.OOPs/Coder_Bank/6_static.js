class config {
  static dbName = "dbName";
  static dbpass = "dbPass";
  static apiToken = "abcd";
}

console.log(config.apiToken);

// // let id = 1;
// class User {
//   static id = 1;
//   constructor(name, age, income) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//     this.id = User.id;
//   }

//   // static sortByAge(user1, user2) {
//   //   return user1.age - user2.age;
//   // }
//   // static sortByIncome(user1, user2) {
//   //   return user1.age - user2.age;
//   // }
// }

// const user1 = new User("Jack", 21, 20000, id);
// const user2 = new User("John", 71, 2000, id);
// const user3 = new User("sazib", 19, 5000, id);

// const arrUser = [user1, user2, user3];

// console.log(arrUser);
// arrUser.sort(User.sortByIncome);

// console.log(arrUser);
