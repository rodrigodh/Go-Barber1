import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

interface IUserNoPass {
  name: string;
  email: string;
  password?: string;
}

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = container.resolve(AuthenticateUserService);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userNoPass: IUserNoPass = user;
  delete userNoPass.password;

  return response.json({ user: userNoPass, token });
});

export default sessionsRouter;
