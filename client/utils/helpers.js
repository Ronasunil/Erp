import { cookies } from "next/headers";

export const setCookie = function (cookieValue) {
  // cookie exp
  const tenDayInMilliSec = 10 * 24 * 60 * 60 * 1000;
  const expireDate = new Date(Date.now() + tenDayInMilliSec);

  cookies().set("session", cookieValue, {
    expires: expireDate,
    httpOnly: false,
  });
};
