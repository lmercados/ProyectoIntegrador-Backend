import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_conexiones')
export class Conexion extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id_conexion: number;
  @Column({ type: 'varchar', nullable: false })
  conexion: string;
}
