# https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/31673380#content

# https://docs.google.com/document/u/1/d/e/2PACX-1vTSgoWcVvuMW4Aa78MyqeK0_ZRl_MaV7rS-tdhya3jlPbSSbxczQFCohrGf87T4F7tJKXwTjT2z_QSq/pub




DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
# info: Executing dfx install script, commit: 9fce71de0f92c90b4079c37d13771ee36b481d70
# info: Version found: 0.9.3
# info: Creating uninstall script in ~/.cache/dfinity
# info: uninstall path=/root/.cache/dfinity/uninstall.sh
# info: Checking for latest release...
#   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
#                                  Dload  Upload   Total   Spent    Left  Speed
#   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
#   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
# 100  298M  100  298M    0     0  11.4M      0  0:00:26  0:00:26 --:--:-- 11.7M
# Will install in: /usr/local/bin
# info: Installed /usr/local/bin/dfx


# Install the Motoko language extension in VSCode (make sure it’s from the Dfinity team, or just use the link below).
# https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko


dfx --version
# dfx 0.9.3

# create a new project
cd /root/webdev_study/blockchain/ic-projects/220905
dfx new hello
# root@0267890844bb:~/webdev_study/blockchain/ic-projects/220905# dfx new hello
# Fetching manifest https://sdk.dfinity.org/manifest.json
# You seem to be running an outdated version of dfx.

# You are strongly encouraged to upgrade by running 'dfx upgrade'!
# Creating new project "hello"...
# CREATE       hello/dfx.json (481B)...
# CREATE       hello/README.md (2.25KiB)...
# CREATE       hello/.gitignore (165B)...
# CREATE       hello/src/hello_assets/assets/sample-asset.txt (24B)...
# CREATE       hello/src/hello/main.mo (99B)...
# npm notice 
# npm notice New minor version of npm available! 8.3.1 -> 8.19.1
# npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.19.1
# npm notice Run npm install -g npm@8.19.1 to update!
# npm notice 
# CREATE       hello/package.json (1.14KiB)...
# CREATE       hello/webpack.config.js (3.52KiB)...
# CREATE       hello/src/hello_assets/assets/main.css (537B)...
# CREATE       hello/src/hello_assets/assets/logo.png (24.80KiB)...
# CREATE       hello/src/hello_assets/assets/favicon.ico (15.04KiB)...
# CREATE       hello/src/hello_assets/src/index.html (625B)...
# CREATE       hello/src/hello_assets/src/index.js (526B)...
# ⠲ Installing node dependencies...

# added 424 packages, and audited 425 packages in 1m

# 87 packages are looking for funding
#   run `npm fund` for details

#   Done.
# Creating git repository...

# ===============================================================================
#         Welcome to the internet computer developer community!
#                         You're using dfx 0.9.3

#             ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄                ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄       
#           ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄    
#         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄  
#        ▄▄▄▄▄▄▄▄▄▄▀▀▀▀▀▄▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄▄▀▀▀▀▀▀▄▄▄▄▄▄▄▄▄▄ 
#       ▄▄▄▄▄▄▄▄▀         ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀         ▀▄▄▄▄▄▄▄▄▄
#      ▄▄▄▄▄▄▄▄▀            ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀             ▄▄▄▄▄▄▄▄
#      ▄▄▄▄▄▄▄▄               ▀▄▄▄▄▄▄▄▄▄▄▄▄▀                ▄▄▄▄▄▄▄
#      ▄▄▄▄▄▄▄▄                ▄▄▄▄▄▄▄▄▄▄▄▄                 ▄▄▄▄▄▄▄
#      ▄▄▄▄▄▄▄▄               ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄              ▄▄▄▄▄▄▄▄
#       ▄▄▄▄▄▄▄▄           ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄          ▄▄▄▄▄▄▄▄▀
#       ▀▄▄▄▄▄▄▄▄▄▄     ▄▄▄▄▄▄▄▄▄▄▄▄▀ ▀▄▄▄▄▄▄▄▄▄▄▄▄    ▄▄▄▄▄▄▄▄▄▄▄ 
#        ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀     ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀  
#          ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀         ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄    
#            ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀▀             ▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀      
#               ▀▀▀▀▀▀▀▀▀▀▀                    ▀▀▀▀▀▀▀▀▀▀▀         
     


# To learn more before you start coding, see the documentation available online:

# - Quick Start: https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html
# - SDK Developer Tools: https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html
# - Motoko Language Guide: https://sdk.dfinity.org/docs/language-guide/motoko.html
# - Motoko Quick Reference: https://sdk.dfinity.org/docs/language-guide/language-manual.html

# If you want to work on programs right away, try the following commands to get started:

#     cd hello
#     dfx help
#     dfx new --help

# ===============================================================================


# how to start a project in dfx
# inside the "hello" project
dfx start
# Sep 05 16:34:12.951 INFO Starting server. Listening on http://127.0.0.1:8000/

# inside the "hello" project
# in another terminal:
dfx deploy
# Committing batch.
# Deployed canisters.
# URLs:
#   Frontend:
#     hello_assets: http://127.0.0.1:8000/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai
#   Candid:
#     hello: http://127.0.0.1:8000/?canisterId=rkp4c-7iaaa-aaaaa-aaaca-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai


# after finished we can run 
npm start

# ===============================================
# https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/31673308#overview
# new project
dfx new dbank
# root@0267890844bb:~/webdev_study/blockchain/ic-projects/220905# dfx new dbank
# Fetching manifest https://sdk.dfinity.org/manifest.json
# You seem to be running an outdated version of dfx.

# You are strongly encouraged to upgrade by running 'dfx upgrade'!
# Creating new project "dbank"...
# CREATE       dbank/dfx.json (481B)...
# CREATE       dbank/README.md (2.25KiB)...
# CREATE       dbank/.gitignore (165B)...
# CREATE       dbank/src/dbank_assets/assets/sample-asset.txt (24B)...
# CREATE       dbank/src/dbank/main.mo (99B)...
# CREATE       dbank/package.json (1.14KiB)...
# CREATE       dbank/webpack.config.js (3.52KiB)...
# CREATE       dbank/src/dbank_assets/assets/main.css (537B)...
# CREATE       dbank/src/dbank_assets/assets/logo.png (24.80KiB)...
# CREATE       dbank/src/dbank_assets/assets/favicon.ico (15.04KiB)...
# CREATE       dbank/src/dbank_assets/src/index.html (625B)...
# CREATE       dbank/src/dbank_assets/src/index.js (526B)...
# ⠠ Installing node dependencies...

cd dbank

# in one terminal:
dfx start

# in another terminal
# go inside the dfx project
dfx deploy
# this will run and show the reminal
npm start


# how to call a function that is inside a canister
dfx canister call hello greet '{"everyone"}'
dfx canister call <project name> <func name> <arguments>
 
dfx canister call dbank topUp 

# remember to deploy the canister first before running the command
# above

# dfinity has an UI for easy calling methods from the canister
# it is called CandidUI

dfx canister id __Candid_UI
# root@0267890844bb:~/webdev_study/blockchain/ic-projects/220904/dbank# dfx canister id __Candid_UI
# rkp4c-7iaaa-aaaaa-aaaca-cai

http://localhost:8000/?canisterId=rkp4c-7iaaa-aaaaa-aaaca-cai

# to get the id of the canister of interest
dfx canister id dbank
# root@0267890844bb:~/webdev_study/blockchain/ic-projects/220905/dbank# dfx canister id dbank
# ryjl3-tyaaa-aaaaa-aaaba-cai


