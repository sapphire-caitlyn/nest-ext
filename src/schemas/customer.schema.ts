import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({ collection: 'client' })
export class Customer {
  @Prop({ required: true })
  cpf: string;
  @Prop({ required: true })
  endereco: string;
  @Prop({ required: true })
  contato: string;
}
export const CustomerSchema = SchemaFactory.createForClass(Customer)