import { PlacementWithLogical, Tooltip } from "@chakra-ui/react";

type TooltipRightProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export const TooltipRight = (props: TooltipRightProps) => {
  return (
    <Tooltip
      label={props.label}
      placement="right"
      bg={"slategrey"}
      color="white"
      className={`px-2 pb-1 rounded-md ${props.className}`}
    >
      {props.children}
    </Tooltip>
  );
};
