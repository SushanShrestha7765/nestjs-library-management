import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { books } from './library';

@Injectable()
export class AppService {
  @InjectRepository(books)
  private readonly library: Repository<books>;
  constructor() {}
  async saveall(dto: books) {
    return await this.library.save(dto);
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
