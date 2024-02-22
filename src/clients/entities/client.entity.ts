import { Request } from 'src/request/entities/request.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'text' })
  name: string;

  @Column({ nullable: false, type: 'text' })
  lastName: string;

  @Column({ nullable: false, type: 'text' })
  email: string;

  @Column({ nullable: false, type: 'text' })
  phone: string;

  @CreateDateColumn({ type: 'time' })
  createdAt: Date;

  @Column({ nullable: false, type: 'jsonb' })
  address: Address[];

  //Um cliente tem varios pedidos
  @OneToMany(() => Request, (request: Request) => request.client_)
  public request: Request[];
}

export class Address {
  cep: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}
