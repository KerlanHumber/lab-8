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

const studentJSON = JSON.stringify(student1);
console.log("JSON string:", studentJSON);