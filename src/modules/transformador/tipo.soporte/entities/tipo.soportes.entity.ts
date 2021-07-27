import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_tipo_soportes')
export class TipoSoporte extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  id_tipo_soporte: number;
  @Column({ type: 'varchar' })
  tipo_soporte: string;
}
