import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/Pdf_make/', // 👈 isso precisa bater com o nome do repositório
})
