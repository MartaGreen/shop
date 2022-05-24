import { Router } from "express";
import { User } from "../entity/user/user";
import { ICreateUserData } from "src/interfaces/user.interface";
import { getConnection } from "typeorm";

import generateUniqueId, { idPrefixes } from "../shared/idGenerator";

const router = Router();

router.get("/", async (req, res) => {
  const customer = await getConnection()
    .createQueryBuilder()
    .select("u")
    .from(User, "u")
    .getMany();
  console.log(customer);
  res.send(customer);
});

router.post("/", async (req, res) => {
  const customerData: ICreateUserData = req.body;
  const customer = new User();
  customer.Name = customerData.name;
  customer.Surname = customerData.surname;
  customer.Email = customerData.email;
  customer.Password = customerData.password;
  customer.Avatar = customerData.avatar;

  // const PersonalId: string = generateUniqueId(idPrefixes.user);
  // customer.PersonalId = PersonalId;

  const connection = await getConnection();
  await connection.manager.save(customer);

  res.send("create new user");
});

export default router;
