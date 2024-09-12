import axios from "axios";
import toast from "react-hot-toast";

export const serverFetch = async function (url, method) {
  try {
    const res = await axios({
      method,
      url,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const notify = function (message, option = "success") {
  const options = {
    style: {
      border: `1px solid ${option === "success" ? "#4ade80" : "#dc2626"}`,
      padding: "12px",
    },
  };

  toast[option](message, options);
};
