import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import { Estados } from '../../estados/entities/estado.entity';
import { Resultado } from '../../evaluacion.resultado/entities/resultado.evaluacion.entity';

@Entity('transformadores_resultado_estado')
export class resultadoEstado extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  resultadoEstadoId: number;
  @ManyToOne(type => Estados, estado => estado.estadoId,{ eager: true })
  @JoinColumn({ name: 'estadoId' })
  estado:Estados
  @ManyToOne(type => Resultado, resultado => resultado.resultadoEvaluacionId,{ eager: true })
  @JoinColumn({ name: 'resultadoEvaluacionId' })
  resultado:Resultado
 
}
