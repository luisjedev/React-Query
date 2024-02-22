import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
