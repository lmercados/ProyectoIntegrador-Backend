import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('proyecto')
export class Proyecto extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  proyectoId: number;
  @Column({ type: 'varchar', unique: true })
  codigo: string;
  @Column({ type: 'varchar', unique: true })
  descripcion: string;
}
