import { Controller, Get, Param } from "@nestjs/common";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findRandomCat() {
    return this.catsService.getRandomCat();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.catsService.findOne(+id);
  }

  // @Get("/:tag")
  // findByTag(@Param("tag") tag: string) {
  // return this.catsService.findByTag(tag);
  // }
}
