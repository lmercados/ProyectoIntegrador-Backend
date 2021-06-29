import {MigrationInterface, QueryRunner} from "typeorm";

export class firt1618517432338 implements MigrationInterface {
    name = 'firt1618517432338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fase" ("faseId" SERIAL NOT NULL, "fase" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6c24d96b076e33462cba95259d4" PRIMARY KEY ("faseId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fase"`);
    }

}
