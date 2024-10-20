import { Schema, model } from "mongoose";

// Definición del esquema para las tareas
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,  
        lowercase: true
    },
    description: {
        type: String,
        required: true,  
        lowercase: true
    }
});

// Exporta el modelo de tarea
export default model('Task', TaskSchema);
