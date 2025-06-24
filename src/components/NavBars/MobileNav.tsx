import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="bg-red-400 p-2">
          {/* triger icon  */}
          <Menu
            className="text-white"
            size={24}
          />
        </SheetTrigger>
        <SheetContent className="">
          <SheetHeader>
            <SheetTitle className="flex justify-center border-b-2 pb-4">
              <Link href={"/"}>
                <Image
                  src={"/temporary-logo.png"}
                  alt="Logo"
                  width={100}
                  height={50}
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="grid w-full place-items-center gap-4 font-semibold">
            <Link
              href={"/"}
              className="hover:text-blue-500 dark:hover:text-fuchsia-500">
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-blue-500 dark:hover:text-fuchsia-500">
              About
            </Link>
            <Link
              href={"/services"}
              className="hover:text-blue-500 dark:hover:text-fuchsia-500">
              Services
            </Link>
            <Link
              href={"/projects"}
              className="hover:text-blue-500 dark:hover:text-fuchsia-500">
              Projects
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-blue-500 dark:hover:text-fuchsia-500">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
