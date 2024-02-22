import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, type: "text" })
  name: string;

  @Column({ nullable: false, type: "numeric" })
  value: number;

  @Column({ type: "jsonb" })
  details: ProductDetails[];

  @CreateDateColumn({ type: "time with time zone" })
  publishDate: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;

  @Column({ nullable: false, type: "text" })
  description: string;

  @Column({ nullable: false, type: "numeric" })
  quantity: number;

  @Column({ type: "jsonb" })
  colors: Colors[];

  @Column({ type: "numeric", nullable: true, default: 0 })
  total: number;
}

export class ProductDetails {
  resume: string;
  imgLink: string;
  observation: string;
  type: string;
  delivery: boolean;
  dimX: number;
  dimY: number;
}

export class Colors extends Product {
  color: string;
}
