# Usa una imagen base para Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto de tu aplicación
EXPOSE 5001

# Inicia la aplicación
CMD ["npm", "run", "start:prod"]
