# Just an experiment to setup a docker container for web development study

docker ps -a
# CONTAINER ID   IMAGE     COMMAND       CREATED      STATUS                    PORTS     NAMES
# 0a792f11a2a8   ubuntu    "/bin/bash"   5 days ago   Exited (130) 5 days ago             go_study

# to create a docker container with name webdev_study
docker run --name webdev_study -it ubuntu /bin/bash

# inside the container
apt update
apt install git build-essential curl  -y


# How to use browser (on host machine) to access an html inside container?
# https://forums.docker.com/t/how-can-i-navigate-to-container-website-from-host-browser/25035

apt install net-tools -y
ifconfig

# Searching more about this, I think I need to install nginx or apache server (any web server software)
# to to expose the html, and then from the host machine's browser I can access in the specified 
# ip address (the IP address of the container)









