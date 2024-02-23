import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
