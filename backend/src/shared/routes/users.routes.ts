import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../config/upload';

import CreateUserService from '../../modules/users/services/CreateUserService';
import UpdateUserAvatarService from '../../modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

interface UserNoPass {
  name: string;
  email: string;
  password?: string;
}

usersRouter.post('/', async (request, response) => {
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
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    const userNoPass: UserNoPass = user;
    delete userNoPass.password;

    return response.json(userNoPass);
  },
);

export default usersRouter;
