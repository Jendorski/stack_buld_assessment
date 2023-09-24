import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configService from './config/config.service';
import { NotificationController } from './notification/notification.controller';
import { NotificationService } from './notification/notification.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [
    AppController,
    UserController,
    TaskController,
    NotificationController,
  ],
  providers: [AppService, UserService, TaskService, NotificationService],
})
export class AppModule {}
