import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const NavSwitch = () => {
  return (
    <header className="sticky top-0 container mx-auto flex max-w-7xl justify-between py-4">
      {/*common logo  */}
      <Link href={"/"}>
        <Image
          src={"/temporary-logo.png"}
          alt="Logo"
          width={120}
          height={50}
        />
      </Link>

      {/* Mobile navbar  */}
      <div>
        {/* className="hidden lg:block" || add this when you want to hide mobile nav on large screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default NavSwitch;
