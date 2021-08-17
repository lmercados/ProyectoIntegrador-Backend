import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_subcausas')
export class SubCausas extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  subcausaId: number;
  @Column({ type: 'varchar',unique: true})
  subcausa: string;
}
