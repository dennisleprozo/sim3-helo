const bcrypt = require("bcryptjs");

module.exports = {
  async signup(req, res) {
    let { username, password } = req.body;
    let db = req.app.get("db");
    let foundUser = await db.find_user([username]);
    if (foundUser[0])
        return res.status(200).send({ message: "User Name already in use" });
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    // destructuring array of username, hash
    let [createdUser] = await db.create_customer([username, hash]);
    req.session.user = {username: createdUser.username};
    res.status(200).send({ message: "logged In" });
  },

  async login(req, res) {
    let { username, password } = req.body;
    let db = req.app.get("db");
    let [foundUser] = await db.find_user([username]);
    if (foundUser) {
        // compareSync returns either true or false
        let result = bcrypt.compareSync(password, foundUser.password);
        if (result) {
        // if foundUser
            req.session.user = {username: foundUser.username};
            res.status(200).send({ message: "logged In" });
        } else {
            res.status(401).send({ message: "Unauthorized: password incorrect" });
        }
        } else {
        res.status(401).send({ message: "User Name not found." });
        }
    },

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
    }
};
