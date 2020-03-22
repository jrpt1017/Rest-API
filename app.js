const express = require('express');

const app = express();
const port = process.env.port || 3000;
const userRouter = express.Router();

userRouter.route('/users')
  .get((req, res) => {
    const response = 'Hello';
    res.json(response);
  });

app.use('/api', userRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Express! hehe11');
});

app.listen(port, () => {
  console.log(`Successfully Running in Port: ${port}`);
});
