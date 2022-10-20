Environment File Variables  📌:
AUTH0_SECRET= 
AUTH0_BASE_URL= http://localhost:3000 
AUTH0_ISSUER_BASE_URL="https://"
AUTH0_CLIENT_ID= 
AUTH0_CLIENT_SECRET= 
 
Command to get AUTH0_SECRET 📌:
node -e "console.log(crypto.randomBytes(32).toString('hex'))"