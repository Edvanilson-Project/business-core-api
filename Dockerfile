# Usamos o Node 18 com Alpine (uma distribuição Linux super leve). Essa imagem será usada para construir seu app (compilar TypeScript).

# Etapa 1: Utiliza uma imagem oficial do Node.js como base
FROM node:18-alpine AS builder



# Define a pasta dentro do container onde todos os comandos vão rodar. Mantém tudo organizado.

# Define o diretório de trabalho dentro do container
WORKDIR /app



#Copiamos só os arquivos de dependência primeiro porque isso evita reinstalar tudo toda vez que você mudar o código (otimização de cache).
#Depois, rodamos npm install para instalar as libs.

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install



# Copia o código completo e compila com npm run build (gera a pasta /dist, com JS compilado).

# Copia o restante do código para dentro da imagem
COPY . .

# Compila o código TypeScript
RUN npm run build



#Começamos uma imagem limpa (sem arquivos de build desnecessários) para rodar sua API.

# Etapa 2: Cria uma imagem menor e mais leve apenas com o necessário para rodar a app
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app



# Copiamos só o resultado final da build: os arquivos compilados e as dependências. Isso gera uma imagem muito menor e mais rápida.

# Copia apenas os arquivos necessários da etapa anterior
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules



# EXPOSE declara qual porta a app usará (não abre a porta por si só, só documenta).

# CMD é o comando padrão quando o container for iniciado: aqui, rodamos o Nest compilado.

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Define o comando para rodar a aplicação
CMD ["node", "dist/main"]
