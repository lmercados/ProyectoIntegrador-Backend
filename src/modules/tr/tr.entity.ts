import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

import { User } from '../user/user.entity';
@Entity('transformador')
export class Transformador extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', length: 100, nullable: false })
  serie: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  equipo: string;
  @Column({ type: 'integer' })
  suplidorId: number;
  @Column({ type: 'integer' })
  valoracionId: number;
  @Column({ type: 'integer', nullable: false })
  soporteId: number;
  @Column({ type: 'integer', nullable: false })
  tipoSoporteId: number;
  @Column({ type: 'integer', nullable: false })
  fabricanteId: number;
  @Column({ type: 'integer', nullable: false })
  faseId: number;
  @Column({ type: 'integer', nullable: false })
  capacidadId: number;
  @Column({ type: 'integer', nullable: false })
  conexionId: number;
  @Column({ type: 'varchar', nullable: false, length: 100 })
  licitacion: string;
  @Column({ type: 'integer', nullable: false })
  tensionPrimariaId: number;
  @Column({ type: 'integer', nullable: false })
  tensionSecundariaId: number;
  @Column({ type: 'integer', nullable: false })
  regulacionId: number;
  @Column({ type: 'float' })
  psc: number;
  @Column({ type: 'float' })
  pcc: number;
  @Column({ type: 'float' })
  perdida: number;
  @Column({ type: 'float' })
  perdidaTotal: number;
  @Column({ type: 'float' })
  voltajeCC: number;
  @Column({ type: 'float' })
  impedancia: number;
  @Column({ type: 'float' })
  corriente: number;
  @Column({ type: 'integer' })
  razonRechazoId: number;
  @Column({ type: 'integer' })
  tipoReparacionId: number;
  @OneToOne(() => User)
  @JoinColumn()
  usuarioId: User;
  @Column({ type: 'varchar', length: 100, nullable: false })
  sello: string;
  @Column({ type: 'integer', nullable: false })
  estadoId: number;
  @Column({ type: 'integer', nullable: false })
  ubicacionId: number;
  @Column({ type: 'integer', nullable: false })
  propiedadId: number;
  @Column({ type: 'varchar' })
  observacion: string;
  @Column({ type: 'varchar' })
  matricula: string;
  @Column({ type: 'varchar' })
  nombreProyecto: string;
  @Column({ type: 'varchar' })
  codigoProyecto: string;
  @Column({ type: 'integer' })
  efectoId: number;
  @Column({ type: 'varchar' })
  codigoSap: string;
  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  createtAt: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}
