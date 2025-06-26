import Link from "next/link";
import { Button } from "../ui/button";

const DesktopNav = () => {
  return (
    <>
      <Link
        href={"/"}
        className="text-white hover:text-red-400">
        Home
      </Link>
      <Link
        href={"/about"}
        className="text-white hover:text-red-400">
        About
      </Link>
      <Link
        href={"/services"}
        className="text-white hover:text-red-400">
        Services
      </Link>
      <Link
        href={"/projects"}
        className="text-white hover:text-red-400">
        Projects
      </Link>
      <Link
        href={"/contact"}
        className="text-white hover:text-red-400">
        Contact
      </Link>
      <Link href={"#"}>
        <Button className="text-md cursor-pointer rounded-full bg-red-500 p-5 text-white hover:bg-red-600">
          Take Action
        </Button>
      </Link>
    </>
  );
};

export default DesktopNav;
