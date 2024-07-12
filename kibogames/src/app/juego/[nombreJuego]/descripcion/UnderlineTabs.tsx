"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/app/componentes/MaterialUI/Material";
import { IVideoGame } from "@/app/models/videogame";
import Ranking from "@/app/componentes/Ranking";
import Link from 'next/link';

export function UnderlineTabs({ videogame }: { videogame: IVideoGame }) {
    const opcionesDeTabs = {
        ranking: "Ranking",
        tutorial: "Tutorial",
        videoUrl: "Video"
    };

    const [activeTab, setActiveTab] = useState(opcionesDeTabs.ranking);
    const [player, setPlayer] = useState<any>(null);

    const contenidoTabs: Record<string, JSX.Element> = {
        [opcionesDeTabs.ranking]: <Ranking gameName={videogame.name} /> ,
        [opcionesDeTabs.tutorial]: <p className="font-normal p-4"> {videogame.tutorial} </p>,
        [opcionesDeTabs.videoUrl]: (
            <div className="font-normal p-4">
                <div id="youtube-player" />
            </div>
        )
    };

    useEffect(() => {
        if (activeTab === opcionesDeTabs.videoUrl) {
            loadYouTubePlayer();
        }
    }, [activeTab]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const loadYouTubePlayer = () => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = createYouTubePlayer;
        } else {
            createYouTubePlayer();
        }
    };

    // Extraer videoID para reproduccion
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videogame.videoUrl.match(regex);
    const videoId = match ? match[1] : null;

    const createYouTubePlayer = () => {
        const youtubePlayer = new window.YT.Player('youtube-player', {
            height: '360',
            width: '570',
            videoId: videoId, // Debes proporcionar el ID del video de YouTube
            events: {
                // Aquí puedes añadir eventos de YouTube Player API si lo necesitas
            },
        });
        setPlayer(youtubePlayer);
    };

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-10 gap-4 mt-8">
            <div className="col-span-3 flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    <img src={videogame.mainImage} alt={`Imagen de ${videogame.name}`} className="max-h-96 w-auto"/>
                </div>
                <Link href={`/juego/${videogame.name}`}>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Jugar
                    </button>
                </Link>
            </div>
            <div className="col-span-1"/>
            <div className="col-span-5">
                <h2 className="text-2xl font-semibold mt-8">{videogame.name}</h2>
                <p className="mt-4">{videogame.description}</p>
                <div className="border border-grey-100 rounded-xl mt-4 mb-8">
                    <Tabs value={activeTab} className="border-b border-white">
                        <TabsHeader className="flex rounded bg-gray-200">
                            {Object.values(opcionesDeTabs).map((tab) => (
                                <Tab
                                    key={tab}
                                    value={tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`px-4 py-2 ${
                                        activeTab === tab ? "bg-transparent text-black" : "bg-gray-300 text-gray-800"
                                    }`}
                                >
                                    {tab}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {Object.entries(contenidoTabs).map(([tabName, contenido]) => (
                                <TabPanel key={tabName} value={tabName}>
                                    {contenido}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </div>

    );
}
