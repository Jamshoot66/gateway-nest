import { Controller, Get } from '@nestjs/common';
import { AppService, ITavernResponse } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tavern')
  async getTavern(): Promise<ITavernResponse> {
    return await this.appService.getTavern();
  }
}
