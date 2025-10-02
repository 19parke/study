import { useState } from "react"

export default function Main(){

    const [meme, setMeme] = useState({
        topText: 'Something different', //One does not 
        bottomText: 'Walk into Mordor', 
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    })

    function handleChange(event){
        // input 에 있는 name property
        const {value, name} = event.currentTarget;
        setMeme(context => {
            return {
                ...context,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}