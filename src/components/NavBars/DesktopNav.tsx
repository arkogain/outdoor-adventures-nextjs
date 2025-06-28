import Link from "next/link";
import LinkBtn from "../LinkBtn";

const DesktopNav = () => {
  return (
    <>
      <Link
        href={"/"}
        className="hover:text-radical-red text-white">
        Home
      </Link>
      <Link
        href={"/about"}
        className="hover:text-radical-red text-white">
        About
      </Link>
      <Link
        href={"/services"}
        className="hover:text-radical-red text-white">
        Services
      </Link>
      <Link
        href={"/projects"}
        className="hover:text-radical-red text-white">
        Projects
      </Link>
      <Link
        href={"/contact"}
        className="hover:text-radical-red text-white">
        Contact
      </Link>

      <LinkBtn className="text-background">TAKE ACTION</LinkBtn>
    </>
  );
};

export default DesktopNav;
