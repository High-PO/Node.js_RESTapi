# Simple RESTapi Kit

Development from Node.js

# COMMAND

1. `git clone https://github.com/High-PO/simple_RESTapi.git`
2. `npm ci`
3. `node server.js`

# QUERY COMMAND

## GET users
```
curl -X GET 'localhost:8085/users'
```
### GET user1
```
curl -X GET 'localhost:8085/users/1'
```
## POST users
```
curl -X POST 'localhost:8085/users' -d "name=example"
```
## DELETE user 1
```
curl -X DELETE 'localhost:8085/users/1'
```
