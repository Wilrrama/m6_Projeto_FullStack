import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ type: "int" })
  phone: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;
}

export { User };
