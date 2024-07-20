import React, { ButtonHTMLAttributes } from "react"

interface IButton extends React.HTMLProps<ButtonHTMLAttributes<any>> {
    name: string
}

const handleSublit = (e: React.FormEvent) => {
    e.preventDefault();
    alert()
}

function Button(props: IButton) {
    return (
        <button 
            className="submitBtn"
            onClick={handleSublit}
            // {...props}
        >
            {props.name}
        </button>
    )
}

export default Button