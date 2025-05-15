import { Company } from '../../company/entities/company.entity';
import { Location } from '../../location/entities/location.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
export declare class Branch extends BaseEntity {
    company: Company;
    companyId: number;
    name: string;
    locations: Location[];
}
