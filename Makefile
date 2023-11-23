setup: build up logs

build:
	docker compose -f .docker/docker-compose.dev.yml build

up:
	docker compose -f .docker/docker-compose.dev.yml up -d

down:
	docker compose -f .docker/docker-compose.dev.yml down

bash-backend:
	docker compose -f .docker/docker-compose.dev.yml exec backend sh

bash-frontend:
	docker compose -f .docker/docker-compose.dev.yml exec frontend sh

logs:
	docker compose -f .docker/docker-compose.dev.yml logs -f

test-front:
	docker compose -f .docker/docker-compose.dev.yml exec frontend pnpm test

test-back:
	docker compose -f .docker/docker-compose.dev.yml exec backend pnpm test

test: test-front test-back