import { Address, Client } from "src/clients/entities/client.entity";
import { Sale } from "src/sale/entities/sale.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("request")
export class Request {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @ManyToOne(() => Client, (client: Client) => client.id)
  client_: string;

  @Column({ nullable: false, type: "jsonb" })
  address: Address[];

  @Column({ nullable: false, type: "text" })
  paymentForm: string;

  @Column({ nullable: false, type: "numeric" })
  total: string;

  @Column({ nullable: false, type: "jsonb" })
  cartItems: cartProducts[];

  @Column({ nullable: false, type: "time with time zone" })
  date: Date;

  @OneToOne(() => Sale, (sale: Sale) => sale.id)
  public sale: Sale[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
export class cartProducts {
  product_id: string;
  quantity: number;
  value: number;
  total: number;
}
