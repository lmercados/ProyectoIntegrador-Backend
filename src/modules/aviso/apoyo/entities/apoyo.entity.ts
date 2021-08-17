import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_apoyos')
export class Apoyo extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  apoyoId: number;
  @Column({ type: 'varchar',unique: true})
  apoyo: string;
}
