/* eslint-disable no-unused-vars */
import { Outlet } from "react-router";
import github from "@/assets/images/GitHub_Logo_White.png"

export function Header(props) {
    return (
        <>
            <header>
                <nav className="flex flex-row items-center justify-between px-14 py-6 shadow-sm shadow-emerald-600 bg-white ">
                    <div className="roboto-mono text-[30px]"> MyPortfolio </div>
                    <div>
                        <a>
                            <img />
                            <div>GitHub</div>
                        </a>
                        <a>
                            <img />
                            <div>LinkedIn</div>
                        </a>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
