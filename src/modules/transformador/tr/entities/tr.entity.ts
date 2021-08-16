import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from '../../../user/user.entity';
import { Capacidad } from '../../capacidades/entities/capacidad.entity';
import { Conexion } from '../../conexiones/entities/conexiones.entity';
import { Efecto } from '../../efecto/entities/efecto.entity';
import { Estados } from '../../estados/entities/estado.entity';
import { Fabricante } from '../../fabricantes/entities/fabricante.entity';
import { Fase } from '../../fases/entities/fase.entity';
import { Propiedad } from '../../propiedad/entities/propiedad.entity';
import { Regulacion } from '../../regulaciones/entities/regulaciones.entity';
import { Soporte } from '../../soportes/entities/soportes.entity';
import { Suplidor } from '../../suplidores/entities/suplidor.entity';
import { TensionPrimaria } from '../../tension.primaria/entities/tension.primaria.entity';
import { TensionSecundaria } from '../../tension.secundaria/entities/tension.secundaria.entity';
import { TipoSoporte } from '../../tipo.soporte/entities/tipo.soportes.entity';
import { Ubicacion } from '../../ubicacion/entities/ubicacion.entity';
import { UnidadConstructiva } from '../../unidad-constructiva/entities/unidad.constructiva.entity';
import { Valoracion } from '../../valoraciones/entities/valoracion.entity';
import { Proyecto } from '../../../proyecto/proyecto/entities/proyecto.entity';
import { RazonesRechazo } from '../../razones.rechazo/entities/razones.rechazo.entity';
import { tipoReparacion } from '../../tipo.reparacion/entities/tipo.reparacion.entity';
@Entity('transformador')
export class Transformador extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  transformadorId: number;
  @Column({ type: 'varchar', length: 100, unique: true })
  serie: string;
  @ManyToOne(type => Suplidor, suplidor => suplidor.suplidorId,{ eager: true })
  @JoinColumn({ name: 'suplidorId' })
  suplidor:Suplidor
  @ManyToOne(type => Valoracion, valoracion => valoracion.valoracionId,{ eager: true })
  @JoinColumn({ name: 'valoracionId' })
  valoracion:Valoracion
  @ManyToOne(type => Soporte, soporte => soporte.soporteId,{ eager: true })
  @JoinColumn({ name: 'soporteId' })
  soporte:Soporte
  @ManyToOne(type => TipoSoporte, tipoSoporte => tipoSoporte.tipoSoporteId,{ eager: true })
  @JoinColumn({ name: 'tipoSoporteId' })
  tipoSoporte:TipoSoporte
  @ManyToOne(type => Fabricante, fabricante => fabricante.fabricanteId,{ eager: true })
  @JoinColumn({ name: 'fabricanteId' })
  fabricante:Fabricante
  @ManyToOne(type => Fase, fase => fase.faseId,{ eager: true })
  @JoinColumn({ name: 'faseId' })
  fase:Fase
  @ManyToOne(type => Capacidad, capacidad => capacidad.capacidadId,{ eager: true })
  @JoinColumn({ name: 'capacidadId' })
  capacidad:Capacidad
  @ManyToOne(type => Conexion, conexion => conexion.conexionId,{ eager: true })
  @JoinColumn({ name: 'conexionId' })
  conexion:Conexion
  @Column({ type: 'varchar', length: 100 })
  licitacion: string;
  @ManyToOne(type => TensionPrimaria, tensionPrimaria => tensionPrimaria.tensionPrimariaId,{ eager: true })
  @JoinColumn({ name: 'tensionPrimariaId' })
  tensionPrimaria:TensionPrimaria
  @ManyToOne(type => TensionSecundaria, tensionSecundaria => tensionSecundaria.tensionSecundariaId,{ eager: true })
  @JoinColumn({ name: 'tensionSecundariaId' })
  tensionSecundaria:TensionSecundaria
  @ManyToOne(type => Regulacion, regulacion => regulacion.regulacionId,{ eager: true })
  @JoinColumn({ name: 'regulacionId' })
  regulacion:Regulacion
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
  @ManyToOne(type => RazonesRechazo, razonRechazo => razonRechazo.razonRechazoId,{ eager: true })
  @JoinColumn({ name: 'razonRechazoId' })
  razonesRechazoId:RazonesRechazo
  @Column({ type: 'integer' })
  @ManyToOne(type => tipoReparacion, tipoReparacion => tipoReparacion.tipoReparacionId,{ eager: true })
  @JoinColumn({ name: 'tipoReparacionId' })
  tipoReparacion: tipoReparacion;
  @ManyToOne(type => User, user => user.usuarioId,{ eager: true })
  @JoinColumn({ name: 'usuarioId' })
  usuario:User
  @Column({ type: 'varchar', length: 100, unique: true })
  sello: string;
  @ManyToOne(type => Estados, estado => estado.estadoId,{ eager: true })
  @JoinColumn({ name: 'estadoId' })
  estado:Estados
  @ManyToOne(type => Ubicacion, ubicacion => ubicacion.ubicacionId,{ eager: true })
  @JoinColumn({ name: 'ubicacionId' })
  ubicacion:Ubicacion
  @ManyToOne(type => Propiedad, propiedad => propiedad.propiedadId,{ eager: true })
  @JoinColumn({ name: 'propiedadId' })
  propiedad:Propiedad
  @Column({ type: 'varchar' })
  observacion: string;
  @Column({ type: 'varchar', length: 6 })
  matricula: string;
  @ManyToOne(type => Proyecto, proyecto => proyecto.proyectoId,{ eager: true })
  @JoinColumn({ name: 'proyectoId' })
  codigoProyecto:Proyecto
  @ManyToOne(type => Efecto, efecto => efecto.efectoId,{ eager: true })
  @JoinColumn({ name: 'efectoId' })
  efecto:Efecto
  @ManyToOne(type => UnidadConstructiva, unidadConstructiva => unidadConstructiva.unidadId,{ eager: true })
  @JoinColumn({ name: 'unidadId' })
  codigoSap:UnidadConstructiva
  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  createtAt: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}
