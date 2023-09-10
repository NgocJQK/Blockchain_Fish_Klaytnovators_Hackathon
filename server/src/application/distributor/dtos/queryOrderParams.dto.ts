import { ApiProperty } from '@nestjs/swagger';
import { BaseQueryParams } from 'src/domain/dtos';

export class QueryOrderParams extends BaseQueryParams {
  @ApiProperty()
  status: number;

  @ApiProperty()
  orderer: string;

  @ApiProperty()
  receiver: string;

  @ApiProperty()
  disable: boolean;

  @ApiProperty()
  listing: boolean;

  @ApiProperty()
  isHavePackets: boolean;

  @ApiProperty()
  dateFilter: string;

  @ApiProperty()
  fromDate?: number;

  @ApiProperty()
  toDate?: number;
}
