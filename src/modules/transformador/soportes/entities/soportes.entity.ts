import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_soportes')
export class Soporte extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_soporte: number;
  @Column({ type: 'varchar' })
  soporte: string;
}
