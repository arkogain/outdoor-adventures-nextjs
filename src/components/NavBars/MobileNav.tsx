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
        <SheetTrigger className="bg-radical-red p-2">
          {/* triger icon  */}
          <Menu
            className="text-white"
            size={24}
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex justify-center border-b-2 pb-4">
              <Link href={"/"}>
                <Image
                  src={"/temporary-logo.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-8 w-30"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="grid place-items-center gap-4 font-semibold">
            <Link
              href={"/"}
              className="hover:text-red-400">
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-red-400">
              About
            </Link>
            <Link
              href={"/services"}
              className="hover:text-red-400">
              Services
            </Link>
            <Link
              href={"/projects"}
              className="hover:text-red-400">
              Projects
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-red-400">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
