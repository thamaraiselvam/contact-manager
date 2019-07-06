const userSchema = require('./../model/user');

class UserController{
    constructor(){ }

    async register(username, password){
        try{
            await userSchema.create({
                username: username,
                password: password
            });

            return {
                status: 'success',
                msg: 'User created'
            }
        } catch(err){
            return {
                status: 'error',
                msg: 'User creation failed'
            }
        }
    }

    async login(username, password){
        try{
            let user = await userSchema.findOne({
                username: username,
                password: password,
            });

            if(!user){
                throw new Error('invalid creds');
            }

            let token = this.generateToken();

            this.saveToken(user._id, token);

            user.token = token;

            return {
                status: "success",
                data: user,
            };

        } catch(error){
            return {
                status: 'error',
                msg: 'username or password invalid'
            }
        }
    }

    async saveToken(userID, token){
        try{
            await userSchema.update({_id: userID}, {token: token})
        } catch(err){
            console.log(err);
        }
    }

    generateToken() {
        let timeStamp = `${new Date().getTime()}`;

        return require('crypto').createHash('md5').update(timeStamp).digest('hex')
    }

    async validateToken(res, token, userId){
        try{
            let user = await userSchema.findOne({
                token: token
            });

            if(!user){
                throw new Error('invalid token');
            }

            global.userSession = user;
        } catch(error){
            res.send({
                status: 'error',
                msg: 'Invalid token'
            });
        }
    }
}


module.exports = new UserController();
