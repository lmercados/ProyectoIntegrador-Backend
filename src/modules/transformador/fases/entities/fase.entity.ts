import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_fases')
export class Fase extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  faseId: number;
  @Column({ type: 'varchar',unique:true})
  fase: string;
}
