import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./vitest-coverage",
    },
    sequence: {
      shuffle: true,
    },
    reporters: ["default", "json", "html"],
  },
})
