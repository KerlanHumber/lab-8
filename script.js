class Student {
    constructor(name, age, enrolled, courses){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.courses = courses;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, `);
    }
}

// Creating the object
const student1 = new Student("Alice", 20, "Math", "Science", "History");

// Print the name and age
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

// Destructuring the student object
const { name, courses } = student1;
console.log("Name:", name);
console.log("Courses:", courses);

//Destructuring the scores array
const scores = [75, 50, 99, 62];
const [firstScore, secondScore, ...restScores] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

// Cloning the student object
const studentClone = { ...student1 };

//Adding a new property to the clone
studentClone.graduationYear = 2025;
console.log("Student Clone:", studentClone);
