all:
	node mongoCreate.js
	node mongoText.js
	node server.js