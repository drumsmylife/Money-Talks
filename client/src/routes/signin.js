const User = require('../models/User');
const UserSession = require('../models/UserSession')

module.exports = (app) => {

    app.post('/api/account/signup', (req, res, next) => {
        const {body} = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let{ 
            email
        } = body;

        if(!firstName) {
            res.end({
                success: false,
                message: 'Error: First name cannot be blank.'
            });
        }
        if(!lastName) {
            res.end({
                success: false,
                message: 'Error: Last name cannot be blank.'
            });
        }
        if(!email) {
            res.end({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }
        if(!password) {
            res.end({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        email = email.toLowerCase();

        

        /* Steps
        1. Verify Email is not duplicate
        2 Save
        */

        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err){
                res.end({
                    success: false,
                    message: 'Error: Server error'
                });
            }else if (previousUsers.length > 0){
                res.end({
                    success: false,
                    message: 'Error: Account already exists'
                })
            }

            //save user
            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    res.end({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                res.end({
                    success: true,
                    message: 'Signed up'
                });
            });
        });
    });

    app.post('/api/account/signin', (req, res, next) => {
       const {body} = req;
       const {
           password
       } = body;
       let {
           email
       } = body;
       
        if(!email) {
            res.end({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }
        if(!password) {
            res.end({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if (err){
                return res.send({
                    success: false,
                    message: 'Error: Server Error' 
                });
            }
            if (user.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }
            const user = users[0];

            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }

            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server Error'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                });
            });
        });
       
    });

    app.get('/api/account/verify', (req, res, next) => {
        const {query} = req;
        const {token} = query;

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            
        })
    })
};