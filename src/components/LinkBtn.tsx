import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export type LinkBtnPropsType = {
  children: ReactNode;
  className: string;
};

const LinkBtn = ({ children, className, ...props }: LinkBtnPropsType) => {
  return (
    <Link
      href={"#"}
      className={cn(
        `bg-radical-red rounded-full px-6 py-2 font-bold`,
        className,
      )}
      {...props}>
      {children}
    </Link>
  );
};

export default LinkBtn;
