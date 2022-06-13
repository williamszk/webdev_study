
# inside the 220611_02_postgres
mkdir server
cd server
npm init -y
# {
#   "name": "server",
#   "version": "1.0.0",
#   "description": "",
#   "main": "index.js",
#   "scripts": {
#     "test": "echo \"Error: no test specified\" && exit 1"
#   },
#   "keywords": [],
#   "author": "",
#   "license": "ISC"
# }

npm i express pg cors axios

touch index.js

# to start the node server
node index.js
# it is better to use nodemon
nodemon index.js

# stopped here:
# https://youtu.be/ldYcgPKEZC8?t=430 
# https://youtu.be/ldYcgPKEZC8?t=797


cd 220611_02_postgres
cd server
touch db.js

node mockClient.js

# stopped here:
# https://youtu.be/ldYcgPKEZC8?t=1482
# https://youtu.be/ldYcgPKEZC8?t=1957