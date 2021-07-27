import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_valoraciones')
export class Valoracion extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  id_valoracion: number;
  @Column({ type: 'varchar', nullable: false })
  valoracion: string;
}
