import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_resultados_evaluacion')
export class Resultado extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_resultado: number;
  @Column({ type: 'varchar', nullable: false })
  resultado: string;
}
