FROM python:3.11-slim
WORKDIR /app
COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app /app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

# Step 1: Backend build
FROM golang:1.22 as backend
WORKDIR /app
COPY . .
RUN go mod tidy
RUN go build -o web4app main.go

# Step 2: Frontend build
FROM node:18 as frontend
WORKDIR /app
COPY ./frontend ./frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Step 3: Integration test runner
FROM cypress/included:12.17.3 as tester
WORKDIR /app

# Copy backend + frontend
COPY --from=backend /app/web4app ./web4app
COPY --from=frontend /app/frontend/dist ./dist

# Install a static server for frontend
RUN npm install -g serve wait-on

# Run backend + frontend in background
RUN BACKGROUND ./web4app &
RUN BACKGROUND serve -s dist -l 8888

# Wait until both are ready
RUN npx wait-on http://localhost:8080
RUN npx wait-on http://localhost:8888

# Run Cypress tests
COPY ./cypress ./cypress
COPY ./cypress.config.js .
RUN npx cypress run --headless
