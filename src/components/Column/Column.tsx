import React, { FunctionComponent, ReactNode } from "react";
import classes from "./Column.module.css";

export type ColumnProps = React.HTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode;
};

const Column: FunctionComponent<ColumnProps> = (props) => {
  const { children, ...rest } = props;

  return <td {...rest} className={classes.Column}>{children}</td>;
};

export default Column;
