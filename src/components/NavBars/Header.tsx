import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavSwitch = () => {
  return (
    <header className="absolute top-0 left-1/2 z-10 mx-auto flex w-full max-w-7xl -translate-x-1/2 justify-between px-6 py-4">
      {/*common logo  */}
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={120}
          height={50}
          className="h-auto w-auto"
        />
      </Link>
      {/* Desktop Navbar  */}
      <div className="text-md hidden items-center gap-6 font-semibold lg:flex">
        <DesktopNav />
      </div>

      {/* Mobile navbar  */}
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default NavSwitch;
