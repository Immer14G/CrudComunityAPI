import express from "express";
import morgan from "morgan";
import { engine } from 'express-handlebars'; 
import path from "path";

//routes
import indexRoutes from './routes';

class App {
    app: express.Application;

    constructor() {
        this.app = express();
        this.setting();
        this.middlewares();
        this.routes();
    }

    setting() {
        this.app.set('PORT', 3000);
        this.app.set('views', path.join(__dirname, 'views'));


        // Configuración del motor de plantillas
        this.app.engine('hbs', engine({ 
            layoutsDir: path.join(this.app.get('views'), 'layout'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs'); 
    }

    middlewares() {
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use(indexRoutes);
    }

    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log("server running", this.app.get('PORT'));
        });
    }
}

export default App;


