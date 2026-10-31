import Image from "next/image";
import content from "@/data/content.json";
import NavLink from "../NavLink";
import CustomButton from "../CustomButton";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-20 py-5">
      <Image
        src={content.navigation.logo}
        alt={content.navigation.logoAlt}
        width={178}
        height={26}
      />
      <div className="flex gap-10">
        {content.navigation.links.map((link) => (
          <NavLink key={link.label} href={link.href} label={link.label} />
        ))}
      </div>
      <div>
        <CustomButton variant="contained">
          {content.navigation.contact.label}
        </CustomButton>
      </div>
    </div>
  );
}

export default Navbar;