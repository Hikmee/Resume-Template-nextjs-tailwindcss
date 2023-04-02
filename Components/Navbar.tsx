"use client";
import {FaGithub, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Linkedin from "./shared/Linkedin";
import logo from "@/public/Images/logo.png"



const Navbar = () => {
    const [nav , setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };

    return (
      <div className="sticky top-0 w-full h-20 shadow-md z[100] bg-white">
        <div className="flex sticky justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
            <Link href={"/"} >
                <Image src = {logo} 
                alt=" " width = {100} height={100} className="w-16 h-16 rounded-full bg-[#54ca95]"/>
            </Link>
            <div>
                <ul className="hidden md:flex items-center">
                    <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-400">
                        <Link href={"/"}>About</Link>
                    </li>
                    <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-400">
                        <Link href={"/Skills"}>Skills</Link>
                    </li>
                    <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-400">
                        <Link href={"/Contact"}>Contact</Link>
                    </li>
                </ul>
                {/*Mobile Navbar*/}
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size="25"/>
                </div>
            </div>
        </div>
        {/* Mobile Menu*/}
        <div className= {`${nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : " "}`}>
        <div className={`${nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-white" : "fixed left-[-100%] top-0 p-15 ease-in duration-500 "} `}>
                <div className="flex w-full items-center justify-between">
                <Link href={"/"} >
                    <Image src = {logo} 
                    alt=" " width = {100} height={100} className="w-16 h-16 rounded-full bg-[#54ca95]"/>
                </Link>
                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <AiOutlineClose/>
                </div>
                </div>
                <div className="border-b border-gray-300 my-6">
                    <p className="w-[90%] md:w-[95%] py-4">Hikmat Ullah | Web 3.0 & Metaverse Evangelist</p>
                </div>
                <div className="py-4 flex-col ">
                    <ul className="uppercase text-sm">
                        <Link href={"/"}>
                            <li className="py-4">About</li>
                        </Link>
                        <Link href={"/"}>
                            <li className="py-4">Skills</li>
                        </Link>
                        <Link href={"/"}>
                            <li className="py-4">Contact</li>
                        </Link>
                        
                    </ul>
                    <div className="py-40">
                        <p className="uppercase tracking-widest text-[#54ca95] w-full sm:w-[80%]">
                            Let&apos;s Connect
                        </p>
                        <div className="flex justify-between items-center my-4 w-full sm:w-[80%] ">
                            { <Linkedin url="https://www.facebook.com">
                                
                                 <FaLinkedin />

                            </Linkedin> }
                            <Linkedin url="https://www.linkedin.com">

                                <FaFacebook /> 

                            </Linkedin>
                            <Linkedin url="https://www.github.com">

                                <FaGithub /> 
                                
                            </Linkedin>
                            <Linkedin url="https://www.twitter.com">

                                <FaTwitter /> 
                                
                            </Linkedin>
                            <Linkedin url="https://www.youtube.com">

                                <FaYoutube /> 
                                
                            </Linkedin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
        )
  }
  export default Navbar


