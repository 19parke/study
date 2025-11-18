import { useState, useEffect } from "react"

export default function Main(){

    const [meme, setMeme] = useState({
        topText: 'Something different', //One does not 
        bottomText: 'Walk into Mordor', 
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    })

    const [memeArray, setMemeArray] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeArray(data.data.memes))
    }, [])

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

    function getMeme(){
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMeme((prevMeme) => {
            return {
                ...prevMeme, 
                imageUrl: memeArray[randomNumber].url
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
                <button onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}