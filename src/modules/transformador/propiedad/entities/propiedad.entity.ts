import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_propiedad')
export class Propiedad extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id_propiedad: number;
  @Column({ type: 'varchar', nullable: false,unique: true})
  propiedad: string;
}
