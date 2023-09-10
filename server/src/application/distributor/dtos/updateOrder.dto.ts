import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty()
  listing: boolean;

  @ApiProperty()
  numberOfPackets: number;
}
