import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateCustomerSchema = z.object({
  cpf     : z.string().min(11).max(11),
  endereco: z.string(),
  contato : z.string(),
});

export class CreateCustomerDto extends createZodDto(CreateCustomerSchema) {}