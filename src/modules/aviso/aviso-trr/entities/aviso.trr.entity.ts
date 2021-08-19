import { Transformador } from '../../../transformador/tr/entities/tr.entity';
import { BaseEntity,ManyToOne,JoinColumn, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';
import { Avisos } from '../../avisos/entities/avisos.entity';

@Entity('aviso_transformadores_retirados')
export class AvisoTrr extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  avisotrrId: number;
  @ManyToOne(type => Transformador, tr => tr.transformadorId,{ eager: true })
  @JoinColumn({ name: 'transformadorId' })
  tr:Transformador

}
