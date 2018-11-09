// const bcrypt = require("bcryptjs");

module.exports = {
    signup: (req, res) => {
        const dbInstance = req.app.get("db");
        const { username, password } = req.body;


        console.log(username)
        console.log(req.body)
        dbInstance.createUser([username, password])
            .then( response => {
                res.status(200).send(response[0]);
            })
            .catch(err => res.status(404).send(err));
    },

    login: (req, res) => {
        let dbInstance = req.app.get("db");
        let { username, password } = req.body;
        dbInstance.verifyUser([username, password])
            .then(response => {
                res.status(200).send(response[0]);
            })
            .catch(err => res.status(404).send(err));    },

    userData(req, res) {
        if (req.session.user) {
            res.status(200).send(req.session.user);
        } else {
            res.sendStatus(401);
        }
    },

    logout(req, res) {
        req.session.destroy();
        res.redirect('http://localhost:3000')
    },

    getUserPosts: (req, res) => {
        let dbInstance = req.app.get("db");
        dbInstance.join();
        let { search, userposts } = req.query;
        let { id } = req.params;
    },
        
    createUserPosts: (req, res) => {
        let { id } = req.params;
        let { title, img, content } = req.body;
        id =+ id;
        
        let dbInstance = req.app.get('db');
        dbInstance.createUserPosts([title, img, content, id]        .then(response => {
            res.status(200).send(resonse);
            }))
    },
        
    getSinglePost: (req, res) => {
        let { id } = req.params;
        id =+ id;
        
        let dbInstance = req.app.get('db');
        dbInstance.getSinglePost([id]).then(response => {
        res.status(200).send(response);
        })
    }
};
