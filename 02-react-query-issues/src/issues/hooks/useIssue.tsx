import { useQuery } from "@tanstack/react-query";
import { Issue } from "../interfaces";
import { githubApi } from "../../api/githubApi";

async function getIssueInfo(issueNumber: number): Promise<Issue> {
  const { data } = await githubApi.get(`/issues/${issueNumber}`);
  return data;
}

export function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssueInfo(issueNumber),
  });

  return issueQuery;
}
