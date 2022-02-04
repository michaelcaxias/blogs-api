const express = require('express');
const { verifyToken } = require('./controllers/middlewares/verifyToken');
const userController = require('./controllers/UserController');
const categoriesController = require('./controllers/CategoryController');

const app = express();

app.use(express.json());

app.route('/user')
.post(userController.createUser)
.get(verifyToken, userController.getAllUsers);

app.route('/user/:id').get(verifyToken, userController.getUserById);

app.route('/login').post(userController.loginUser);

app.route('/categories').post(verifyToken, categoriesController.create);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
