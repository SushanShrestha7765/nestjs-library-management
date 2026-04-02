import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { books } from './library';
import { Userdetails } from './entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(books)
    private readonly library: Repository<books>,
    @InjectRepository(Userdetails)
    private readonly user: Repository<Userdetails>,
  ) {}
  async saveuser(dto: Userdetails) {
    return await this.user.save(dto);
  }
  async saveall(dto: books, user_id: number) {
    const user = await this.user.findOne({ where: { id: user_id } });
    if (!user) {
      throw new NotFoundException('User with the given id not found');
    }
    const save_book = this.library.create({
      title: dto.title,
      author: dto.author,
      description: dto.description,
      user: user,
    });
    return await this.library.save(save_book);
  }
  async findall() {
    return await this.library.find();
  }
  async put() {
    return await this.library.find();
  }
  async delete(id: number) {
    return await this.library.delete(id);
  }
  async getall(id: number) {
    return await this.library.findOneBy({ id });
  }
  async update(id: number, dto: books) {
    return await this.library.update(id, dto);
  }
}
