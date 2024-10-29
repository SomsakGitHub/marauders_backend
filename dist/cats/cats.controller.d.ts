import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    getCats(): string[];
    getCatByName(name: string): string;
}
