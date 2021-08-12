import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_propiedad')
export class Propiedad extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  propiedadId: number;
  @Column({ type: 'varchar',unique: true})
  propiedad: string;
}
