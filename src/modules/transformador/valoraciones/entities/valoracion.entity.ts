import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_valoraciones')
export class Valoracion extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  valoracionId: number;
  @Column({ type: 'varchar', unique: true })
  valoracion: string;
}
