import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

interface UserNoPass {
  name: string;
  email: string;
  password?: string;
}

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const userNoPass: UserNoPass = user;
    delete userNoPass.password;

    return response.json(userNoPass);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
