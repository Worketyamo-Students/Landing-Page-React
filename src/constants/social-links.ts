import { HTMLProps, ReactElement } from "react";
import { AiOutlineGithub } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { FcGoogle } from "react-icons/fc"; 

interface ISocialLink extends HTMLProps<ReactElement> {
    id: number;
    icon?: ReactElement;
    ref: string;
}

const socialLink: ISocialLink[] = [
    {
        id: 1,
        icon: <FcGoogle />,
        ref: '/google', 
    },

    {
        id: 2,
        icon: <BsFacebook />,
        ref: '/facebook', 
    },

    {
        id: 3,
        icon: <AiOutlineGithub />,
        ref: '/github', 
    },
]

export default  socialLink;