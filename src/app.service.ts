import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) {}   
  getHello(): string {
    return 'Hello World!';
  }

  async createTest(data: any) {
    return this.prisma.tset_db.create({
      data,
    });
  }
}
