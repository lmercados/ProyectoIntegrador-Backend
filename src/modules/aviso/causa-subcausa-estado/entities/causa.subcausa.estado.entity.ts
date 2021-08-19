
import { Estados } from '../../../transformador/estados/entities/estado.entity';
import { BaseEntity,JoinColumn, ManyToOne,Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';
import { Causas } from '../../causa/entities/causa.entity';
import { SubCausas } from '../../subcausa/entities/subcausa.entity';

@Entity('aviso_causas_subcausas_estados')
export class causaSubCausaEstado extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @ManyToOne(type => Causas, causa => causa.causaId,{ eager: true })
  @JoinColumn({ name: 'causaId' })
  causa:Causas
  @ManyToOne(type => SubCausas, subcausa => subcausa.subcausaId,{ eager: true })
  @JoinColumn({ name: 'subcausaId' })
  subcausa:SubCausas
  @ManyToOne(type => Estados, estado => estado.estadoId,{ eager: true })
  @JoinColumn({ name: 'estadoId' })
  estado:Estados
}
