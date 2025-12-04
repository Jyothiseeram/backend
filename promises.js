// it overcame the callback hell

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

userdetails("76")
    .then((result) => {
        return subject(result.roll);
    })
    .then((result) => {
        return marks(result.subid);
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
