

# GET
curl -X GET -i http://localhost:5050/password-cards


# POST
curl -XPOST -i http://localhost:5050/password-cards --data '{ "name": "twitter", "username": "echo", "url": "http://twitter.com", "username": "123123", "password": "hellyeah" }' -H 'content-type: application/json' 


# PUT
curl -XPUT -i http://localhost:5050/password-cards/1 --data '{ "name": "twitter", "username": "echo", "url": "http://twitter.com", "username": "123123", "password": "hellyeah" }' -H 'content-type: application/json' 
