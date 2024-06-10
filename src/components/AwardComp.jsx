import {useEffect, useState} from "react";
import {RiTrophyFill} from "react-icons/ri";

export default function AwardComp() {
    const [award, setAward] = useState([]);

    useEffect(() => {
        fetch('/work.json')
            .then(response => response.json())
            .then(data => setAward(data))
            .catch(error => console.error("Failed to load work history:", error));
    }, [])

    return (
        <div className="flex flex-col space-y-4">
            {award.map((job, index) => (
                <div key={index} className="p-4 flex flex-row gap-4">
                    <div
                        className="bordered h-20 w-20 p-4 border-2 rounded-xl flex flex-col items-center justify-center">
                        <RiTrophyFill className={'text-2xl'}/>
                    </div>
                    <div className="">
                        <h2 className="text-xl font-bold"><span
                            className={"font-light"}>{job.position} at</span> {job.companyName}</h2>
                        <p className="text-md">{job.startDate} - {job.endDate}</p>
                    </div>
                    <div className="divider"/>
                </div>
            ))}
        </div>
    );
}