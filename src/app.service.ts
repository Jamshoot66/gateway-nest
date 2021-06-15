import { ITavernResponse } from './types/types';

require('isomorphic-fetch');
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getTavern(): Promise<ITavernResponse> {
    const tavernResp = await fetch('http://localhost:1338/tavern');
    const tavern = await tavernResp.json();
    const excuseResp = await fetch('http://localhost:1337/excuse');
    const excuse = await excuseResp.json();

    return {
      tavern,
      excuse,
    };
  }
}
