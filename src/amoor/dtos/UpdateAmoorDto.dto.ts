import { CreateAmoorDto } from "./CreateAmoorDto.dto";
import { PartialType } from '@nestjs/mapped-types';
export class UpdateAmoorDto extends PartialType(CreateAmoorDto){}