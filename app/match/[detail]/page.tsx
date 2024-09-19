"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Define MatchDetails as a React component
const MatchDetail = () => {

    const router = useRouter();

    const [detail, setDetail] = useState<any>({});

    React.useEffect(() => {
        const getMatchDetail = async () => {
            const data: any = await localStorage.getItem("detail");
            const detail: any = JSON.parse(data);
            setDetail(detail);
        };

        getMatchDetail();
    }, []);

    const turnToSearchPage = async() => {
        router.push("/search")
    }


    return (
        <article className="h-screen flex-1 flex flex-col place-items-center 
                bg-sky-900 text-neutral-100
                rounded-lg p-5">
            <div className="w-full flex justify-between mb-5">
                <div className="text-2xl text-center">Match Detail</div>
                <button className="py-0 sm:py-0 px-3 bg-slate-200 hover:bg-slate-900
                text-sm sm:text-base text-sky-900 hover:text-neutral-100 rounded-lg cursor-pointer"
                onClick={turnToSearchPage}>To Search Page</button>
            </div>

            <div className="text-base sm:text-lg font-bold text-sky-400">Competition:</div>
            <div className="text-sm mb-5 sm:text-base">{detail.competition_name}</div>

            <div className="text-base sm:text-lg font-bold text-sky-400">Session:</div>
            <div className="text-sm mb-5 sm:text-base">{detail.season}</div>

            <div className="text-base sm:text-lg font-bold text-sky-400">Start Time:</div>
            <div className="text-sm mb-5 sm:text-base">{detail.fixture_datetime}</div>

            <div className="text-base sm:text-lg font-bold text-sky-400">Round:</div>
            <div className="text-sm mb-5 sm:text-base">{detail.fixture_round}</div>

            <div className="text-base sm:text-lg font-bold text-sky-400">Home Team:</div>
            <div className="text-sm mb-5 sm:text-base">{detail.home_team}</div>

            <div className="text-base sm:text-lg font-bold text-sky-400">Away Team:</div>
            <div className="text-sm mb-5 sm:text-base">{detail.away_team}</div>

            <div className="text-base sm:text-lg font-bold text-sky-400">Fixture Mid:</div>
            <div className="text-sm mb-5 sm:text-base">{detail.fixture_mid}</div>

            <div className="text-base sm:text-lg font-bold text-sky-400">Reference ID:</div>
            <div className="text-sm sm:text-base">{detail._id}</div>

        </article>
    );
}

export default MatchDetail;