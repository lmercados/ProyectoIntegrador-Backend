import { Module } from '@nestjs/common';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RolesModule } from './modules/roles/roles.module';
import { AuthModule } from './modules/auth/auth.module';
import { TransformadorModule } from './modules/tr/tr.module';
import { FasesModule } from './modules/fases/fases.module';
import { CapacidadModule } from './modules/capacidades/capacidad.module';
import { SuplidorModule } from './modules/suplidores/suplidor.module';
import { ValoracionModule } from './modules/valoraciones/valoracion.module';
import { SoporteModule } from './modules/soportes/soportes.module';
import { TipoSoporteModule } from './modules/tipo.soporte/tipo.soportes.module';
import { FabricanteModule } from './modules/fabricantes/fabricante.module';
import { ConexionModule } from './modules/conexiones/conexiones.module';
import { TensionModule } from './modules/tension.primaria/tension.primaria.module';
import { TensionSecundariaModule } from './modules/tension.secundaria/tension.secundaria.module';
import { RegulacionModule } from './modules/regulaciones/regulaciones.module';
import { ResultadoModule } from './modules/evaluacion.resultado/resultado.evaluacion.module';
import { RazonesRechazoModule } from './modules/razones.rechazo/razones.rechazo.module';
@Module({
  imports: [
    RazonesRechazoModule,
    ResultadoModule,
    RegulacionModule,
    TensionSecundariaModule,
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