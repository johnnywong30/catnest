import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { Cat } from "./entities/cat.entity";

@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  private readonly cataasApi = "https://cataas.com";

  async getRandomCat(): Promise<Cat | null> {
    const endpoint = `${this.cataasApi}/cat`;
    try {
      const response = await firstValueFrom(
        // eslint-disable-next-line prettier/prettier
        this.httpService.get<Cat>(endpoint)
      );

      const data: Cat = response.data;
      return data;
    } catch (error) {
      console.error(`Error fetching random cat from CATaaS: \n${error}`);
      throw error;
    }
    return null;
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }
}
