
# install dfx
DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

dfx --version


# install motoko vscode extension in vscode
# motoko from dfinity foundation

# internet computer projects
# ic-projects

dfx new hello


cd hello
dfx start

# in another terminal
cd 220605_01_internet_computer
cd hello
dfx deploy

# then we need to run
npm start
# problem with:
# sh: 1: rsync: not found
# maybe this is due to rsync not being installed in the container
apt update
apt install -y rsync

# this solved the problem
















