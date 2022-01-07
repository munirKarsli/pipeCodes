# Node.js Express & MongoDB: CRUD Rest APIs

PipeCodes Coding Challange

## Project setup
```
npm install
```

### Run
```
node server.js
```

### Default Env Variables
```
DB_URL: mongodb://localhost:27017/codePipes
PORT: 8080 
```

## Project Usage
Create Record
```
curl --location --request POST 'localhost:8080/api' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title" : "title",
    "description" : "description",
    "featuredImage": "featuredImage",
    "published": true
}'
```

Get Record

To get all records sends a request without id

```
curl --location -g --request GET 'localhost:8080/api/{{id}}'
```

Update Record

```
curl --location --request PUT 'localhost:8080/api/61d859dcd9766e22a0115035' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title" : "title",
    "description" : "description",
    "featuredImage": "featuredImage",
    "published": true
}'
```

Delete Record

To delete all records sends a request withoud id
```
curl --location -g --request DELETE 'localhost:8080/api/{{id}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "published" : false,
    "featuredImage": "featuredImage",
    "description" : "description updated aasdasdsadsd"
}'
```



