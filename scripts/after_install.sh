#!/bin/bash
echo 'run after_install.sh: ' >> /home/ubuntu/ChatApplication/deploy.log

cd /home/ubuntu/ChatApplication >> /home/ubuntu/ChatApplication/deploy.log

echo 'npm install' >> /home/ubuntu/ChatApplication/deploy.log 
npm install >> /home/ubuntu/ChatApplication/deploy.log
