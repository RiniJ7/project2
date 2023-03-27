import express from "express";
import { provinceRouter } from "./provinceRouter.js";
import { foodRouter } from "./foodRouter.js";

const app = express();
const port = 5051;

app.use(express.json());
app.use("/", provinceRouter);
app.use("/des", foodRouter);

app.get("/", (req, res) => {
  res.send(
    "Welcome to the Taste of Canada,\na culinary journey through Canadian provinces .. \n"
  );
  console.log('Welcome Message')
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});

