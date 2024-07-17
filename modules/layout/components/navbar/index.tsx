import { headers } from "next/headers";
import Image from "next/image";
import { NAVBAR_LINKS } from "../../../../const/navbar";
import { clx } from "../../../../utils/clx";

function Navbar() {
  const pathname = headers().get("x-current-path");

  return (
    <div className="w-full z-50 bg-white content-container sticky top-0 py-4 border-b border-gray-500 flex items-end gap-6">
      <a href="/">
        <Image
          width={83}
          height={33}
          src={"/images/picky.png"}
          alt="Picky logo"
        />
      </a>
      {NAVBAR_LINKS.map(({ label, link }, index) => (
        <a
          className={clx("font-semibold hover-underline-animation", {
            "text-pink": pathname === link,
          })}
          key={index}
          href={link}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export default Navbar;
