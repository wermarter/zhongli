import axios from "axios";

import config from "../config.js";

// TO DO BACK END AUTH
const backendAPI = axios.create({
  baseURL: config.backendURL,
});

const postPollResult = async (PSID, payload) => {
  const [pollID, choice] = payload.split("@");

  await backendAPI.post("/chatbot/poll", {
    PSID,
    pollID,
    choice: +choice,
  });
};

export { postPollResult };
