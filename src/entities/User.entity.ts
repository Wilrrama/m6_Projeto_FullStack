import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Contact from "./Contact.entity";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 45 })
  full_name: string;
  @Column({ length: 45, unique: true })
  email: string;
  @Column({ length: 120 })
  password: string;
  @Column({ type: "int" })
  phone: number;
  @CreateDateColumn({ type: "date" })
  createdAt: string;
  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}
