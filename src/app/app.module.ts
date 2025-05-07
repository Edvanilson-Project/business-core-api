import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '../common/core/core.module';
import { UserModule } from '../user/user.module';
import { RoleModule } from '../role/role.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/common/config/configuration';
// import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    CoreModule,
    UserModule,
    RoleModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
