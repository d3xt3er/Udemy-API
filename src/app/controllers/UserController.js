const User = require('../models/User');

class UserController {
   async store(req, res){
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        return res.json({user})
    }
}

module.exports = new UserController();
