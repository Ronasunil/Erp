import toast from "react-hot-toast";

const notify = function (message, option) {
  const options = {
    style: {
      border: `1px solid ${option === "success" ? "#4ade80" : "#dc2626"}`,
      padding: "12px",
    },
  };

  toast[option](message, options);
};

export { notify };
