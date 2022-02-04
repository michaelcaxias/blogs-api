const express = require('express');
const userController = require('./controllers/UserController');

const app = express();

app.use(express.json());

app.route('/user').post(userController.createUser);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
