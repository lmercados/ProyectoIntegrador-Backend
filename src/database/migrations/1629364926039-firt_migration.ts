import {MigrationInterface, QueryRunner} from "typeorm";

export class firtMigration1629364926039 implements MigrationInterface {
    name = 'firtMigration1629364926039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avisos" ADD "matricula" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avisos" DROP COLUMN "matricula"`);
    }

}
