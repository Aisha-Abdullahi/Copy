const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;   //person2 points to the same object as person 1. Therefore, the change affects person 1 as well
person2.firstName = "Simon"

// Modify the property `firstName` of the `person2` in "Simon".


console.log(person1);
console.log(person2);
