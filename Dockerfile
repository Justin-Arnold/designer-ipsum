FROM oven/bun:1-alpine AS base
WORKDIR /app

COPY package.json bun.lock ./

FROM base AS prod-deps
RUN bun install --frozen-lockfile --production

FROM base AS build-deps
RUN bun install --frozen-lockfile

FROM build-deps AS build
COPY . .
RUN bun run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/vite.config.ts ./

ENV HOST=0.0.0.0
ENV PORT=5173
EXPOSE 5173

CMD bun run preview --port $PORT --host $HOST --allowed-hosts designeripsum.xyz