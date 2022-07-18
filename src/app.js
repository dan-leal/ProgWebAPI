import express from 'express';

import userRouter from "./router.js/users"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Oi app.js");
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
