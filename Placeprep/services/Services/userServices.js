const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken');
class UserService{
    static async userRegister(email,password){
        try {
            const createuser = new userModel({ email, password });
            return await createuser.save();
        } catch (error) {
            throw error
        }
    }

    static async checkuser(email) {
        try {
            return await userModel.findOne({email})
        } catch (error) {
            throw error
        }
    }

    static async generateToken(tokendata,secretkey,jwt_expire) {
        return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})
    }

    static async userRegister(email, password, imagePath) {
        try {
            const createuser = new userModel({ email, password, image: imagePath });
            return await createuser.save();
        } catch (error) {
            throw error
        }
    }

}



module.exports = UserService;