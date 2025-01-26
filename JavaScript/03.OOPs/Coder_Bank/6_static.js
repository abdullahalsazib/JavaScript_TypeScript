class User {
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
  }

  static sortByAge(user1, user2) {
    return user1.age - user2.age;
  }
  static sortByIncome(user1, user2) {
    return user1.age - user2.age;
  }
}

const user1 = new User("Jack", 21, 20000);
const user2 = new User("John", 71, 2000);
const user3 = new User("sazib", 19, 5000);

const arrUser = [user1, user2, user3];

console.log(arrUser);
arrUser.sort(User.sortByIncome);

console.log(arrUser);
