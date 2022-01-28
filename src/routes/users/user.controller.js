import UsersService from '@services/users.service';

class UserController {
  getAll() {
    return async (req, res) => {
      const users = await UsersService.getAllUsers();
      res.send(users);
    };
  }
}

export default new UserController();
