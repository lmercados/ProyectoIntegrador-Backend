import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_suplidores')
export class Suplidor extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_suplidor: number;
  @Column({ type: 'varchar', nullable: false })
  suplidor: string;
}
