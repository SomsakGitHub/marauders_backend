import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'prisma.service';
import { TestCrudService } from './test_crud/test_crud.service';
import { TestCrudController } from './test_crud/test_crud.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, TestCrudController],
  providers: [AppService, PrismaService, TestCrudService],
})
export class AppModule {}
