import { HTMLProps, LinkHTMLAttributes, ReactElement } from "react";


interface IsocialBtn extends HTMLProps<LinkHTMLAttributes<undefined>> {
    icon: ReactElement
}

function SocialBtn(props: IsocialBtn) {
    return (
            <a 
                className="rounded-full bg-light border border-gray p-8"
            >
                {props.icon}A
            </a>
    )
}

export default SocialBtn;