import mongoose from "mongoose";

// FUNCION PARA CONECTAR A LA BASE DE DATOS 
async function conect() {
    try {
        await mongoose.connect("mongodb://localhost/ts-app-api", {
          
        });
        console.log("connection true ");
    } catch (error) {
        console.error("failed connection:", error);
    }
}

export default conect;
