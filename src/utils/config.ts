import dotenv from "dotenv"

require("dotenv").config();

export const PORT = process.env.PORT || 4000;
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_USERNAME = process.env.DB_USERNAME
export const SCHIPHOL_APP_APP_ID = process.env.SCHIPHOL_APP_APP_ID
export const SCHIPHOL_APP_APP_KEY = process.env.SCHIPHOL_APP_APP_KEY
export const SCHIPHOL_URL = process.env.SCHIPHOL_URL
  
  