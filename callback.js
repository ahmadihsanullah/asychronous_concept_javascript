const token = ~~[Math.random() * 12345678];
const pictures = ['1.jpg','2.jpg','3.jpg'];

function login(username, callback){
    console.log("processing, memvalidasi data....");
    setTimeout(() => {
       callback({token, username})
    }, 200);
}

function getUser(token,callback){
    console.log("processing, api key now...")
    if(token) 
    setTimeout(() => {
        callback({apiKey: "xKey123"});
    }, 200);
}

function getPictures(apiKey, callback){
    console.log("processing, get pictures");
    if(apiKey)
    setTimeout(() => {
        callback(pictures)
    }, 200);
}

login("ahmad", function(response){
    const {token} = response;
    getUser(token, function(response){
        const {apiKey} = response;
        getPictures(apiKey, function(response){
            const {pic} = response;
            console.log(pictures);
        })
        console.log(apiKey);
    })
    console.log(token);
})