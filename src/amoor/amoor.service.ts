import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateAmoorDto } from './dtos/CreateAmoorDto.dto';
import { UpdateAmoorDto } from './dtos/UpdateAmoorDto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Amoor } from 'src/typeorm/entities/Amoor';
import { Repository } from 'typeorm';
import { create } from 'domain';
import { error } from 'console';

@Injectable()
export class AmoorService implements OnModuleInit {
    constructor(@InjectRepository(Amoor) private amoorRepository: Repository<Amoor>,){}
    private Amoors = [
        {id:"amoor1",coolLevel:150},
        {id:"amoor2",coolLevel:11}
    ]
    
    async createAmoor(createAmoorDto: CreateAmoorDto){
        const newAmoor = this.amoorRepository.create(createAmoorDto);
        return this.amoorRepository.save(newAmoor);
    }
    getAmoors(){
        return this.amoorRepository.find()
    }
    async getAmoor(fid:string){
        const amoor = await this.amoorRepository.findOneBy({id: fid});
        
        if(amoor !==null) return amoor;
        throw new NotFoundException("Amoor msh hena")
        
    }
    deleteAmoor(id:string){
        const deleteThis = this.getAmoor(id);
        this.Amoors = this.Amoors.filter((amoor)=>amoor.id!==id)
        return deleteThis
    }
    updateAmoor(id:string, updateAmoorDto: UpdateAmoorDto){
        this.amoorRepository.update( { id },{...updateAmoorDto})
    }
    insertTestRecords(){
        const dto = new CreateAmoorDto()
        dto.id = "amoor1"
        dto.coolLevel= 111
        const dtoo = new CreateAmoorDto()
        dtoo.id= "amoor2"
        dtoo.coolLevel= 222
        this.createAmoor(dto)
        this.createAmoor(dtoo)
    }
    async onModuleInit(){
        await this.insertTestRecords()
    }
}
    
    
