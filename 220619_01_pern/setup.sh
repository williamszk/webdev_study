cd 220619_01_pern

# setup the node environment 
cd server
npm init -y 
npm i express pg cors

# check is postgres is running
service postgresql status
# 12/main (port 5432): down

# turn on the service
service postgresql start 
# * Starting PostgreSQL 12 database server 

service postgresql status
# 12/main (port 5432): online

# turn-on servers
cd server
nodemon index.js

# solve problem of port being used
# apt update
# apt install net-tools -y
netstat -nlp | grep 5000
kill 108914

# run the mock client
cd tests
go run mockClient.go

