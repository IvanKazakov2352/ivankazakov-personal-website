build:
	docker build -t ivankazakov/my-site:frontend .
run:
	docker run -p 3000:3000 ivankazakov/my-site:frontend