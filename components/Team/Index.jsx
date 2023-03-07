import { useState } from "react";
import MemberItem from "./MemberItem";
import ItemView from "./ItemView";
import { teamList } from "config/teams";

export default function Team() {
    const [isItemView, openItem] = useState(false);
    const [selectedMember, selectMember] = useState(teamList[0]);

    const onClickItem = (member) => {
        selectMember(member);
        openItem(true);
    }

    return (
        <div className="flex flex-col pt-[50px] pb-[100px]" id="team">
            <div className="lg:mx-[100px] md:mx-[80px] mx-[50px] z-10 pointer-events-none flex justify-center items-center">
                <h3 className="text-center text-[40px] font-bold mb-[20px] mt-[100px] text-white"> Our Team </h3>
            </div>
            <div className="w-full flex flex-wrap justify-center z-10 pointer-events-none">
                { teamList.map((member, index) => {
                        return (
                            <MemberItem key={index} imagePath={member.avatar} label={member.name} onClickHandler={() => {onClickItem(member)}}/>
                        )
                    }
                )}
            </div>
            { isItemView &&
                <ItemView member={selectedMember} onCloser={openItem}/>
            }
        </div>
        
    );
}