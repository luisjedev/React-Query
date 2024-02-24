import { FC } from "react";
import { FiCheckCircle, FiInfo, FiMessageSquare } from "react-icons/fi";
import { Issue, State } from "../interfaces";
import { useNavigate } from "react-router-dom";

type IssueProps = {
  issue: Issue;
};

export const IssueItem: FC<IssueProps> = ({ issue }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card issue mb-2"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
    >
      <div className="card-body d-flex align-items-center">
        {issue.state === State.Open ? (
          <FiInfo size={30} color="red" />
        ) : (
          <FiCheckCircle size={30} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            #{issue.number} opened 2 days ago by{" "}
            <span className="fw-bold">{issue.user.login}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
