import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_resultados_evaluacion')
export class Resultado extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_resultado: number;
  @Column({ type: 'varchar', nullable: false })
  resultado: string;
}
