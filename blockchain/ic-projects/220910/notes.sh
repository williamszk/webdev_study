
# https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/31673308#overview

# use the dfx SDK to create a new project
dfx new dbank

cd dbank

# to run the canister
# (in one terminal)
dfx start

# root@0267890844bb:~/webdev_study/blockchain/ic-projects/220910/dbank# dfx start
# binding to: 127.0.0.1:45073
# Sep 10 21:30:01.114 INFO ic-starter. Configuration: ValidatedConfig 
    # { replica_path: Some("/root/.cache/dfinity/versions/0.9.3/replica"), 
    # replica_version: "0.8.0", log_level: Warning, cargo_bin: "cargo", 
    # cargo_opts: "", state_dir: "/root/webdev_study/blockchain/ic-projects/
    # 220910/dbank/.dfx/state/replicated_state", http_listen_addr: 127.0.0.1:0, 
    # http_port_file: Some("/root/webdev_study/blockchain/ic-projects/220910/dbank/
    # .dfx/replica-configuration/replica-1.port"), metrics_addr: None, 
    # provisional_whitelist: Some(All), artifact_pool_dir: "/root/webdev_study/
    # blockchain/ic-projects/220910/dbank/.dfx/state/replicated_state/node-100/
    # ic_consensus_pool", crypto_root: "/root/webdev_study/blockchain/ic-projects/
    # 220910/dbank/.dfx/state/replicated_state/node-100/crypto", state_manager_root: 
    # "/root/webdev_study/blockchain/ic-projects/220910/dbank/.dfx/state/replicated_state/
    # node-100/state", registry_local_store_path: "/root/webdev_study/blockchain/
    # ic-projects/220910/dbank/.dfx/state/replicated_state/ic_registry_local_store", 
    # unit_delay: None, initial_notary_delay: Some(600ms), dkg_interval_length: None, 
    # detect_consensus_starvation: None, consensus_pool_backend: Some("rocksdb"), subnet_features: 
    # SubnetFeatures { ecdsa_signatures: false, canister_sandboxing: false, http_requests: false, 
    # bitcoin_testnet_feature: None }, subnet_type: System, _state_dir_holder: None }, Application: starter
# Sep 10 21:30:01.114 INFO Initialize replica configuration "/root/webdev_study/blockchain/ic-projects/
    # 220910/dbank/.dfx/state/replicated_state/ic.json5", Application: starter
# Sep 10 21:30:04.138 INFO Executing "/root/.cache/dfinity/versions/0.9.3/replica" "--replica-version" 
    # "0.8.0" "--config-file" "/root/webdev_study/blockchain/ic-projects/220910/dbank/.dfx/state/
    # replicated_state/ic.json5", Application: starter
# Sep 10 21:30:39.910 WARN s:pqstc-2dkm7-pcns7-ky2kn-ct74v-wq7zc-m5ea7-dqiqy-rm3rq-u3lk7-iqe/
    # n:y5dno-tbzs4-ejbpp-36cnh-radyh-32vj6-ryllr-7ukwv-pe5tm-rcpld-fae/ic_p2p/advert_utils 
    # AdvertRequestBuilder::new(): advert_config = Some(GossipAdvertConfig { best_effort_percentage: 20 })
# version: 0.8.1
#  Sep 10 18:30:40.257 INFO Log Level: INFO
#  Sep 10 18:30:40.257 INFO Starting server. Listening on http://127.0.0.1:8000/

# when something like this appears we are ready
# then open another terminal

dfx deploy

# on the original terminal the print will appear
# [Canister rrkah-fqaaa-aaaaa-aaaaq-cai] Hello

# we call functions from the canister
dfx canister call canister_name function_name '("argument to func")'

dfx canister call dbank topUp
# remeber that we can only call public functions


# dfx deploy acts like a compilation part 
# and dfx start acts like spining up the server

# CandidUI is like a postman/thunder client to call functions in the canister

# write this into the terminal
dfx canister id __Candid_UI
# to get a canister id
# r7inp-6aaaa-aaaaa-aaabq-cai

# then we need to go to:
# http://localhost:8000/?canisterId=<canister id>


# http://localhost:8000/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai


# inside the Candid UI page it will ask for another canister id
# which can be obtained running:
dfx canister id dbank
# rrkah-fqaaa-aaaaa-aaaaq-cai















