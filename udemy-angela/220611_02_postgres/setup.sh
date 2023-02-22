
# https://www.youtube.com/watch?v=zw4s3Ey8ayo&ab_channel=TroyAmelotte


# install postgres in the container
# https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart

# how to see ubuntu version?
lsb_release -a
# bash: lsb_release: command not found

cat /etc/*ease
# it is 20.04

apt update

apt install postgresql postgresql-contrib

# not sure if we have systemctl
systemctl start postgresql.service
# bash: systemctl: command not found

service postgresql.service status
# postgresql.service: unrecognized service

service postgresql status
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

# let's fix the problem with perl

locale-gen
# root@0267890844bb:~/webdev_study/220611_02_postgres# locale-gen
# Generating locales (this might take a while)...
# Generation complete.

locale-gen en_US.UTF-8
# root@0267890844bb:~/webdev_study/220611_02_postgres# locale-gen en_US.UTF-8
# Generating locales (this might take a while)...
#   en_US.UTF-8... done
# Generation complete.

# solved the problem with the warning in Perl
# root@0267890844bb:~/webdev_study/220611_02_postgres# service postgresql status
# 12/main (port 5432): down

service postgresql start 
# root@0267890844bb:~/webdev_study/220611_02_postgres# service postgresql start
#  * Starting PostgreSQL 12 database server  

service postgresql status 
# root@0267890844bb:~/webdev_study/220611_02_postgres# service postgresql status
# 12/main (port 5432): online


