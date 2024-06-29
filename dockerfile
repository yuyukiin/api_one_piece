FROM node:latest

WORKDIR /app

RUN npm i -g pnpm@latest
RUN npm i -g prisma@latest

RUN git clone https://github.com/heyuyuyu/api_one_piece.git .

RUN pnpm i

RUN echo "DATABASE_URL=postgresql://{USER}:{PASSWORD}@api_one_piece-one-piece-db-1:5432/one_piece_db" > .env

RUN prisma generate

COPY --chown=node:node . .

RUN pnpm build

EXPOSE 3002

CMD ["pnpm", "run", "start:prod"]