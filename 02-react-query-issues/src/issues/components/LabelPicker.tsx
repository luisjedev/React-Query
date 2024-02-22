import { FC } from "react";
import { useLabels } from "../hooks/index";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

type LabelPickerProps = {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
};

export const LabelPicker: FC<LabelPickerProps> = ({
  selectedLabels,
  onChange,
}) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) return <LoadingIcon />;

  if (labelsQuery.isError) {
    return <h2>{labelsQuery.error.message}</h2>;
  }

  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabels.includes(label.name) ? "label-active" : ""
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
