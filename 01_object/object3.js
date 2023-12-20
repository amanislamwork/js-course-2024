
// de-structure the object

const course = {
    courseName  : "JS course",
    coursePrice  : "Free",
}

console.log(course.coursePrice) // return Free

const {coursePrice : price} = course

console.log(price) // return Free

