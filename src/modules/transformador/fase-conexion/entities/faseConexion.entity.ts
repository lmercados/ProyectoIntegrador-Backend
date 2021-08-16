import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import { Conexion } from '../../conexiones/entities/conexiones.entity';
import { Fase} from '../../fases/entities/fase.entity';

@Entity('transformadores_fase_conexion')
export class faseConexion extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  faseConexionId: number;
  @ManyToOne(type => Fase, fase => fase.faseId,{ eager: true })
  @JoinColumn({ name: 'faseId' })
  faseId:Fase
  @ManyToOne(type => Conexion, conexion => conexion.conexionId,{ eager: true })
  @JoinColumn({ name: 'conexionId' })
  conexionId:Conexion
 
}
