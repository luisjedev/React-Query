import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
