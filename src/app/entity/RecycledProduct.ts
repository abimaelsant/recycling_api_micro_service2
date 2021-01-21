import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import User from './User';

@Entity('recycled_products')
class RecycledProduct {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  weight: number;

  @Column({ default: 0 })
  value: number;

  @Column()
  userId: number;

  @Column({ default: false })
  finished: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default RecycledProduct;
