//Object Destructuring in javascript and APIs

const course ={
    courseName : "JS in English",
    price :"909",
    courseInstructor: "balraj"
}

// below provided all ways are fine just syntactically they  are different
// course.courseInstructor
// course[courseInstructor]

// format for below  {which key} = from which object
const {courseInstructor: instructor} = course;
// console.log(courseInstructor); //now no need to mention objectname again and again
// console.log(instructor); //now no need to mention objectname again and again

// destructuring React example **********************************/
// const navbar = (props.company) => {

// }
// navbar(company = "Balraj");

// below is more useful

// const navbar = ({company}) => {

// }
// navbar(company = "Balraj");


// API responses are in json form 
// {
//     "name":"balraj",
//     "age": 20,
//     "gender" :"male",
// }
// array of objects in form of json 
// [
//     {},
//     {},
//     {}
// ]