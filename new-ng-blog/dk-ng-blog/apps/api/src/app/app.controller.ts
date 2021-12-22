import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { BlogEntry } from '@dk-ng-blog/types';

@Controller('entries')
export class AppController {
 constructor(private readonly appService: AppService) {}

 @Get()
 getData() {
   return this.appService.getData();
 }

 @Post()
 create(@Body() body: BlogEntry) {
   return this.appService.create(body);
 }

 @Delete(':id')
 delete(@Param('id', ParseIntPipe) id: number) {
   return this.appService.delete(id);
 }
}