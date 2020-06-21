import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodoTable1592612178303 implements MigrationInterface {
    name = 'CreateTodoTable1592612178303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "isComplete" boolean NOT NULL, "desc" character varying, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
