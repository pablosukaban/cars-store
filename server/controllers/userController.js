class UserController {
    async registration(req, res) {}
    async login(req, res) {}
    async check(req, res) {
        res.json('user check work');
    }
}

export default new UserController();
