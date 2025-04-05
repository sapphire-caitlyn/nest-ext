import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({ collection: 'accounts' })
export class Account {
  @Prop({ required: true })
  number: number;
  @Prop({ required: true })
  holder: string;
  @Prop({ required: true })
  balance: number;
  @Prop({ required: true })
  limit: number;
}
export const AccountSchema = SchemaFactory.createForClass(Account)