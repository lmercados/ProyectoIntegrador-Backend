import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_estados')
export class Estados extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id_estado: number;
  @Column({ type: 'varchar', nullable: false,unique: true})
  estado: string;
}
