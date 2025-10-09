import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { MENULINKS } from "../../constants";

const Menu = ({
  setmenuVisible,
}: {
  setmenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <section
      className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
      style={{ visibility: "hidden" }}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
          <ul
            className="list-none py-4 px-0 m-0 block max-h-screen"
            role="menu"
          >
            {MENULINKS.map((el) => {
              const isHashLink = el.href.startsWith("#");
              const handleClick = () => setmenuVisible(false);
              const className =
                "link relative inline font-bold text-5xl duration-300 hover:no-underline";

              return (
              <li
                className="p-0 m-6 text-2xl block"
                key={el.name}
                role="menuitem"
              >
                {isHashLink ? (
                  <a href={el.href} className={className} onClick={handleClick}>
                    {el.name}
                  </a>
                ) : (
                  <Link
                    href={el.href}
                    className={className}
                    onClick={handleClick}
                    rel={el.external ? "noreferrer noopener" : undefined}
                    target={el.external ? "_blank" : undefined}
                  >
                    {el.name}
                  </Link>
                )}
              </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
