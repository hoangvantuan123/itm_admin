import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { CodeHelpComboQueryService } from '../service/codeHelpComboQuery.service';
import { CodeHelpComboQueryController } from '../controller/codeHelpComboQuery.controller';
@Module({
  imports: [],
  providers: [
    DatabaseService,
    CodeHelpComboQueryService,
  ],
  controllers: [CodeHelpComboQueryController],
  exports: [],
})
export class CodeHelpComboQueryModule { }
