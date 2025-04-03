import { Company } from "src/company/entities/company.entity";
import { Location } from "src/location/entities/location.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Branch {
    @PrimaryGeneratedColumn()
    id: number; // Identificador único da filial
  
    @ManyToOne(() => Company, { nullable: false })
    @JoinColumn({ name: 'companyId' })
    company: Company; // Empresa à qual a filial pertence
  
    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string; // Nome da filial
  
    @OneToMany(() => Location, (location) => location.branch)
    locations: Location[]; // Relação com os locais
}
