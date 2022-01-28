import prisma from '@database';
import BaseService from './base.service';

class PostService extends BaseService {
  async createOnePost(data) {
    return await super.createOne(data);
  }

  async getAllPosts() {
    return await super.getAll();
  }
}

export default new PostService(prisma.post);
