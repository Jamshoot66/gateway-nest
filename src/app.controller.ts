import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ITavernResponse } from './types/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tavern')
  async getTavern(): Promise<ITavernResponse> {
    return await this.appService.getTavern();
  }
}
