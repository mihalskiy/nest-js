import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({unique: false})
  title: string;

  @Column({unique: false})
  isComplete: boolean;

  @Column({nullable: true})
  desc: string;
}
