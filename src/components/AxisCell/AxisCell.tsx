import React, { FunctionComponent, ReactNode } from "react";
import classes from "./AxisCell.module.css";

export type AxisCellProps = React.HTMLAttributes<HTMLTableHeaderCellElement> & {
  children?: ReactNode;
};

const AxisCell: FunctionComponent<AxisCellProps> = (props) => {
  const { children, ...rest } = props;

  return <th {...rest} className={classes.AxisCell}>{children}</th>;
};

export default AxisCell;
