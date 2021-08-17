import { Module } from '@nestjs/common';
import { SubCausaService } from './subcausa.service';
import { SubCausasController } from './subcausa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCausasRepository } from './subcausa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SubCausasRepository])],
  controllers: [SubCausasController],
  providers: [SubCausaService],
})
export class SubCausaModule {}
