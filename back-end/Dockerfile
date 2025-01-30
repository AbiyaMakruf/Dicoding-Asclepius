# Gunakan base image Node.js
FROM node:18

# Set working directory
WORKDIR /app

# Copy file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Expose port aplikasi (harus sesuai dengan yang dikonfigurasi di server.js)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run","start"]
