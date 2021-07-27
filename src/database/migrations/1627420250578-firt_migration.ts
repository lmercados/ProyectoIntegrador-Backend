import {MigrationInterface, QueryRunner} from "typeorm";

export class firtMigration1627420250578 implements MigrationInterface {
    name = 'firtMigration1627420250578'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transformadores_efecto" ("id_efecto" SERIAL NOT NULL, "efecto" character varying NOT NULL, CONSTRAINT "UQ_c41cdb099566b439f6c2c117601" UNIQUE ("efecto"), CONSTRAINT "PK_af57613b05f91684990faa28ab5" PRIMARY KEY ("id_efecto"))`);
        await queryRunner.query(`CREATE TABLE "transformadores_estados" ("id_estado" SERIAL NOT NULL, "estado" character varying NOT NULL, CONSTRAINT "UQ_65dace446a770eb3675798c3f60" UNIQUE ("estado"), CONSTRAINT "PK_df6bac6af1079e757686d988ac4" PRIMARY KEY ("id_estado"))`);
        await queryRunner.query(`CREATE TABLE "transformadores_propiedad" ("id_propiedad" SERIAL NOT NULL, "propiedad" character varying NOT NULL, CONSTRAINT "UQ_b60145076874dc1e36a555c4e23" UNIQUE ("propiedad"), CONSTRAINT "PK_d647dbb6eb5d7931fc47462d8b5" PRIMARY KEY ("id_propiedad"))`);
        await queryRunner.query(`CREATE TABLE "transformadores_tipo_reparacion" ("id_tipo_reparacion" SERIAL NOT NULL, "reparacion" character varying NOT NULL, CONSTRAINT "UQ_e3dfc806d868ba7dea836eeaf27" UNIQUE ("reparacion"), CONSTRAINT "PK_2d1dc5624e4a0c26f436065d457" PRIMARY KEY ("id_tipo_reparacion"))`);
        await queryRunner.query(`CREATE TABLE "transformadores_ubicacion" ("id_ubicacion" SERIAL NOT NULL, "ubicacion" character varying NOT NULL, CONSTRAINT "UQ_aeadf21d3bad59e7e158bdb4c5a" UNIQUE ("ubicacion"), CONSTRAINT "PK_385f8f855d9cfacec35b43f2738" PRIMARY KEY ("id_ubicacion"))`);
        await queryRunner.query(`ALTER TABLE "transformadores_conexiones" DROP COLUMN "id_fase"`);
        await queryRunner.query(`ALTER TABLE "transformadores_razones_rechazo" DROP CONSTRAINT "PK_cb37b5b07727b1cb0dee952bd4c"`);
        await queryRunner.query(`ALTER TABLE "transformadores_razones_rechazo" ADD CONSTRAINT "PK_e5984dbf9e1dcbb8a9def0d0118" PRIMARY KEY ("id_razon")`);
        await queryRunner.query(`ALTER TABLE "transformadores_razones_rechazo" DROP COLUMN "id_resultado"`);
        await queryRunner.query(`ALTER TABLE "transformadores_tipo_soportes" DROP COLUMN "id_soporte"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_conexiones"."id_conexion" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_conexiones_id_conexion_seq" OWNED BY "transformadores_conexiones"."id_conexion"`);
        await queryRunner.query(`ALTER TABLE "transformadores_conexiones" ALTER COLUMN "id_conexion" SET DEFAULT nextval('transformadores_conexiones_id_conexion_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_resultados_evaluacion"."id_resultado" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_resultados_evaluacion_id_resultado_seq" OWNED BY "transformadores_resultados_evaluacion"."id_resultado"`);
        await queryRunner.query(`ALTER TABLE "transformadores_resultados_evaluacion" ALTER COLUMN "id_resultado" SET DEFAULT nextval('transformadores_resultados_evaluacion_id_resultado_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_fabricantes"."id_fabricante" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_fabricantes_id_fabricante_seq" OWNED BY "transformadores_fabricantes"."id_fabricante"`);
        await queryRunner.query(`ALTER TABLE "transformadores_fabricantes" ALTER COLUMN "id_fabricante" SET DEFAULT nextval('transformadores_fabricantes_id_fabricante_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_fases"."id_fase" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_fases_id_fase_seq" OWNED BY "transformadores_fases"."id_fase"`);
        await queryRunner.query(`ALTER TABLE "transformadores_fases" ALTER COLUMN "id_fase" SET DEFAULT nextval('transformadores_fases_id_fase_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_razones_rechazo"."id_razon" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_razones_rechazo_id_razon_seq" OWNED BY "transformadores_razones_rechazo"."id_razon"`);
        await queryRunner.query(`ALTER TABLE "transformadores_razones_rechazo" ALTER COLUMN "id_razon" SET DEFAULT nextval('transformadores_razones_rechazo_id_razon_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_regulaciones"."id_regulacion" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_regulaciones_id_regulacion_seq" OWNED BY "transformadores_regulaciones"."id_regulacion"`);
        await queryRunner.query(`ALTER TABLE "transformadores_regulaciones" ALTER COLUMN "id_regulacion" SET DEFAULT nextval('transformadores_regulaciones_id_regulacion_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_soportes"."id_soporte" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_soportes_id_soporte_seq" OWNED BY "transformadores_soportes"."id_soporte"`);
        await queryRunner.query(`ALTER TABLE "transformadores_soportes" ALTER COLUMN "id_soporte" SET DEFAULT nextval('transformadores_soportes_id_soporte_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_suplidores"."id_suplidor" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_suplidores_id_suplidor_seq" OWNED BY "transformadores_suplidores"."id_suplidor"`);
        await queryRunner.query(`ALTER TABLE "transformadores_suplidores" ALTER COLUMN "id_suplidor" SET DEFAULT nextval('transformadores_suplidores_id_suplidor_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_tension_primaria"."id_tension" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_tension_primaria_id_tension_seq" OWNED BY "transformadores_tension_primaria"."id_tension"`);
        await queryRunner.query(`ALTER TABLE "transformadores_tension_primaria" ALTER COLUMN "id_tension" SET DEFAULT nextval('transformadores_tension_primaria_id_tension_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_tension_secundaria"."id_tension" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_tension_secundaria_id_tension_seq" OWNED BY "transformadores_tension_secundaria"."id_tension"`);
        await queryRunner.query(`ALTER TABLE "transformadores_tension_secundaria" ALTER COLUMN "id_tension" SET DEFAULT nextval('transformadores_tension_secundaria_id_tension_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_tipo_soportes"."id_tipo_soporte" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_tipo_soportes_id_tipo_soporte_seq" OWNED BY "transformadores_tipo_soportes"."id_tipo_soporte"`);
        await queryRunner.query(`ALTER TABLE "transformadores_tipo_soportes" ALTER COLUMN "id_tipo_soporte" SET DEFAULT nextval('transformadores_tipo_soportes_id_tipo_soporte_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_valoraciones"."id_valoracion" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "transformadores_valoraciones_id_valoracion_seq" OWNED BY "transformadores_valoraciones"."id_valoracion"`);
        await queryRunner.query(`ALTER TABLE "transformadores_valoraciones" ALTER COLUMN "id_valoracion" SET DEFAULT nextval('transformadores_valoraciones_id_valoracion_seq')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transformadores_valoraciones" ALTER COLUMN "id_valoracion" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_valoraciones_id_valoracion_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_valoraciones"."id_valoracion" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_tipo_soportes" ALTER COLUMN "id_tipo_soporte" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_tipo_soportes_id_tipo_soporte_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_tipo_soportes"."id_tipo_soporte" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_tension_secundaria" ALTER COLUMN "id_tension" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_tension_secundaria_id_tension_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_tension_secundaria"."id_tension" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_tension_primaria" ALTER COLUMN "id_tension" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_tension_primaria_id_tension_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_tension_primaria"."id_tension" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_suplidores" ALTER COLUMN "id_suplidor" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_suplidores_id_suplidor_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_suplidores"."id_suplidor" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_soportes" ALTER COLUMN "id_soporte" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_soportes_id_soporte_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_soportes"."id_soporte" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_regulaciones" ALTER COLUMN "id_regulacion" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_regulaciones_id_regulacion_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_regulaciones"."id_regulacion" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_razones_rechazo" ALTER COLUMN "id_razon" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_razones_rechazo_id_razon_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_razones_rechazo"."id_razon" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_fases" ALTER COLUMN "id_fase" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_fases_id_fase_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_fases"."id_fase" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_fabricantes" ALTER COLUMN "id_fabricante" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_fabricantes_id_fabricante_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_fabricantes"."id_fabricante" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_resultados_evaluacion" ALTER COLUMN "id_resultado" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_resultados_evaluacion_id_resultado_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_resultados_evaluacion"."id_resultado" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_conexiones" ALTER COLUMN "id_conexion" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transformadores_conexiones_id_conexion_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformadores_conexiones"."id_conexion" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_tipo_soportes" ADD "id_soporte" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_razones_rechazo" ADD "id_resultado" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transformadores_razones_rechazo" DROP CONSTRAINT "PK_e5984dbf9e1dcbb8a9def0d0118"`);
        await queryRunner.query(`ALTER TABLE "transformadores_razones_rechazo" ADD CONSTRAINT "PK_cb37b5b07727b1cb0dee952bd4c" PRIMARY KEY ("id_razon", "id_resultado")`);
        await queryRunner.query(`ALTER TABLE "transformadores_conexiones" ADD "id_fase" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "transformadores_ubicacion"`);
        await queryRunner.query(`DROP TABLE "transformadores_tipo_reparacion"`);
        await queryRunner.query(`DROP TABLE "transformadores_propiedad"`);
        await queryRunner.query(`DROP TABLE "transformadores_estados"`);
        await queryRunner.query(`DROP TABLE "transformadores_efecto"`);
    }

}
