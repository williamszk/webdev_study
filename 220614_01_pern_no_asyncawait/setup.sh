
# check the ubuntu version
cat /etc/*ease
# DISTRIB_ID=Ubuntu
# DISTRIB_RELEASE=20.04
# DISTRIB_CODENAME=focal

apt update

# check if postgres is not already installed
service postgresql status
# postgresql: unrecognized service
# it is not installed already

apt install postgresql postgresql-contrib

# check if postgres is installed
service postgresql status

# root@96bf7c14a933:~/webdev_study/220614_01_pern_no_asyncawait# service postgresql status
# perl: warning: Setting locale failed.
# perl: warning: Please check that your locale settings:
#         LANGUAGE = "",
#         LC_ALL = "",
#         LC_TIME = "",
#         LC_CTYPE = "",
#         LC_MONETARY = "",
#         LC_COLLATE = "",
#         LC_ADDRESS = "",
#         LC_TELEPHONE = "",
#         LC_MESSAGES = "",
#         LC_NAME = "",
#         LC_MEASUREMENT = "",
#         LC_IDENTIFICATION = "",
#         LC_NUMERIC = "",
#         LC_PAPER = "",
#         LANG = "en_US.UTF-8"
#     are supported and installed on your system.
# perl: warning: Falling back to the standard locale ("C").
# 12/main (port 5432): down
# root@96bf7c14a933:~/webdev_study/220614_01_pern_no_asyncawait# 

# postgres is installed
# but we have the problem of locale-gen with Perl
# let't solve to stop the warning

locale-gen en_US.UTF-8
# Generating locales (this might take a while)...
#   en_US.UTF-8... done
# Generation complete.

# check the status of postgresql again
service postgresql status
# 12/main (port 5432): down
# now it is just the message

service postgresql start 
#  * Starting PostgreSQL 12 database server

# --------------------------------------------- #
mkdir server
cd server
npm init -y

# install packages
npm i express pg cors axios

touch index.js

# create the tests directory
# to include the mockClient.js
node mockClient.js

apt update
apt install net-tools -y
netstat -nlp | grep 5000
kill 88097

nodemon index.js

node mockClient.js


