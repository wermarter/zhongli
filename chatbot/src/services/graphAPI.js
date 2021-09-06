import axios from "axios";

import config from "../config.js";

const sendAPI = axios.create({
  baseURL: `${config.apiUrl}/me/messages`,
  params: {
    access_token: config.pageAccesToken,
  },
});

const markSeen = (PSID) => {
  // Construct the message body
  const requestBody = {
    recipient: {
      id: PSID,
    },
    sender_action: "mark_seen",
  };

  sendAPI.post("/", requestBody);
};

const sendMessage = (PSID, response, tag, delay = 0) => {
  // Check if there is delay in the response
  if ("delay" in response) {
    delay = response["delay"];
    delete response["delay"];
  }

  // Construct the message body
  const requestBody = {
    recipient: {
      id: PSID,
    },
    message: response,
  };

  if (tag) {
    requestBody.messaging_type = "MESSAGE_TAG";
    requestBody.tag = tag;
  }

  // Check if there is persona id in the response
  if ("persona_id" in response) {
    const persona_id = response["persona_id"];
    delete response["persona_id"];

    requestBody = {
      recipient: {
        id: PSID,
      },
      message: response,
      persona_id: persona_id,
    };
  }

  setTimeout(() => {
    sendAPI.post("/", requestBody);
  }, delay);
};

const genQuickReply = (text, quickReplies) => {
  let response = {
    text: text,
    quick_replies: [],
  };

  for (const quickReply of quickReplies) {
    response["quick_replies"].push({
      content_type: "text",
      title: quickReply["title"],
      payload: quickReply["payload"],
    });
  }

  return response;
};

const genText = (text) => {
  const response = {
    text: text,
  };

  return response;
};

export { markSeen, sendMessage, genText, genQuickReply };
