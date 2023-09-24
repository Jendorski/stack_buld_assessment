import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServ: UserService) {}

  @Get()
  public async getAUser() {
    return await this.userServ.getUser();
  }
}
