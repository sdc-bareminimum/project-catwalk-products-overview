FROM postgres:latest

WORKDIR /users/postgres

# COPY ["/server/*", "./server/"]
# COPY ["/models/*", "./models/"]
# COPY ["/db/*", "./db/"]

COPY . .

RUN gunzip -c ./backup.gz


# gunzip -c ./dockerbase/backup.gz | docker-compose exec -T db psql -U andychen sdc