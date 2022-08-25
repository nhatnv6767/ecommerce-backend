const User = require("../models/user")


exports.createOrUpdateUser = async (req, res) => {
    const {name, picture, email} = req.user;

    const user = await User.findOneAndUpdate({email: email}, {
        name,
        picture,
    }, {
        new: true,
    })
}