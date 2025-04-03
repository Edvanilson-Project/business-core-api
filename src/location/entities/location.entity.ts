import { Branch } from "src/branch/entities/branch.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number; // Identificador único do local
  
    @ManyToOne(() => Branch, { nullable: false })
    @JoinColumn({ name: 'branchId' })
    branch: Branch; // Filial à qual o local pertence
  
    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string; // Nome do local
}
