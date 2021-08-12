import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_soportes')
export class Soporte extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  soporteId: number;
  @Column({ type: 'varchar',unique:true })
  soporte: string;
}
