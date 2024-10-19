
import App from "./app";
import database  from "./database";


const app = new App();
database();
app.start();