import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_unidades_constructiva')
export class UnidadConstructiva extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  unidadId: number;
  @Column({ type: 'int', unique: true })
  codigo: number;
  @Column({ type: 'varchar', unique: true })
  descripcion: string;
}
