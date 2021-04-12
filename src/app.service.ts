import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Name, User } from './user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getHello() {
    const user = await this.userModel.create({
      names: [
        new Name({
          firstName: 'test1',
          lastName: 'test2',
        }),
        new Name({
          firstName: 'test3',
          lastName: 'test4',
        }),
      ],
    });

    return user.names[0].toObject();
  }
}
