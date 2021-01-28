import React from 'react'

function Home() {
    
    return (
        <div id='home' className='main-black-div'>
            <h1>Toxic Bot</h1>
            <div className="description-div">
                <div className="image-div">
                    <img src="https://i.ibb.co/7tynPG9/Logo.jpg" alt="Logo" className="logo-image" ></img>
                </div>
                <div className="description-text">
                    A discord Bot to play some of the most famous meme dialogues and songs out there !!!! <br /> <br />
                    -- Some of the best memes. <br />
                    -- Queue memes (Upto 7). <br />
                    -- Manage Queue <br /> <br />
                    Interface Commands <br />
                    -- Help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;={">"} tb Help <br />
                    -- Display Queue ={">"} tb Queue <br />
                    -- Disconnect&nbsp;&nbsp;&nbsp;&nbsp; ={">"} tb (dc / leave) <br />
                    -- tb rm / tb remove removes the last added meme <br />
                    -- tb clrq / tb clearqueue clears the Queue. 

                </div>
            </div>
            <a href="https://discord.com/api/oauth2/authorize?client_id=767652353171652629&permissions=8&scope=bot" > 
                <button className="add-bot-button">
                    <h2>Add to your server </h2>
                </button>
            </a>
        </div>
    )
}

export default Home
