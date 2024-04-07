//ASTA
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "SESSION_04_00_04_07_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlSQkRVc3ZjL1k4dGFCS2FLZ0tzWXh4MnRpM2pYbWVNVC9HR3Q5SVNsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2pLbGpMM214T2RQamJqZ0d6WkI2OE1SNkZVaVVXV1kxYy91RnpFYXdXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTU1CK2tHS3laRVFVQm1kUk5tTTdwai9ySDFDZzNOaHNraEp3Y0VRWlhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1cnhyVW5KZWdxQytBdWhaaFVZc2RWMDhqVjRMUnA2dmlqd2NaT1ZrN0FJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldObDcra1JMelRvY1BIYldlVlRxcFpDbHVRSHg5NERsVGphYXB0WUc2WFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp2VFllL0xaMDY2bXVuYm4zOWRLbjByTGR2dTZRVU5mTXZNMithRDZBR1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURVeXpvOWVpbUZ0MVBTYjIzZmZwZW1wbjlNK3RiU015b0prdUlkbm5Wbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHVHQURIQWYveElUZXlRWEI0TXlBVWVzbDVTZmsxQTUrRVJrOFNVT0N5Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt1SFR2bWMvbHBQY0pJNFBiV3VERm5LTDRVNmgzcjVOZWk0Z1R6Q2dJV1FqdWlwR1ZBa0FzTlZnTnAzZldnM3Bha09vN2p2K1BacHYzd2VhODBHb0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IlloazdocVdNbHZ3M3c2ZzB2aEhFcklZZWdLNmJZazhoM0d0U0dpbVVtQ2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3MDM0MTY3MTIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgzRTIwMzA5RTRFQjI1N0IxMjMwNkZEOTc0ODJBRjIxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTI0NjI0NDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNzAzNDE2NzEyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRDkwNTVFOEJGMDZGM0JFRUMyNzJCNjE2Mzk1QkFDRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzEyNDYyNDQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJycm9GMlBQd1NJS0c0eUhZWDBBVVl3IiwicGhvbmVJZCI6IjhmYTlhYWZlLWUxNDAtNDg0Yy1hZjFlLTUxYzhmNWU1MjFhYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQ2xjblYrblFMQnJpaXdmMXhHZ1VxOEhXVUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnRYM3o0aU1ZK0pjakpEZkZLeWNGcFY3SnlRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE4OUszRzdFIiwibWUiOnsiaWQiOiI5MTcwMzQxNjcxMjM6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZut8J2RiPCdm6jwnZul8J2brfCdm63wnZuv8J2QtyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnJsLzc0QkVPYTB5TEFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN0UrZ0hneVUxTWZIVGYwUmo5cnZXdS9PSEx5VXlhRHNSR2VWOTNKUHBDOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMU5mYXdvQUFpdkNuOU5WUWVZOVp3NXhVN3J1QUdYazBmMFNvSWxvR1BGUlpIaGFGcGNEQS9CMWs2TFJvdU90cDVZQ3BYcWR1WWYvcFRmR1R1dlJ1RFE9PSIsImRldmljZVNpZ25hdHVyZSI6InFOd25ERTJJZE9KMUo2cmMzOG9UZHhENlptbEkzRWZWMUhlN0l1b09tYk4vYU9CM1RMWnFSOXpKUnB6VWR6S2hGamg2ZFMzMFdhaStqcGpmQWM4T0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDM0MTY3MTIzOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXhQb0I0TWxOVEh4MDM5RVkvYTcxcnZ6aHk4bE1tZzdFUm5sZmR5VDZRdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMjQ2MjQ0MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDcXQifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "7034167123";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "7034167123";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/f1ae2cd1d9d934d9c2465.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/f1ae2cd1d9d934d9c2465.jpg,https://telegra.ph/file/87f4f70bad910021354fd.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©𝐂𝚫𝚻 𝐒𝚸𝐘`",
  author: process.env.PACK_AUTHER || "𝛭𝑈𝛨𝛥𝛭𝛭𝛯𝐷",
  packname: process.env.PACK_NAME || "𝐂𝚫𝚻 𝐒𝚸𝐘",
  botname: process.env.BOT_NAME || "𝐂𝚫𝚻 𝐒𝚸𝐘",
  ownername: process.env.OWNER_NAME || "𝛭𝑈𝛨𝛥𝛭𝛭𝛯𝐷",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "DJwc34NaWmhXmDxEeh6YUEmm",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "3e57046161ccf9ac1f4b9e03828a5fe9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2348039607375";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://gnime-v2.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
