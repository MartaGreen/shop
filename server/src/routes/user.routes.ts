import { Router } from "express";
import { User } from "../entity/user/user";
import { ICreateUserData } from "src/interfaces/user.interface";
import { AppDataSource } from "../entity/connection";

const router = Router();

router.get("/", async (req, res) => {
  // const customer = await getConnection()
  //   .createQueryBuilder()
  //   .select("u")
  //   .from(User, "u")
  //   .getMany();
  // console.log(customer);
  const userRepository = AppDataSource.getRepository(User);
  const customers = await userRepository.find();
  res.send(customers);
});

router.post("/", async (req, res) => {
  const customerData: ICreateUserData = req.body;
  const customer = new User();
  customer.Name = customerData.name;
  customer.Surname = customerData.surname;
  customer.Email = customerData.email;
  customer.Password = customerData.password;
  customer.Avatar = customerData.avatar;

  const userRepository = AppDataSource.getRepository(User);
  await userRepository.save(customer);

  res.send("create new user");
});

export default router;
