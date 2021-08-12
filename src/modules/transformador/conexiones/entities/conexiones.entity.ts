import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_conexiones')
export class Conexion extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  conexionId: number;
  @Column({ type: 'varchar',unique:true })
  conexion: string;
}
