import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

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
}
