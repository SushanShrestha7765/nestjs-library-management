import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { books } from './library';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({ summary: 'Get all books' })
  @Get()
  async get() {
    return await this.appService.findall();
  }
  @ApiOperation({ summary: 'Insert a new book' })
  @ApiBody({ type: books })
  @Post('/inserting')
  async put(@Body() dto: books) {
    return await this.appService.saveall(dto);
  }
  @ApiOperation({ summary: 'Update an existing book' })
  @Put('/update/:id')
  async patch(@Param('id') id: number, @Body() dto: books) {
    return await this.appService.update(id, dto);
  }
  @ApiOperation({ summary: 'Get a book by ID' })
  @Delete('/delete/:id')
  async delete(@Param('id') id: number) {
    return await this.appService.delete(id);
  }
  @ApiOperation({ summary: 'Get a book by ID' })
  @Patch('/patch/:id')
  async patching(@Param('id') id: number, @Body() dto: books) {
    return await this.appService.update(id, dto);
  }
}
