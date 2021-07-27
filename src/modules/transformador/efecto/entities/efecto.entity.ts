import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_efecto')
export class Efecto extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id_efecto: number;
  @Column({ type: 'varchar', nullable: false,unique: true})
  efecto: string;
}
