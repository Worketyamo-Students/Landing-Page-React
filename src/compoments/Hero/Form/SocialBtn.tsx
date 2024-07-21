import { HTMLProps, LinkHTMLAttributes, ReactElement } from "react";


interface IsocialBtn extends HTMLProps<LinkHTMLAttributes<undefined>> {
    icon: ReactElement
}

function SocialBtn(props: IsocialBtn) {
    return (
        <a 
            target="_blank"
            href={props.href}
            className="inline-block rounded-full border border-gray bg-light p-3 text-4xl"
        >
            {props.icon}
        </a>
    )
}

export default SocialBtn;