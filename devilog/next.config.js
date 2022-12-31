/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  //nextjs 13 실험적인 기능 - appDir 새로운 폴더 사용 가용여부
  experimental: {                 
    appDir: true
  }
}

module.exports = nextConfig
