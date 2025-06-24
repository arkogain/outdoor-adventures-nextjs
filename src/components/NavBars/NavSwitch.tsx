import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavSwitch = () => {
  return (
    <header className="sticky top-0 container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      {/*common logo  */}
      <Link href={"/"}>
        <Image
          src={"/temporary-logo.png"}
          alt="Logo"
          width={120}
          height={50}
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
