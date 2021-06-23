import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Base public path (default: '/')
  base: '/',
  // development for serve, production for build
  mode: 'development',
  // 참고 https://vitejs.dev/guide/api-plugin.html#conventions
  plugins: [vue()],
  // Server Options
  server: {
    // IP 주소를 지정 (default: '127.0.0.1')
    host: '127.0.0.1',
    // 서버 포트번호 지정
    port: 3000,
    // 지정된 포트번호가 사용 중일경우 true이면 자동으로 다음 포트번호로 연결
    // strictPort: true,
    // Configure CORS for the dev server (Type: boolean | CorsOptions)
    // cors: true,
  },
  // Build Options
  build: {
    // 최종 번들된 파일의 호환이 되는 브라우저 설정 (default: 'modules' => Vite special value)
    // target: 'modules',
    // 빌드 결과 경로 설정  
    // outDir: 'dist',
  },
})
