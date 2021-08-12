import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_fabricantes')
export class Fabricante extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  fabricanteId: number;
  @Column({ type: 'varchar', unique: false })
  fabricante: string;
}
