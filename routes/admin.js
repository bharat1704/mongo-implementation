const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

Admin.create({ 
    username: username, 
    password: password 
})

.then(function(){
    res.json({ msg: "admin created succesfully directly without MW" });
})

})

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description= req.description;
    const price = req.body.number;
    const imageLink = req.body.number;

    Admin.create({
    title,
    description,
    price,
    imageLink 

})
.then(function(){

    res.json({msg:"Course details updated"})

})
    

});

router.get('/courses', (req, res) => {
    // Implement fetching all courses logic
res.json({
    "msg":"hi bharat"
})
});

module.exports = router;