const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db/index");
const userMiddleware = require("../middleware/user");

router.post('/signup', (req, res) => {
    // Implement user signup logic
const username = req.body.username;
const password = req.body.password;

User.create({
    username,
    password
})
.then(function(){
    res.json({msg:"user's record is added to db"});
});

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses: response // key value pair
        })
    });

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne(
        { username: username },
        { $push: { purchasedCourse: courseId }  }
    )
    .then(()=>
        {
        res.send("purchase id pushed");
    });


});


router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router;