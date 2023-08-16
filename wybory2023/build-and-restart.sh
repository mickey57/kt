docker build -t wyb2023kt .
docker stop wyb2023kt || true
docker rm wyb2023kt || true
docker run -d -p 8080:8080 --name wyb2023kt wyb2023kt
