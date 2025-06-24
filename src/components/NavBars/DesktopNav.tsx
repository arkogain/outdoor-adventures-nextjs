import Link from "next/link";
import { Button } from "../ui/button";

const DesktopNav = () => {
  return (
    <>
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
      <Link href={"#"}>
        <Button className="text-md cursor-pointer rounded-full bg-red-500 p-5 text-white hover:bg-red-600">
          Take Action
        </Button>
      </Link>
    </>
  );
};

export default DesktopNav;
