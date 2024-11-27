class Student {
    constructor(name, age, enrolled, courses){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.courses = courses;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const student1 = new Student("Alice", 20,["Math", "Science", "History"]);


console.log("Name:", student1.name);
console.log("Age:", student1.age);

student1.displayInfo();

// Converting the student object into JSON
const studentJSON = JSON.stringify(student1);
console.log("JSON string:", studentJSON);

// Converting the JSON string back to JavaScript
const studentObjectFromJSON = JSON.parse(studentJSON);
console.log("Object from JSON:", studentObjectFromJSON);

// Comparint the two objects
console.log("Are they equal?", student1 === studentObjectFromJSON);


