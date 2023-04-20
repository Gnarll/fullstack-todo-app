import { Injectable } from '@nestjs/common';
import { EnumConfig } from './enumConfig/enumConfig';
import {
  SequelizeOptionsFactory,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { Todo } from 'src/todos/models/todo.model';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { dialect, logging, host, port, username, password, database },
    } = this.configService.get(EnumConfig.DATABASE);
    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [Todo],
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
