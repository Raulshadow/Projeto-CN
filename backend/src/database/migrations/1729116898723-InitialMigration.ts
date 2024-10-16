import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1729116898723 implements MigrationInterface {
    name = 'InitialMigration1729116898723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `orphanages` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `latitude` decimal(10, 8) NOT NULL, `longitude` decimal(11, 8) NOT NULL, `about` varchar(255) NOT NULL, `instructions` varchar(255) NOT NULL, `opening_hours` varchar(255) NOT NULL, `open_on_weekends` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `images` (`id` int NOT NULL AUTO_INCREMENT, `path` varchar(255) NOT NULL, `orphanage_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `images` ADD CONSTRAINT `FK_aa7e04fdd620f748adad5b96bbb` FOREIGN KEY (`orphanage_id`) REFERENCES `orphanages`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `images` DROP FOREIGN KEY `FK_aa7e04fdd620f748adad5b96bbb`");
        await queryRunner.query("DROP TABLE `images`");
        await queryRunner.query("DROP TABLE `orphanages`");
    }
}
