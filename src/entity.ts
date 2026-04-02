import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { books } from './library';
@Entity('User')
export class Userdetails {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ name: 'name', description: 'The name of the user' })
  @Column()
  name: string;
  @ApiProperty({ name: 'name', description: 'the email of the users' })
  @Column()
  email: string;
  @ApiProperty({ name: 'name', description: 'the password of the users' })
  @Column()
  password: string;
  @OneToMany(() => books, (book) => book.user, {
    cascade: true,
    nullable: true,
    onDelete: 'CASCADE',
  })
  book: books[];
}
