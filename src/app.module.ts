import { Module } from '@nestjs/common';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RolesModule } from './modules/transformador/roles/roles.module';
import { AuthModule } from './modules/auth/auth.module';
import { TransformadorModule } from './modules/transformador/tr/tr.module';
import { FasesModule } from './modules/transformador/fases/fases.module';
import { CapacidadModule } from './modules/transformador/capacidades/capacidad.module';
import { SuplidorModule } from './modules/transformador/suplidores/suplidor.module';
import { ValoracionModule } from './modules/transformador/valoraciones/valoracion.module';
import { SoporteModule } from './modules/transformador/soportes/soportes.module';
import { TipoSoporteModule } from './modules/transformador/tipo.soporte/tipo.soportes.module';
import { FabricanteModule } from './modules/transformador/fabricantes/fabricante.module';
import { ConexionModule } from './modules/transformador/conexiones/conexiones.module';
import { TensionModule } from './modules/transformador/tension.primaria/tension.primaria.module';
import { TensionSecundariaModule } from './modules/transformador/tension.secundaria/tension.secundaria.module';
import { RegulacionModule } from './modules/transformador/regulaciones/regulaciones.module';
import { ResultadoModule } from './modules/transformador/evaluacion.resultado/resultado.evaluacion.module';
import { RazonesRechazoModule } from './modules/transformador/razones.rechazo/razones.rechazo.module';
import { TipoReparacionModule } from './modules/transformador/tipo.reparacion/tipo.reparacion.module';
import { UbicacionModule } from './modules/transformador/ubicacion/ubicacion.module';
import { EstadoModule } from './modules/transformador/estados/estado.module';
import { PropiedadModule } from './modules/transformador/propiedad/propiedad.module';
import { EfectoModule } from './modules/transformador/efecto/efecto.module';
import { UnidadConstructivaModule } from './modules/transformador/unidad-constructiva/unidad.constructiva.module';
import { ProyectoModule } from './modules/proyecto/proyecto/proyecto.module';
import {faseCapacidadModule  } from './modules/transformador/fase-capacidad/faseCapacidad.module';
import {faseConexionModule  } from './modules/transformador/fase-conexion/faseConexion.module';
import {soporteTipoSoporteModule  } from './modules/transformador/soporte-tipoSoporte/soporteTipoSoporte.module';
@Module({
  imports: [
    soporteTipoSoporteModule,
    faseConexionModule,
    faseCapacidadModule,
    RazonesRechazoModule,
    ResultadoModule,
    RegulacionModule,
    TensionSecundariaModule,
    TipoReparacionModule,
    TensionModule,
    ConexionModule,
    FabricanteModule,
    TipoSoporteModule,
    SoporteModule,
    ValoracionModule,
    SuplidorModule,
    CapacidadModule,
    ConfigModule,
    DatabaseModule,
    UserModule,
    RolesModule,
    AuthModule,
    TransformadorModule,
    FasesModule,
    EstadoModule,
    UbicacionModule,
    PropiedadModule,
    EfectoModule,
    UnidadConstructivaModule,
    ProyectoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
