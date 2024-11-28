class Student {
    constructor(name, age, enrolled, courses){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.courses = courses;
    }

    addCourse(course) {
        this.courses.push(course);
    }

    getTotalCourses() {
        return this.courses.length;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Courses: ${this.courses} `);
    }
}

// Creating the object
const student1 = new Student("Alice", 23, true,["Math", "Science", "History"]);

// Adding a new course
student1.addCourse("French");

// Calculate and print the total number of courses
console.log("Total Courses:", student1.getTotalCourses());

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

// Merging arrays
const newCourses = ["Literature", "English"];
const mergedCourses = [...student1.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);

// Calculating the average score
const totalScore = scores.reduce((acc, score) => acc + score, 0);
const averageScore = totalScore / scores.length;

console.log("Average Score:", averageScore);