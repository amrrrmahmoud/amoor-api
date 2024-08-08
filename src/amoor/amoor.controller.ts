import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { AmoorService } from './amoor.service';
import { CreateAmoorDto } from './dtos/CreateAmoorDto.dto';
import { UpdateAmoorDto } from './dtos/UpdateAmoorDto.dto';
import { ParseBoolPipe } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('amoor')
export class AmoorController {
    constructor(private readonly amoorService: AmoorService){}
    @Get()
    //@UseGuards(AuthGuard)
    getAmoors(){
        return this.amoorService.getAmoors();
    }
    @Get(':id')
    getAmoor(@Param('id') id: string){
        if(id=="yasoof"){
            return "L BOZO"
        } 
        return this.amoorService.getAmoor(id)
    }

    @Post()
    createAmoor(@Body(new ValidationPipe()) createAmoorDto: CreateAmoorDto){
        return this.amoorService.createAmoor(createAmoorDto)
    }
    @Delete(':id')
    deleteAmoor(@Param('id') id: string){
        return this.amoorService.deleteAmoor(id)
    }
    @Put(":id")
    updateAmoor(@Param('id') id: string, @Body() updateAmoorDto: UpdateAmoorDto){
        return this.amoorService.updateAmoor(id,updateAmoorDto)
    }
    
    

}
