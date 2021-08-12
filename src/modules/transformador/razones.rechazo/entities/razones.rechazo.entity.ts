import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_razones_rechazo')
export class RazonesRechazo extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  razonRechazoId: number;
  @Column({ type: 'varchar', unique: true })
  razones: string;
}
