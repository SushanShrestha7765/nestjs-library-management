import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Userdetails } from './entity';
@Entity('checking')
export class books {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ name: 'title', description: 'The title of the book' })
  @Column()
  @IsNotEmpty()
  title: string;
  @ApiProperty({ name: 'author', description: 'The author of the book' })
  @Column()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    name: 'description',
    description: 'The description of the book',
  })
  @Column()
  @IsOptional()
  description: string;
  @ManyToOne(() => Userdetails, (user) => user.book, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'userId' })
  user: Userdetails;
}
