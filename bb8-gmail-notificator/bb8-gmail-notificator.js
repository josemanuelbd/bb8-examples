// Config
var email   = "<youremail@gmail.com>";
var pass    = "<yourpassword>";
var bb8_id  = "<yourbb8id>";
var time_between_request = 5000; // 1000 = 1 second

// Init BB8
var sphero = require("sphero");
var bb8 = sphero(bb8_id); 

// Init Gmail connection
var inbox = require("inbox");
var client = inbox.createConnection(false, "imap.gmail.com", {
    secureConnection: true,
    auth:{
        user: email,
        pass: pass
    }
});
client.connect();
 
console.log("init");

bb8.connect(function() {
    
    console.log("connected");
    bb8.color("blue");

    // Each time_between_request times
    setInterval(function() { 
        client.openMailbox("INBOX", function(error, info){
            if(error) throw error;
        });

        query = {unseen: true};
        client.search(query, function(err,arr){
            if(arr.length > 0){
                bb8.color("red");
                console.log("BB8 says: You have "+arr.length+" emails unread");
            }
            else{
                bb8.color("green");
                console.log("BB8 says: Clear!");
            }
        });
    }, time_between_request);
});