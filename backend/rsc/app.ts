import express from "express";

class App {
    app: express.Application;

    constructor() {
        this.app = express();
    }

    start() {
        this.app.listen(3000, () => {
            console.log("server running");
        });
    }
}

export default App;

