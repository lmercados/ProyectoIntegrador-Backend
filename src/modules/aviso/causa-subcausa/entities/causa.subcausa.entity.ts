import { BaseEntity,JoinColumn, ManyToOne,Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';
import { Causas } from '../../causa/entities/causa.entity';
import { SubCausas } from '../../subcausa/entities/subcausa.entity';

@Entity('aviso_causas_subcausas')
export class causaSubCausa extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  causaSubcausaId: number;
  @ManyToOne(type => Causas, causa => causa.causaId,{ eager: true })
  @JoinColumn({ name: 'causaId' })
  causa:Causas
  @ManyToOne(type => SubCausas, subcausa => subcausa.subcausaId,{ eager: true })
  @JoinColumn({ name: 'subcausaId' })
  subcausa:SubCausas
}
