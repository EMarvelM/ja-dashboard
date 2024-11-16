import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobApplicationModule } from './job-application/job-application.module';

@Module({
  imports: [JobApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
