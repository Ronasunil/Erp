import axios from "axios";

export const serverFetch = async function (url, options) {
  try {
    const res = await axios(url, options);
    return res.data;
  } catch (err) {
    console.log(err.message, "message");
    return err.response.data;
  }
};
