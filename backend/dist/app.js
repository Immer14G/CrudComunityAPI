"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
//routes
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.setting();
        this.middlewares();
        this.routes();
    }
    setting() {
        this.app.set('PORT', 3000);
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        // Configuración del motor de plantillas
        this.app.engine('hbs', (0, express_handlebars_1.engine)({
            layoutsDir: path_1.default.join(this.app.get('views'), 'layout'),
            partialsDir: path_1.default.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs');
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
    }
    routes() {
        this.app.use(routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log("server running", this.app.get('PORT'));
        });
    }
}
exports.default = App;
