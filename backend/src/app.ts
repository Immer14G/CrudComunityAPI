import express from "express";
import morgan from "morgan";
import { engine } from 'express-handlebars'; 
import path from "path";
var cors = require('cors')
//routes
import indexRoutes from './routes';
import taskRoutes from './routes/task';

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
        this.app.use(express.json());
        this.app.use(cors())
        this.app.use(express.urlencoded({ extended: false }));
    }
//rutas
    routes() {
        this.app.use(indexRoutes);
        this.app.use('/tasks',taskRoutes);
        this.app.use(express.static(path.join(__dirname,'public')));
    }

    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log("server running", this.app.get('PORT'));
        });
    }
}

export default App;


