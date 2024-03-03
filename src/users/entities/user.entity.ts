import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { hashSync } from "bcrypt";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, type: "text" })
  name: string;

  @Column({ nullable: false, type: "text" })
  lastName: string;

  @Column({ nullable: false, type: "text" })
  @Unique(["email"])
  email: string;

  @Column({ nullable: true, type: "text" })
  avatar: string;

  @Column({ nullable: false, type: "text" })
  @Exclude()
  password: string;

  @Column({ nullable: false, type: "text" })
  role: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @BeforeInsert()
  hasPassword() {
    this.password = hashSync(this.password, 10);
  }
}
