import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // server: {
  //   hmr: process.env.GITPOD_WORKSPACE_URL
  //     ? {
  //       // Due to port fowarding, we have to replace
  //       // 'https' with the forwarded port, as this
  //       // is the URI created by Gitpod.
  //       host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
  //       protocol: "wss",
  //       clientPort: 443
  //     }
  //     : true
  // },
  plugins: [
    tsconfigPaths({ projects: ['./tsconfig.vite.json'] }),
    react(),
  ],
})
