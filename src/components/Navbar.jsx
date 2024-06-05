import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={18} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {/* {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              <a href="https://www.apple.com/store">{nav}</a>
            </div>
          ))} */}

          <a
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            href="https://www.apple.com/store"
          >
            {navLists[0]}
          </a>
          <a
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            href="https://www.apple.com/mac/"
          >
            {navLists[1]}
          </a>
          <a
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            href="https://www.apple.com/shop/buy-iphone"
          >
            {navLists[2]}
          </a>
          <a
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            href="https://support.apple.com/"
          >
            {navLists[3]}
          </a>
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
