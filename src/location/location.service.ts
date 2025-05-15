import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { BranchService } from 'src/branch/branch.service';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepo: Repository<Location>,

    private readonly branchService: BranchService,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    await this.branchService.findOneOrFail(createLocationDto.branchId);

    await this.findByNameAndBranchIdOrFailIfExists(
      createLocationDto.name,
      createLocationDto.branchId,
    );

    const location = this.locationRepo.create(createLocationDto);
    return this.locationRepo.save(location);
  }

  async findAll(): Promise<Location[]> {
    return this.locationRepo.find();
  }

  async findOne(id: number): Promise<Location | null> {
    return this.locationRepo.findOne({ where: { id } });
  }

  async findOneOrFail(id: number): Promise<Location> {
    const location = await this.locationRepo.findOne({ where: { id } });

    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }

    return location;
  }
  async findByNameAndBranchIdOrFail(
    name: string,
    branchId: number,
  ): Promise<Location> {
    const location = await this.locationRepo.findOne({
      where: { name, branchId },
    });

    if (!location) {
      throw new NotFoundException(
        `Location with name "${name}" and branch ID ${branchId} not found`,
      );
    }

    return location;
  }

  async findByNameAndBranchIdOrFailIfExists(
    name: string,
    branchId: number,
  ): Promise<void> {
    const location = await this.locationRepo.findOne({
      where: { name, branchId },
    });

    if (location) {
      throw new ConflictException(
        `Location with name "${name}" already exists for branch ID ${branchId}`,
      );
    }
  }

  async update(
    id: number,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    const location = await this.findOneOrFail(id);

    Object.assign(location, updateLocationDto);
    return this.locationRepo.save(location);
  }

  async remove(id: number): Promise<void> {
    const location = await this.findOneOrFail(id);

    await this.locationRepo.remove(location);
  }
}
