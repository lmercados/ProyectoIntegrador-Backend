import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_efecto')
export class Efecto extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  efectoId: number;
  @Column({ type: 'varchar',unique: true})
  efecto: string;
}
