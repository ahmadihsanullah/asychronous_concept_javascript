const token = ~~[Math.random() * 12345678];
const pictures = ['1.jpg','2.jpg','3.jpg'];

function login(username){
    console.log("processing, memvalidasi data....");
    return new Promise((success, failed)=>{
        setTimeout(()=>{
            if(username != "ahmad") failed("username is not found!....")
            success({token})
        }, 200)
    })
}

function getUser(token){
    console.log("processing get api key")
    return new Promise((success, failed)=>{
        setTimeout(() => {
            if(!token) failed("token is empty!....")
                success({apiKey: "xKey123"})
        }, 200);
    })
}

function getPictures(apiKey){
    return new Promise((success, failde)=>{
        setTimeout(() => {
            if(!apiKey) failed("api key is empty!....")
            success({pictures: pictures})
        }, 200);
    })
}

const user = login("ahmad");
user.then((response)=>{
    const {token} = response;
    console.log(token);
    getUser(token).then((response)=>{
        const apiKey = response;
        console.log(apiKey);
        getPictures(apiKey).then((response)=>{
            const pictures = response;
            console.log(pictures);
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}).catch(err=>console.log(err))
