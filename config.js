const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=G6AmxKAC#RNRnn6uOtlqT1JJKtPJBKKBboMzNCr_XME64Dn_Bfcs",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
