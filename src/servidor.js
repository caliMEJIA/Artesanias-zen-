// Importamos los componentes que necesitaremos


// import cors from 'cors';
// import dotenv from 'dotenv';
// import { createClient } from '@supabase/supabase-js';
// import { Pool } from 'pg';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { v4 as uuidv4 } from 'uuid';
// import { validationResult } from 'express-validator';
// import { body, validationResult } from 'express-validator';

// Creamos el servidor

const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req, res) => {
    res.send('servidor está funcionando correctamente')
})
;
// const donten = require('dotenv');
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);
// const {createPool} = require('@supabase/supabase-js');
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     port: process.env.DB_PORT
// })

//Crearemos el puerto de escucha

app.listen(port,() => {
    console.log(`servidor corriendo en http://localhost:${port}`)
})