#!/bin/bash
echo 'run after_install.sh: ' >> /home/ubuntu/ChatApplication/deploy.log

cd /home/ubuntu/ChatApplication >> /home/ubuntu/ChatApplication/deploy.log

echo 'npm install' >> /home/ubuntu/ChatApplication/deploy.log 
npm install >> /home/ubuntu/ChatApplication/deploy.log
export NODE_OPTIONS=--openssl-legacy-provider >> /home/ubuntu/ChatApplication/deploy.log
cd client >> /home/ubuntu/ChatApplication/deploy.log
npm run build >> /home/ubuntu/ChatApplication/deploy.log
rm -rf /var/www/msgme.com/* >> /home/ubuntu/ChatApplication/deploy.log
cp -r build/*  /var/www/msgme.com/  >> /home/ubuntu/ChatApplication/deploy.log
