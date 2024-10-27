// src/lib/user.ts

import bcrypt from 'bcryptjs'; // Make sure you have bcryptjs installed
import UserModel, { IUser } from '@/models/User';

export const validateUser = async (email: string, password: string): Promise<IUser> => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  return user;
};
