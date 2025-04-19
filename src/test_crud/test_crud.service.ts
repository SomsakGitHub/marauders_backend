import { Injectable } from '@nestjs/common';
import { Test_CRUD } from '@prisma/client';
import { PrismaService } from 'prisma.service';

@Injectable()
export class TestCrudService {

    constructor(private prisma: PrismaService) {}  

    async getAll(): Promise<Test_CRUD[]> {
        const data = await this.prisma.test_CRUD.findMany();
        return data;
    }
    
    async createTest(data: any) {
        return this.prisma.test_CRUD.create({
            data,
        });
    }

    async update(id: number,data: string) {
        return this.prisma.test_CRUD.update({
            where: { id: id },
            data: { note: data }
        });
    }
}
