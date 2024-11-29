import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { StockInService } from '../service/stockIn.service';
import { GenerateXmlService } from '../generate-xml/generate-xml.service';
import { EmployeeController } from '../controller/stockIn.controller';
import { DeliveryListService } from '../service/deliveryList.service';
import { DeliveryListController } from '../controller/deliveryList.controller';

@Module({
  imports: [],
  providers: [
    DatabaseService,
    StockInService,
    GenerateXmlService,
    DeliveryListService
  ],
  controllers: [EmployeeController, DeliveryListController ],
  exports: [],
})
export class StockInModule { }
