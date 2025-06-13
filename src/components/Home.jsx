/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import propic from "../assets/images/propic.png";
import json from "../projects.json";
import { Github, Globe } from "lucide-react";

export function Home(props) {
    const theme = useSelector((state) => state.theme.value);
    //console.log(json.projects);

    return (
        <>
            <div
                className={`${theme ? "dark" : ""} relative z-10 mt-[200px] flex flex-col justify-center bg-white md:flex-row`}
            >
                <div className="flex flex-row justify-center font-sans">
                    <div className="mx-auto h-fit w-96 bg-white shadow-2xl hover:shadow">
                        <img
                            className="mx-auto -mt-20 w-32 border-8 border-white"
                            src={propic}
                            alt=""
                        />
                        <div className="mt-2 text-center text-3xl font-medium">
                            Gabriele Zito
                        </div>
                        <div className="mt-2 text-center text-sm font-light">
                            @devpenzil
                        </div>
                        <div className="text-center text-lg font-normal">
                            Palermo
                        </div>
                        <div className="mt-2 px-6 text-center text-sm font-light">
                            <p>
                                Full Stack Developer, avid reader. Love to build
                                things and travel
                            </p>
                        </div>
                        <hr className="mt-8" />
                        <div className="flex justify-center p-4">
                            <div className="w-1/2 text-center">
                                <span className="font-bold">
                                    {" "}
                                    {json.projects.length}{" "}
                                </span>{" "}
                                Projects
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {json.projects.map((p) => (
                        <div
                            key={p.id}
                            className="flex flex-col rounded-lg px-4 py-4 text-emerald-700 shadow-sm md:max-w-xl"
                        >
                            <div className="flex flex-col items-center md:flex-row">
                                <img
                                    className="h-96 w-full object-cover md:h-auto md:w-48"
                                    src={
                                        "/src/assets/images/projects/" + p.image
                                    }
                                    alt=""
                                />
                                <div className="flex w-max flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                        {p.name}
                                    </h5>
                                    <p className="mb-3 truncate font-normal whitespace-pre-line">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 flex justify-between">
                                <div className="flex flex-row">
                                    <a href={p.github_link} target="_blank">
                                        <Github />
                                    </a>
                                    {p.site_link ? (
                                        <a href={p.site_link} target="_blank">
                                            <Globe />
                                        </a>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="flex flex-row gap-2">
                                    {p.tags.map((t) => (
                                        <div key={t}>#{t}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
