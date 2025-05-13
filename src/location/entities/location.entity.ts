import { EmployeeLocation } from '../../employee-location/entities/employee-location.entity';
import { Branch } from '../../branch/entities/branch.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Location extends BaseEntity {
  @ManyToOne(() => Branch, { nullable: false })
  @JoinColumn({ name: 'branchId' })
  branch: Branch; // Filial à qual o local pertence

  @Column({ type: 'int', nullable: false })
  branchId: number;

  @OneToMany(() => EmployeeLocation, (empLoc) => empLoc.location)
  employeeLocations: EmployeeLocation[];

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string; // Nome do local
}
