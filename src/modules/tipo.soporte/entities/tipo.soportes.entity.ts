import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_tipo_soportes')
export class TipoSoporte extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_tipo_soporte: number;
  @Column({ type: 'int' })
  id_soporte: number;
  @Column({ type: 'varchar' })
  tipo_soporte: string;
}
