import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1588202916262
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true, // chave primária da tabela
            generationStrategy: 'uuid', // o id será gerado como um "universally unique identifier"(uuid)
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false, // o valor não pode ficar em branco/nulo
          },
          {
            name: 'date',
            type: 'timestamp with time zone', // tipo exclusivo do Postgres: salva o horário e o fuso-horário
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
