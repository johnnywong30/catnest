import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { Cache } from "cache-manager";
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

  async findCats(skip: number = 0, limit: number = 10): Promise<Cat[] | null> {
    const endpoint = `${this.cataasApi}/api/cats?limit=${limit}&skip=${skip}`;
    try {
      const response = await firstValueFrom(
        // eslint-disable-next-line prettier/prettier
        this.httpService.get<Cat[]>(endpoint)
      );
      const data: Cat[] = response.data;
      return data;
    } catch (error) {
      console.error(`Error fetching cats from CATaaS: \n${error}`);
      throw error;
    }
    return null;
  }

  async findOne(id: string): Promise<Cat | null> {
    const endpoint = `${this.cataasApi}/cat/${id}`;
    try {
      const response = await firstValueFrom(
        // eslint-disable-next-line prettier/prettier
        this.httpService.get<Cat>(endpoint)
      );
      const data: Cat = response.data;
      return data;
    } catch (error) {
      console.error(`Error fetching cat with id ${id} from CATaaS: \n${error}`);
      throw error;
    }
    return null;
  }
}
