Some of my programming investigations with bb8

# Requirements
	node - https://nodejs.org

# bb8 programing examples
	1. bb8-gmail-notificator : this script connects to your gmail account, checks if there is emails unread. If this condition is true, bb8 turns to red color, otherwise bb8 keeps green.

#to run this examples:
	node <FILE_EXAMPLE>.js

# Connect to bb8:
	When you have to define you bb8, in some websites you will see that you have to put the bb8 MAC, 
	 	bb8 = sphero("F3:F2:6D:55:71:09");
	but it doesn't work. Instead of, put the bb8 id. You will find it using this script, 
		node ./node_modules/noble/examples/advertisement-discovery.js
	This id is similar to : 22bb746f2ba075542d6f726568705327;

# Documentation
	https://www.npmjs.com/package/sphero
	http://sdk.sphero.com/community-apis/javascript-sdk/

