import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_suplidores')
export class Suplidor extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  id_suplidor: number;
  @Column({ type: 'varchar', nullable: false })
  suplidor: string;
}
