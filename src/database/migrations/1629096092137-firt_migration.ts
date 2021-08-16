import {MigrationInterface, QueryRunner} from "typeorm";

export class firtMigration1629096092137 implements MigrationInterface {
    name = 'firtMigration1629096092137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transformador" ADD "tipoReparacion" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transformador" ALTER COLUMN "tipoReparacionId" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "transformador"."tipoReparacionId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformador" ADD CONSTRAINT "FK_39169aa18bfa1b1eef16bdba186" FOREIGN KEY ("tipoReparacionId") REFERENCES "transformadores_tipo_reparacion"("tipoReparacionId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transformador" DROP CONSTRAINT "FK_39169aa18bfa1b1eef16bdba186"`);
        await queryRunner.query(`COMMENT ON COLUMN "transformador"."tipoReparacionId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "transformador" ALTER COLUMN "tipoReparacionId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transformador" DROP COLUMN "tipoReparacion"`);
    }

}
