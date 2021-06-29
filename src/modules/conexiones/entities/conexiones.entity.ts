import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_conexiones')
export class Conexion extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_conexion: number;
  @Column({ type: 'int', nullable: false })
  id_fase: number;
  @Column({ type: 'varchar', nullable: false })
  conexion: string;
}
