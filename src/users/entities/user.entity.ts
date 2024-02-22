import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, type: "text" })
  name: string;

  @Column({ nullable: false, type: "text" })
  email: string;

  @Column({ nullable: false, type: "text" })
  @Exclude()
  password: string;

  @Column({ nullable: false, type: "text" })
  role: string;
}
