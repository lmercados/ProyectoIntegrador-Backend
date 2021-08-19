import { Transformador } from '../../../transformador/tr/entities/tr.entity';
import { BaseEntity,ManyToOne,JoinColumn, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_transformadores_instalados')
export class AvisoTri extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  avisotriId: number;
  @ManyToOne(type => Transformador, tr => tr.transformadorId,{ eager: true })
  @JoinColumn({ name: 'transformadorId' })
  tr:Transformador

}
