import { Injectable } from '@nestjs/common';

export type User = any;
@Injectable()
export class UsersService {
    private readonly Users = [
    {
        userId:1,
        username: 'OGAmoor',
        password: 'amoor123'

    },
    {
        userId: 2,
        usesrname: 'YoussefBozo',
        password: 'L BOZO'
    }
    ];
    async findOne(username: string): Promise<User | undefined> {
        return this.Users.find(user => user.username === username)
    }
}
