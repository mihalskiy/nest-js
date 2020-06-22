import {MigrationInterface, QueryRunner} from "typeorm";

export class Todo1592863371968 implements MigrationInterface {
    name = 'Todo1592863371968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `isComplete` tinyint NOT NULL, `desc` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `todo`");
    }

}
