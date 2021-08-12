import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_suplidores')
export class Suplidor extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  suplidorId: number;
  @Column({ type: 'varchar',unique:true})
  suplidor: string;
}
