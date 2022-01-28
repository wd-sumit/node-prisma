import express from 'express';
import userRouter from '@routes/users';
import postRouter from '@routes/posts';

const app = express();

app.use('/users', userRouter);
app.use('/posts', postRouter);

export default app;
