export const encryptCookie = function (str = "") {
  const decoded = Buffer.from(JSON.stringify({ token })).toString("base64");
  return decoded;
};

export const decryptCookie = function (base64 = "") {
  const encString = Buffer.from(base64, "base64").toString("utf-8");
  const decoded = JSON.parse(encString);

  return decoded;
};
