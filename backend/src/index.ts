
import App from "./app";
import database  from "./database";

//stating the server
const app = new App();
database();
app.start();