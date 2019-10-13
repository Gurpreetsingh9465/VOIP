# VOIP
Encrypted VOIP using hybrid cryptosystem, node.js and react.js
# installation
1. install mongodb.
2. install node.js.
3. `git clone https://github.com/Gurpreetsingh9465/VOIP.git`
4. `cd server`
5. `npm install`
6. `node app.js`
7. open new terminal `cd client`
8. `npm install`
9. open ssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privateKey.key -out certificate.crt
10. copy both private key and crt to server folder
11. Change API and Client url on file
	`/client/.env`
	`/server/.end`
	`/client/package.json` (change proxy)
12. `cd server && npm start`
13. `cd client && npm start`
