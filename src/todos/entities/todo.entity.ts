import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Todo' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  isComplete: boolean;

  @Column()
  desc: string;
}
