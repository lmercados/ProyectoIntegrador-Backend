import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import { Capacidad } from '../../capacidades/entities/capacidad.entity';
import { Fase} from '../../fases/entities/fase.entity';

@Entity('transformadores_fase_capacidad')
export class faseCapacidad extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  faseCapacidadId: number;
  @ManyToOne(type => Fase, fase => fase.faseId,{ eager: true })
  @JoinColumn({ name: 'faseId' })
  faseId:Fase
  @ManyToOne(type => Capacidad, capacidad => capacidad.capacidadId,{ eager: true })
  @JoinColumn({ name: 'capacidadId' })
  capacidadId:Capacidad
 
}
