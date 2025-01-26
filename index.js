import app from "./App.js";
import "dotenv/config";
import connection from "./Db.js";

connection().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
