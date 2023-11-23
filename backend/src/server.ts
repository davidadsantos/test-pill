import app from "./app";
import { getEnv } from "./helpers/env";

app.listen(getEnv("PORT"), () => {
  console.log(`Server is running on port ${getEnv("PORT")}.`);
});
