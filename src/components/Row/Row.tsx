import React, { FunctionComponent, ReactNode } from "react";

export type RowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  children: ReactNode;
};

const Row: FunctionComponent<RowProps> = (props) => {
  const { children, ...rest } = props;

  return <tr {...rest}>{children}</tr>;
};

export default Row;
