import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactMigration1700144373715 implements MigrationInterface {
    name = 'ContactMigration1700144373715'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "full_name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "phone" integer NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
