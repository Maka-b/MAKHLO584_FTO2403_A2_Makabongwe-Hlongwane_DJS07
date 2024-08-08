import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://banner2.cleanpng.com/20180325/rqq/kisspng-jojo-s-bizarre-adventure-all-star-battle-jotaro-k-dynamite-5ab7964fcd7281.9995611015219810078415.jpg" 
                alt="header-logo"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">DJS 07- React Basics</h4>
        </header>
    )
}