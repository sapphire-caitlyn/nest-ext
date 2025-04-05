import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdateCustomerSchema = z.object({
  cpf     : z.string().min(11).max(11).optional(),
  endereco: z.string().optional(),
  contato : z.string().optional(),
});

export class UpdateCustomerDto extends createZodDto(UpdateCustomerSchema) {}