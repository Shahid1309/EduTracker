import crypto from "crypto";

const SECRET = "ET";

export function random() {
  return crypto.randomBytes(128).toString("base64");
}

export function authentication(salt, password) {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
}


// const salt=random();
// const pass=authentication(salt,'test')
// console.log(salt)
// console.log('here')
// console.log(pass)