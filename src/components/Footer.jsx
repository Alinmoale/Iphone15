import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <a
              className="underline text-blue cursor-pointer"
              href="https://www.apple.com/retail/"
            >
              Find an Apple Store{" "}
            </a>
            or{" "}
            <a
              className="underline text-blue cursor-pointer"
              href="https://locate.apple.com/"
            >
              other retailer{" "}
            </a>{" "}
            near you.
          </p>

          <p className="font-semibold text-gray text-xs">
            Or call 000800-040-1986
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Moale Alin. All rights reserved.
          </p>
          <div className="flex">
            {/* {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs ">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))} */}
            <p className="font-semibold text-gray text-xs ">
              <a
                href="https://www.apple.com/legal/privacy/"
                className="hover:text-white cursor-pointer hover:underline "
              >
                {footerLinks[0]}
              </a>
              <span className="mx-2"> | </span>
            </p>
            <p className="font-semibold text-gray text-xs ">
              <a
                href="https://www.apple.com/legal/internet-services/terms/site.html"
                className="hover:text-white cursor-pointer hover:underline "
              >
                {footerLinks[1]}
              </a>
              <span className="mx-2"> | </span>
            </p>
            <p className="font-semibold text-gray text-xs ">
              <a
                href="https://www.apple.com/legal/sales-support/sales-policies/retail_us.html"
                className="hover:text-white cursor-pointer hover:underline "
              >
                {footerLinks[2]}
              </a>
              <span className="mx-2"> | </span>
            </p>
            <p className="font-semibold text-gray text-xs ">
              <a
                href="https://www.apple.com/legal/"
                className="hover:text-white cursor-pointer hover:underline "
              >
                {footerLinks[3]}
              </a>
              <span className="mx-2"> | </span>
            </p>
            <p className="font-semibold text-gray text-xs ">
              <a
                href="https://www.apple.com/sitemap/"
                className="hover:text-white cursor-pointer hover:underline "
              >
                {footerLinks[4]}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
