import chefclaude from "../assets/Chef Claude Icon.png"

export default function Header(){
    return (
        <>
            <header className="header">
                <img src={chefclaude} className="icon"/>
                <h1 className="header-text">Chef Claude</h1>
            </header>
        </>
    )
}