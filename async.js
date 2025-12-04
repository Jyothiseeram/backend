function userdetails(id) {
    return new Promise((resolve, reject) => {
        console.log("fun1 called");
        resolve({ roll: "123" });
    });
}

function subject(roll) {
    return new Promise((resolve, reject) => {
        console.log("fun2 called");
        resolve({ subid: "en-1" });
    });
}

function marks(subid) {
    return new Promise((resolve, reject) => {
        console.log("fun3 called");
        resolve(`getting user marks with subid ${subid}`);
    });
}

async function getUserInfo() {
    try {
        const user = await userdetails("76");     
        const sub = await subject(user.roll);     
        const result = await marks(sub.subid);    
        console.log("123");
        console.log(result);
    } 
    catch (error) {
        console.log(error);
    }
}

getUserInfo();
