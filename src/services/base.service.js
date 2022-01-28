class BaseService {
  constructor(model) {
    this.model = model;
  }

  async createOne(data) {
    return await this.model.create(data);
  }

  async getAll() {
    return await this.model.findMany({
      select: {
        name: true,
        posts: {
          orderBy: {
            createdAt: 'desc'
          },
          take: 1
        },
      },
    });
  }
}

export default BaseService;
