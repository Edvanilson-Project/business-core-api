import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  /**
   * Cria um novo funcionário.
   * @param createEmployeeDto Dados do funcionário a serem criados.
   * @returns O funcionário criado.
   */
  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepo.create(createEmployeeDto);
    return this.employeeRepo.save(employee);
  }

  /**
   * Retorna todos os funcionários ativos.
   * @returns Lista de funcionários ativos.
   */
  async findAll(): Promise<Employee[]> {
    try {
      return await this.employeeRepo.find({
        where: { isActive: true },
        relations: ['employeePositions', 'employeeLocations'],
        order: { name: 'ASC' },
      });
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
      throw new HttpException(
        'Erro ao buscar funcionários',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Retorna um funcionário pelo ID.
   * @param id ID do funcionário a ser buscado.
   * @returns O funcionário encontrado.
   */
  async findOne(id: number): Promise<Employee | null> {
    return await this.employeeRepo.findOne({
      where: { id },
      relations: ['employeePositions', 'employeeLocations'],
    });
  }

  /**
   * Retorna um funcionário pelo e-mail.
   * @param email E-mail do funcionário a ser buscado.
   * @returns O funcionário encontrado.
   */
  async findByEmail(email: string): Promise<Employee | null> {
    return await this.employeeRepo.findOne({
      where: { email },
      relations: ['employeePositions', 'employeeLocations'],
    });
  }

  /**
   * Retorna um funcionário pelo ID ou lança uma exceção se não encontrado.
   * @param id ID do funcionário a ser buscado.
   * @returns O funcionário encontrado.
   * @throws NotFoundException se o funcionário não for encontrado.
   */
  async findOneOrFail(id: number): Promise<Employee> {
    const employee = await this.employeeRepo.findOne({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundException(`Funcionário com ID ${id} não encontrado`);
    }
    return employee;
  }

  /**
   * Atualiza os dados de um funcionário.
   * @param id ID do funcionário a ser atualizado.
   * @param updateEmployeeDto Dados atualizados do funcionário.
   * @returns O funcionário atualizado.
   */
  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const employee = await this.findOneOrFail(id);

    const updated = Object.assign(employee, updateEmployeeDto);
    return this.employeeRepo.save(updated);
  }

  /**
   * Remove um funcionário (marca como inativo).
   * @param id ID do funcionário a ser removido.
   */
  async remove(id: number): Promise<void> {
    const employee = await this.findOneOrFail(id);

    employee.isActive = false;
    await this.employeeRepo.save(employee);
  }
}
