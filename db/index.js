const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admins:4825@cluster0.m1nlgpu.mongodb.net/newSchema');

// Define schemas
const AdminSchema = new mongoose.Schema({
   username : String,
   password : String

});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourse : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
        }
    ]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}