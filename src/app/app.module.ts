import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '../common/core/core.module';
import { UserModule } from '../user/user.module';
import { RoleModule } from '../role/role.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/common/config/configuration';
import { AuthModule } from 'src/auth/auth.module';
import { validationSchema } from '../common/config/validation';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    CoreModule,
    UserModule,
    RoleModule,
    AuthModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
