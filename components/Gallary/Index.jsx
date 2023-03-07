import BgEffect from "components/BgEffect";
import { useState } from "react";
import GallaryItem from "./GallaryItem";
import ItemView from "./ItemView";
import { gameList } from "config/games";

export default function Gallary() {
    const [isItemView, openItem] = useState(false);
    const [selectedGame, selectGame] = useState(gameList[0]);

    const onClickItem = (game) => {
        selectGame(game);
        openItem(true);
    }

    return (
        <div className="flex flex-col pt-[50px] border-t-[3px] border-t-[white]" id="games">
            <div className="lg:mx-[100px] md:mx-[80px] mx-[50px] z-10 pointer-events-none">
                <h3 className="text-center text-[40px] font-bold mb-[20px] mt-[100px] text-white"> Featured Games </h3>
            </div>
            <div className="w-full flex flex-wrap justify-center z-10 pointer-events-none">
                { gameList.map((game, index) => {
                        return (
                            <GallaryItem key={index} videoPath={game.video} imagePath={game.bgImage} w={600} h={800} label={game.title} onClickHandler={() => {onClickItem(game)}}/>
                        )
                    }
                )}
                <div className="w-[280px] m-[10px]"></div>
                <div className="w-[280px] m-[10px]"></div>
                <div className="w-[280px] m-[10px]"></div>
                <div className="w-[280px] m-[10px]"></div>
                <div className="w-[280px] m-[10px]"></div>
                <div className="w-[280px] m-[10px]"></div>
                <div className="w-[280px] m-[10px]"></div>
                <div className="w-[280px] m-[10px]"></div>
            </div>
            { isItemView &&
                <ItemView gameInfo={selectedGame} onCloser={openItem}/>
            }
            
        </div>
        
    );
}