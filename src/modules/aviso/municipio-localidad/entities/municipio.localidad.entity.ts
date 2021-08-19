import { BaseEntity, Column,JoinColumn, ManyToOne,Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';
import { Localidad } from '../../localidad/entities/localidad.entity';
import { Municipio } from '../../municipio/entities/municipio.entity';
import { Provincia } from '../../provincia/entities/provincia.entity';

@Entity('aviso_municipio_localidades')
export class municipioLocalidad extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  provinciaMunicipioId: number;
  @ManyToOne(type => Municipio, municipio => municipio.municipioId,{ eager: true })
  @JoinColumn({ name: 'municipioId' })
  municipio:Municipio
  @ManyToOne(type => Localidad, localidad => localidad.localidadId,{ eager: true })
  @JoinColumn({ name: 'localidadId' })
  localidad:Localidad
}
