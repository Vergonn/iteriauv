import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(envKeys)]
})