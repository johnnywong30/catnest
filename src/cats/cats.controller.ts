import { Controller, Get, Param, Query } from "@nestjs/common";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findCats(
    @Query("skip") skip: number = 0,
    @Query("limit") limit: number = 10
  ) {
    return this.catsService.findCats(skip, limit);
  }

  @Get("/random")
  findRandomCat() {
    return this.catsService.getRandomCat();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.catsService.findOne(id);
  }
}
