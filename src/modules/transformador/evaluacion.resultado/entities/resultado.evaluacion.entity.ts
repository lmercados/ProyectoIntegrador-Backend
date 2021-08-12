import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_resultados_evaluacion')
export class Resultado extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  resultadoEvaluacionId: number;
  @Column({ type: 'varchar', unique: true })
  resultado: string;
}
