import { Client } from "src/clients/entities/client.entity";
import { Request } from "src/request/entities/request.entity";
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

@Entity("sale")
export class Sale {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @OneToOne(() => Request, (request: Request) => request.id)
  request_: string;

  @Column({ nullable: false, type: "boolean", default: false })
  completed: boolean;

  @ManyToOne(() => Client, (client: Client) => client.id)
  client_: string;

  @Column({ nullable: true, type: "time with time zone" })
  completedAt: Date;

  @Column({ nullable: false, type: "boolean", default: false })
  failed: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
