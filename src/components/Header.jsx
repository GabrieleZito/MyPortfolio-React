/* eslint-disable no-unused-vars */
import { Outlet } from "react-router";
import github from "../assets/images/github-mark.svg";
import githubL from "../assets/images/github-mark-white.svg";
import linkedin from "../assets/images/LinkedIn_logo_initials.png.webp";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../slices/themeSlice";

export function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const language = i18n.language;
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();
    return (
        <>
            <header>
                <nav
                    className={`z-20 flex flex-row items-center justify-between bg-white px-14 py-6 shadow-emerald-600 duration-200 dark:shadow-red-600 ${
                        isMenuOpen ? "shadow-none" : "shadow-sm"
                    } ${theme ? "dark" : ""} dark:bg-scuro dark:text-chiaro`}
                >
                    <div className="roboto-mono text-[30px]"> MyPortfolio </div>
                    <div
                        className={`absolute left-0 flex w-full flex-col md:static md:w-fit md:flex-row ${
                            isMenuOpen ? "top-[95px]" : "top-[-100%]"
                        } roboto-mono z-10 items-center gap-12 text-[20px] shadow-[0px_2px_2px_-1px_rgba(0,0,0,0.1)] shadow-emerald-600 duration-300 md:z-0 md:shadow-none dark:shadow-red-600`}
                    >
                        <a
                            href="https://github.com/GabrieleZito"
                            className="flex flex-row items-center gap-1"
                        >
                            <img
                                src={theme ? githubL : github}
                                alt="github_logo"
                                className="w-[30px]"
                            />
                            <div>GitHub</div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gabriele-zito/"
                            className="flex flex-row items-center gap-1"
                        >
                            <img
                                src={linkedin}
                                alt="linkedin_logo"
                                className="w-[30px]"
                            />
                            <div>LinkedIn</div>
                        </a>
                    </div>
                    {isMenuOpen ? (
                        <X
                            className="cursor-pointer md:hidden"
                            onClick={() => setIsMenuOpen((x) => !x)}
                        ></X>
                    ) : (
                        <Menu
                            className="cursor-pointer md:hidden"
                            onClick={() => {
                                setIsMenuOpen((x) => !x);
                            }}
                        />
                    )}
                    <div className="flex flex-row items-center gap-3">
                        <div
                            onClick={() => dispatch(switchTheme())}
                            className="dark:hover:bg-chiaro hidden cursor-pointer items-center rounded-md bg-amber-50 p-1.5 shadow-sm hover:bg-amber-200 md:block dark:bg-neutral-600 dark:hover:text-neutral-600"
                        >
                            {theme ? <Moon /> : <Sun />}
                        </div>
                        <div onClick={} className="flex h-[36px] w-[36px] items-center justify-center rounded-md bg-white shadow-sm">
                            <img
                                className=""
                                src={`https://flagcdn.com/w20/${language}.png`}
                                alt=""
                            />
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
