import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

interface UserNoPass {
  name: string;
  email: string;
  password?: string;
}

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userNoPass: UserNoPass = user;
  delete userNoPass.password;

  return response.json({ userNoPass, token });
});

export default sessionsRouter;