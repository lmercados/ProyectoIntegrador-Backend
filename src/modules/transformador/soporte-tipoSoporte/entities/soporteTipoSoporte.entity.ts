import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import { Soporte } from '../../soportes/entities/soportes.entity';
import { TipoSoporte } from '../../tipo.soporte/entities/tipo.soportes.entity';

@Entity('transformadores_soporte_tipo_soporte')
export class soporteTipoSoporte extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  soporteTipoSoporteId: number;
  @ManyToOne(type => Soporte, soporte => soporte.soporteId,{ eager: true })
  @JoinColumn({ name: 'soporteId' })
  soporteId:Soporte
  @ManyToOne(type => TipoSoporte, tipoSoporte => tipoSoporte.tipoSoporteId,{ eager: true })
  @JoinColumn({ name: 'tipoSoporteId' })
  tipoSoporteId:TipoSoporte
 
}
