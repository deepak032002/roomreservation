const User = require('../../models/user')

// ===================> Sign Up Route <====================
const signup = async(req, res, next) => {
    try {
        let user = null
        const payload = req.body

        user = await User.findOne({email: req.body.email})
        
        if(!user){
            return res.status(200).json({ msg: "User already available with same email try with another email!", success: false })
        }

        user = await User(payload)
        user.save()

        res.status(200).json({msg: "User Created!", success: true})

    } catch (err) {
        next(err)
    }

}

// ===================> Sign Up Route <====================
const signin = async(req, res) => {
    res.status(200).send('Hello from signin')
}

module.exports = { signup, signin }