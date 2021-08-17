import { Module } from '@nestjs/common';
import { estadoApoyoService } from './estado.apoyo.service';
import { estadoApoyoController } from './estado.apoyo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { estadoApoyoRepository } from './estado.apoyo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([estadoApoyoRepository])],
  controllers: [estadoApoyoController],
  providers: [estadoApoyoService],
})
export class estadoApoyoModule {}
