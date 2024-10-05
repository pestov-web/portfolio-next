import React from "react";
import { SVGProps } from "react";

export function Icones(props: SVGProps<SVGSVGElement>, name: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {props.children}
    </svg>
  );
}
