"use client";

import React from "react";
import Link from "next/link";
import { HeaderTop } from "./HeaderTop";
import { HeaderNav } from "./HeaderNav";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderOffcanvas } from "./HeaderOffcanvas";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import {
  useMobileMenu,
  useOffCanvas,
  useSearch,
} from "../../lib/hooks/useHeader";

const LOGO = "/logo/logo.png";

export const HeaderOne = () => {
  const { showSearch, toggleSearch } = useSearch();
  const { showCanvas, toggleCanvas } = useOffCanvas();
  useMobileMenu();

  return (
    <>
      <header>
        <div id="header-fixed-height"></div>

        {/* top */}
        <HeaderTop />

        {/* bottom */}
        <div id="sticky-header" className="tg-header__area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link href="/">
                        <img src={LOGO} alt="Logo" />
                      </Link>
                    </div>

                    {/* nav */}
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <HeaderNav />
                    </div>

                    <div className="tgmenu__action d-none d-md-block">
                      <ul className="list-wrap">
               
                   

                        <li className="header-btn">
                          <Link href="/contact" className="btn">
                            <i className="flaticon-calendar-1"></i>Appointment
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="mobile-nav-toggler">
                      <i className="flaticon-layout"></i>
                    </div>
                  </nav>
                </div>

                {/*  Mobile Menu   */}
                <HeaderMobileMenu />
              </div>
            </div>
          </div>
        </div>

        {/*  header-search */}
        <HeaderSearch active={showSearch} toggleSearch={toggleSearch} />

        {/* off canvas */}
        <HeaderOffcanvas active={showCanvas} toggleCanvas={toggleCanvas} />
      </header>
    </>
  );
};
