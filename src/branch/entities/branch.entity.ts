import { Company } from '../../company/entities/company.entity';
import { Location } from '../../location/entities/location.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Branch extends BaseEntity {
  @ManyToOne(() => Company, (company) => company.branches)
  company: Company;

  @Column({ type: 'int', nullable: false })
  companyId: number; // Ou number, dependendo do tipo do seu ID

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string; // Nome da filial

  @OneToMany(() => Location, (location) => location.branch)
  locations: Location[]; // Relação com os locais
}
