import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { TestCrudService } from './test_crud.service';

@Controller('test-crud')
export class TestCrudController {
    constructor(private readonly testCrudService: TestCrudService) {}

    @Get()
    getAll() {
        return this.testCrudService.getAll();
    }
    
    @Post()
    createTest(@Body() data: string) {
      return this.testCrudService.createTest(data);
    }

    @Put()
    update(@Body() id: number, data: string) {
      return this.testCrudService.update(id,data);
    }

//   @Get()
//   getCats(): string[] {
//     return this.catsService.getCats();
//   }

//   @Get(':name')
//   getCatByName(@Param('name') name: string): string {
//     if (name.toLowerCase() === 'garfield') {
//       return 'You found Garfield! Congratulations! 🎉';
//    }
//     return `Meow! Here's ${name}, your cute cat.`;
//   }
    
}
