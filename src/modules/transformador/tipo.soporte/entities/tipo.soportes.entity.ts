import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_tipo_soportes')
export class TipoSoporte extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  tipoSoporteId: number;
  @Column({ type: 'varchar',unique:true })
  tipoSoporte: string;
}
