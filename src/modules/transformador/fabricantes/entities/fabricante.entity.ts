import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_fabricantes')
export class Fabricante extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_fabricante: number;
  @Column({ type: 'varchar', nullable: false })
  fabricante: string;
}
