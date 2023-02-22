module example.com/crypto

go 1.13

replace example.com/crypto/client => ./client

replace example.com/crypto/model => ./model

require example.com/crypto/client v0.0.0-00010101000000-000000000000
