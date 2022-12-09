
mkdir shareme_backend
mkdir shareme_frontend

# go to:
# https://sanity.io/javascriptmastery

cd shareme_backend

npm install -g @sanity/cli
npm create sanity@latest -- --coupon javascriptmastery2022

sanity start

sanity manage
