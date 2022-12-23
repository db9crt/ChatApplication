#!/bin/bash

echo 'run application_start.sh: ' >> /home/ubuntu/ChatApplication/deploy.log
echo 'pm2 stop server.js' >> /home/ubuntu/ChatApplication/deploy.log
echo 'pm2 start server.js' >> /home/ubuntu/ChatApplication/deploy.log
cd /home/ubuntu/ChatApplication >> /home/ubuntu/ChatApplication/deploy.log
pm2 stop server.js >> /home/ubuntu/ChatApplication/deploy.log
pm2 start server.js >>  /home/ubuntu/ChatApplication/deploy.log
pm2 save
