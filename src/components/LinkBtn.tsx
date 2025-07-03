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
        `bg-radical-red font-secondary flex items-center gap-2 rounded-full px-[40px] py-[16px] text-[14px] font-bold text-white`,
        className,
      )}
      {...props}>
      {children}
    </Link>
  );
};

export default LinkBtn;
