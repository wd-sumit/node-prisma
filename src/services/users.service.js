import prisma from '@database';
import BaseService from './base.service';

class UserService extends BaseService {
  async createOneUser(data) {
    return await super.createOne(data);
  }

  async getAllUsers() {
    return await super.getAll()
  }
}

export default new UserService(prisma.user);
