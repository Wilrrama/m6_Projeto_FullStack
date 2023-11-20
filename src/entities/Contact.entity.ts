import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User.entity";

@Entity("contacts")
export default class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 45 })
  full_name: string;
  @Column({ length: 45, unique: true })
  email: string;
  @Column({ type: "int" })
  phone: number;
  @CreateDateColumn({ type: "date" })
  createdAt: string;
  @ManyToOne(() => User)
  user: User;
}
