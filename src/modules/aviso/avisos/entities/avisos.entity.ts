

import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { User } from '../../../user/user.entity';
import { Apartarrayos } from '../../apartarrayos/entities/apartarrayos.entity';
import { Apoyo } from '../../apoyo/entities/apoyo.entity';
import { Causas } from '../../causa/entities/causa.entity';
import { estadoApoyo } from '../../estado-apoyo/entities/estado.apoyo.entity';
import { Localidad } from '../../localidad/entities/localidad.entity';
import { Municipio } from '../../municipio/entities/municipio.entity';
import { Provincia } from '../../provincia/entities/provincia.entity';
import { puestaTierra } from '../../puesta-tierra/entities/puesta.tierra.entity';
import { Recomendacion } from '../../recomendacion/entities/recomendacion.entity';
import { Seccionador } from '../../seccionador/entities/seccionador.entity';
import { SubCausas } from '../../subcausa/entities/subcausa.entity';
import { Vivienda } from './../../viviendas/entities/vivienda.entity';
import { Sector } from '../../sector/entities/sector.entity';
import { AvisoTri } from '../../aviso-tri/entities/aviso.tri.entity';
import { AvisoTrr } from '../../aviso-trr/entities/aviso.trr.entity';
import { Transformador } from '../../../transformador/tr/entities/tr.entity';
import { Circuito } from '../../circuitos/entities/circuito.entity';
import { Estados } from '../../estado/entities/estado.entity';


@Entity('avisos')
export class Avisos extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  avisoId: number;
  @Column({ type: 'varchar', length: 100, unique: true })
  aviso: string;
  @Column({ type: 'varchar', length: 100 })
  obra: string;
  @Column({ type: 'varchar', length: 100 })
  ct: string;
  @Column({ type: 'varchar', length: 100 })
  calle: string;
  @Column({ type: 'varchar', length: 100 })
  matricula: string;
  @Column({ type: 'varchar', length: 100 })
  observacion: string;
  @ManyToOne(type => Estados, estado => estado.estadoId,{ eager: true })
  @JoinColumn({ name: 'estadoId' })
  estado:Estados;
  @ManyToOne(type => Vivienda, vivienda => vivienda.viviendaId,{ eager: true })
  @JoinColumn({ name: 'viviendaId' })
  vivienda:Vivienda;
  @ManyToOne(type => Apoyo, apoyo => apoyo.apoyoId,{ eager: true })
  @JoinColumn({ name: 'apoyoId' })
  apoyo:Apoyo
  @ManyToOne(type => Sector, sector => sector.sectorId,{ eager: true })
  @JoinColumn({ name: 'sectorId' })
  sector:Sector
  @ManyToOne(type => Circuito, circuito => circuito.circuitoId,{ eager: true })
  @JoinColumn({ name: 'circuitoId' })
  circuito:Circuito
  @ManyToOne(type => Provincia, provincia => provincia.provinciaId,{ eager: true })
  @JoinColumn({ name: 'provinciaId' })
  provincia:Provincia
  @ManyToOne(type => Municipio, municipio => municipio.municipioId,{ eager: true })
  @JoinColumn({ name: 'municipioId' })
  municipio:Municipio
  @ManyToOne(type => Localidad, localidad => localidad.localidadId,{ eager: true })
  @JoinColumn({ name: 'localidadId' })
  localidad:Localidad
  @ManyToOne(type => Seccionador, seccionador => seccionador.seccionadorId,{ eager: true })
  @JoinColumn({ name: 'seccionadorId' })
  seccionador:Seccionador
  @ManyToOne(type => Apartarrayos, apartarrayos => apartarrayos.apartarrayosId,{ eager: true })
  @JoinColumn({ name: 'apartarrayosId' })
  apartarrayos:Apartarrayos
  @ManyToOne(type => puestaTierra, puestatierra => puestatierra.puestaTierraId,{ eager: true })
  @JoinColumn({ name: 'puestaTierraId' })
  puestatierra:puestaTierra
  @ManyToOne(type => estadoApoyo, estadoapoyo => estadoapoyo.estadoApoyoId,{ eager: true })
  @JoinColumn({ name: 'estadoApoyoId' })
  estadoapoyo:estadoApoyo
  @ManyToOne(type => Recomendacion, recomendacion => recomendacion.recomendacionId,{ eager: true })
  @JoinColumn({ name: 'recomendacionId' })
  recomendacion:Recomendacion
  @ManyToOne(type => Causas, causa => causa.causaId,{ eager: true })
  @JoinColumn({ name: 'causaId' })
  causa:Causas
  @ManyToOne(type => SubCausas, subcausa => subcausa.subcausaId,{ eager: true })
  @JoinColumn({ name: 'subcausaId' })
  subcausa:SubCausas
  @ManyToOne(type => Transformador, transformador => transformador.transformadorId,{ eager: true })
  @JoinColumn({ name: 'transformadorRid' })
  transformadorR:Transformador
  @ManyToOne(type => Transformador, transformador => transformador.transformadorId,{ eager: true })
  @JoinColumn({ name: 'transformadorIid' })
  transformadorI: Transformador;
  @ManyToOne(type => User, user => user.usuarioId,{ eager: true })
  @JoinColumn({ name: 'usuarioId' })
  usuario: User;
  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  createtAt: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}