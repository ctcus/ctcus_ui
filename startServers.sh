#!/bin/bash

# Run Node.js server without logging
nohup node server.js > /dev/null 2>&1 &  
echo "Node.js server started with PID $!"

# Run HTTP server on port 8080 without logging
nohup python3 -m http.server 8080 > /dev/null 2>&1 &  
echo "HTTP server started with PID $!"

# Save PIDs for reference
echo $! > server_pids.txt