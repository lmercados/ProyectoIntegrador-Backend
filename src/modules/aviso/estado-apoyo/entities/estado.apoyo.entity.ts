import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_estado_apoyos')
export class estadoApoyo extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  estadoApoyoId: number;
  @Column({ type: 'varchar',unique: true})
  estadoApoyo: string;
}
