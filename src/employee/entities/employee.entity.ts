import { BaseEntity } from 'src/common/entities/base.entity';
import { EmployeePosition } from '../../employee-position/entities/employee-position.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { EmployeeLocation } from 'src/employee-location/entities/employee-location.entity';

@Entity()
export class Employee extends BaseEntity {
  // ============================
  // 📌 Identificação principal
  // ============================

  @Column({ type: 'int', unique: true, nullable: false })
  registrationNumber: number; // Número de registro do funcionário (matrícula)

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string; // Nome completo do funcionário

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string; // E-mail corporativo

  @Column({ type: 'varchar', length: 14, unique: true, nullable: false })
  cpf: string; // CPF (Cadastro de Pessoa Física)

  @Column({ type: 'varchar', length: 12, unique: true, nullable: true })
  rg?: string; // RG (Registro Geral)

  @Column({ type: 'varchar', length: 20, nullable: true })
  issuingAuthority?: string; // Órgão emissor do RG

  @Column({ type: 'varchar', length: 11, nullable: true })
  pis?: string; // PIS (Programa de Integração Social)

  // ============================
  // 📄 Documentos Trabalhistas
  // ============================

  @Column({ type: 'varchar', length: 20, nullable: true })
  workCardNumber?: string; // Número da carteira de trabalho

  @Column({ type: 'varchar', length: 10, nullable: true })
  workCardSeries?: string; // Série da carteira de trabalho

  // ============================
  // 👤 Informações Pessoais
  // ============================

  @Column({ type: 'varchar', length: 50, nullable: true })
  nationality?: string; // Nacionalidade

  @Column({ type: 'date', nullable: true })
  birthDate?: Date; // Data de nascimento

  @Column({ type: 'varchar', length: 50, nullable: true })
  maritalStatus?: string; // Estado civil

  @Column({ type: 'varchar', length: 50, nullable: true })
  educationLevel: string; // Nível de escolaridade

  // ============================
  // 🗳 Outros Documentos
  // ============================

  @Column({ type: 'varchar', length: 20, nullable: true })
  voterRegistration?: string; // Título de eleitor

  @Column({ type: 'varchar', length: 20, nullable: true })
  driverLicense?: string; // Número da CNH

  @Column({ type: 'varchar', length: 2, nullable: true })
  driverLicenseCategory?: string; // Categoria da CNH (A, B, AB, etc.)

  @Column({ type: 'date', nullable: true })
  driverLicenseExpiration?: Date; // Validade da CNH

  // ============================
  // 🏠 Endereço
  // ============================

  @Column({ type: 'varchar', length: 255, nullable: true })
  address?: string; // Endereço residencial

  @Column({ type: 'varchar', length: 50, nullable: true })
  city?: string; // Cidade

  @Column({ type: 'varchar', length: 50, nullable: true })
  state?: string; // Estado

  // ============================
  // 💵 Dados Bancários
  // ============================

  @Column({ type: 'varchar', length: 50, nullable: true })
  bankName?: string; // Nome do banco

  @Column({ type: 'varchar', length: 20, nullable: true })
  bankAccountNumber?: string; // Conta bancária

  @Column({ type: 'varchar', length: 20, nullable: true })
  bankAgencyNumber?: string; // Agência bancária

  // ============================
  // 🏥 Benefícios
  // ============================

  @Column({ type: 'varchar', length: 50, nullable: true })
  healthInsurance?: string; // Nome do plano de saúde

  // ============================
  // 📅 Situação contratual
  // ============================

  @Column({ type: 'date', nullable: false })
  hireDate: Date; // Data de admissão

  @Column({ type: 'date', nullable: true })
  terminationDate?: Date; // Data de desligamento (se aplicável)

  @Column({ type: 'boolean', default: true })
  isActive: boolean; // Indica se o funcionário está ativo

  // ============================
  // 🔁 Relacionamentos

  @OneToMany(
    () => EmployeePosition,
    (employeePosition) => employeePosition.employee,
  )
  employeePositions: EmployeePosition[]; // Histórico de cargos/funções do funcionário

  @OneToMany(() => EmployeeLocation, (empLoc) => empLoc.employee)
  employeeLocations: EmployeeLocation[]; // Locais onde o funcionário atua
}
