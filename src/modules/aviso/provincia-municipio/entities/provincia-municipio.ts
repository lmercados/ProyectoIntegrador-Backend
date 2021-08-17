import { BaseEntity, Column,JoinColumn, ManyToOne,Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';
import { Municipio } from '../../municipio/entities/municipio';
import { Provincia } from '../../provincia/entities/provincia';

@Entity('aviso_provincia_municipios')
export class provinciaMunicipio extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  provinciaMunicipioId: number;
  @ManyToOne(type => Provincia, provincia => provincia.provinciaId,{ eager: true })
  @JoinColumn({ name: 'provinciaId' })
  provincia:Provincia
  @ManyToOne(type => Municipio, municipio => municipio.municipioId,{ eager: true })
  @JoinColumn({ name: 'municipioId' })
  municipio:Municipio
}
