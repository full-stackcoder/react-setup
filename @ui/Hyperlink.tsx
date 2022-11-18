import React from "react";

const Hyperlink = (props: any) => {
    return (
        <>
            <a
                href = {props.href}
            >
                {props.children}
            </a>
        </>
    )
}

export default Hyperlink