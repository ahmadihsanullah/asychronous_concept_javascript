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

async function User(){
    const {token} = await login("ahmad");
    const {apiKey} = await getUser(token);
    const {pictures} = await getPictures(apiKey);
    console.log(
        `
        token: ${token}
        apiKey: ${apiKey}
        pictures: ${pictures}
        `
    );
}

User();
