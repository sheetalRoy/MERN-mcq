const mongoose = require('mongoose')
const RegistrationSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    enroll_no: {
        type: String
    }, 
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:Courses
});
const RegistrationModel = mongoose.model("registrations", RegistrationSchema)
module.exports = RegistrationModel;

// add another model course.js
const mongoose = require('mongoose')
const CourseSchema = new mongoose.Schema({
    courseCode: {
        type: Number
    },
    courseName: {
        type: String
    }
    
});
const CourseModel = mongoose.model("Courses", CourseSchema)
module.exports = CourseModel;
