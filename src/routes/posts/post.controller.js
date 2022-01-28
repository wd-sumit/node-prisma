import PostService from '@services/post.service';

class PostController {
  getAll() {
    return async (req, res) => {
      const users = await PostService.getAllPosts();
      res.send(users);
    };
  }
}

export default new PostController();
