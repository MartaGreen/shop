import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  Name: string;

  @Column("varchar", { length: 100 })
  Surname: string;

  @Column("varchar", { length: 100 })
  Email: string;

  @Column("varchar", { length: 100 })
  Password: string;

  @Column("varchar", { length: 100 })
  Avatar: string;

  @Column("varchar", { unique: true })
  @Generated("uuid")
  PersonalId: string;
}
