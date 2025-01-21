"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";


function TabNavigation() {
  const [activeTab, setActiveTab] = useState("blog");
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[90vw] p-8">
        <div className="relative text-center">
          {/* Tab Buttons */}
          <div
            className="flex justify-center gap-4 relative z-10"
            style={{ fontFamily: "Kalam, sans-serif" }}
          >
            <button
              onClick={() => setActiveTab("blog")}
              className={cn(
                "w-[500px] h-[150px] rounded-full transition-all duration-300 p-8",
                "bg-[#A5B5C1] text-[#2E2E4F] text-center",
                activeTab === "blog"
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-80"
              )}
            >
              <h2 className="text-2xl font-bold mb-2">Blog</h2>
              <p className="text-sm leading-tight">
                Duik in onze blogs vol waardevolle tips, creatieve lesideeën en
                praktijkverhalen. Perfect om nieuwe inzichten op te doen en je
                lesgeven naar een hoger niveau te tillen.
              </p>
            </button>

            <button
              onClick={() => setActiveTab("community")}
              className={cn(
                "w-[500px] h-[150px] rounded-full transition-all duration-300 p-8",
                "bg-[#E88D7D] text-[#2E2E4F] text-center",
                activeTab === "community"
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-80"
              )}
            >
              <h2 className="text-2xl font-bold mb-2">Community</h2>
              <p className="text-sm leading-tight">
                Sluit je aan bij de community, stel vragen, deel ervaringen en
                leer van andere onderwijsprofessionals. Hier bouwen we samen aan
                een inspirerende leeromgeving!
              </p>
            </button>
          </div>

          {/* Content Sections */}
          <div className="w-[100%] flex justify-center">
            <div className="mt-8 text-[#2E2E4F]">
              <div
                className={cn(
                  "transition-all duration-300",
                  activeTab === "blog" ? "block" : "hidden"
                )}
              >
                <div className="bg-[#A5B5C1] p-8 rounded-lg w-[90vw] mx-auto" style={{ fontFamily: "Kalam, sans-serif" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ fontFamily: "Kalam, sans-serif" }}
                  >
                    <h2 className="text-3xl font-bold text-center  mb-1">
                      Populaire vakken
                    </h2>
                    <img
                      src="/images/image container.svg"
                      className="w-[70px] h-[20px] mx-auto"
                      alt="Image container"
                    />
                  </div>
                  {/* Add your blog content here */}
                  <div className="flex my-10" >
                    <div className="flex justify-center items-center w-[100%]">
                      <div
                        className=" mt-6 h-full w-[50%] bg-contain bg-center bg-no-repeat rounded "
                        style={{
                          backgroundImage: "url('/images/artikelbg.svg')",
                        }}
                      >
                        <div className="flex flex-col justify-center items-center mt-32">
                          <h1 className="w-[55%] text-3xl">De Essentiële Checklist voor een Perfect Schooljaar</h1>
                          <div className="w-[75%] my-5">
                          <p style={{ fontFamily: "'Kalam', cursive", fontWeight: 300 }}>De plek waar inspiratie en verbinding samenkomen! In de Leskamer vind je praktische blogs vol tips en creatieve ideeën, én een warme community om ervaringen en kennis te delen.</p>
                          <div className=" mt-5 flex justify-between w-[100%]">
                            <button className="bg-[#E2BDE0] p-1 px-3 rounded-full">Lees meer</button>
                            <p>15 september 2024</p>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[50%]  h-[100%]  flex justify-end items-center">
                        <img
                          src="/images/image 1 (2).png"
                          alt="Beschrijving van de afbeelding"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex my-10">
                    <div className="flex justify-center items-center w-[100%]">
                    <div className="w-[50%]  h-[100%]  flex justify-start items-center">
                        <img
                          src="/images/artikelImage2.svg"
                          alt="Beschrijving van de afbeelding"
                          className="h-full w-auto"
                        />
                      </div>
                      <div
                        className=" mt-6 h-full w-[50%] bg-contain bg-center bg-no-repeat rounded "
                        style={{
                          backgroundImage: "url('/images/artikelbg2.svg')",
                        }}
                      >
                          <div className="flex flex-col justify-center items-center mt-32">
                          <h1 className="w-[55%] text-3xl">De Essentiële Checklist voor een Perfect Schooljaar</h1>
                          <div className="w-[75%] my-5">
                          <p style={{ fontFamily: "'Kalam', cursive", fontWeight: 300 }}>De plek waar inspiratie en verbinding samenkomen! In de Leskamer vind je praktische blogs vol tips en creatieve ideeën, én een warme community om ervaringen en kennis te delen.</p>
                          <div className=" mt-5 flex justify-between w-[100%]">
                            <button className="bg-[#E2BDE0] p-1 px-3 rounded-full">Lees meer</button>
                            <p>15 september 2024</p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex my-10">
                    <div className="flex justify-center items-center w-[100%]">
                      <div
                        className=" mt-6 h-full w-[50%] bg-contain bg-center bg-no-repeat rounded "
                        style={{
                          backgroundImage: "url('/images/artikelbg.svg')",
                        }}
                      >
                                  <div className="flex flex-col justify-center items-center mt-32">
                          <h1 className="w-[55%] text-3xl">De Essentiële Checklist voor een Perfect Schooljaar</h1>
                          <div className="w-[75%] my-5">
                          <p style={{ fontFamily: "'Kalam', cursive", fontWeight: 300 }}>De plek waar inspiratie en verbinding samenkomen! In de Leskamer vind je praktische blogs vol tips en creatieve ideeën, én een warme community om ervaringen en kennis te delen.</p>
                          <div className=" mt-5 flex justify-between w-[100%]">
                            <button className="bg-[#E2BDE0] p-1 px-3 rounded-full">Lees meer</button>
                            <p>15 september 2024</p>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[50%]  h-[100%]  flex justify-end items-center">
                        <img
                          src="/images/image 1 (2).png"
                          alt="Beschrijving van de afbeelding"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "transition-all duration-300",
                  activeTab === "community" ? "block" : "hidden"
                )}
              >
                <div className="bg-[#A5B5C1] p-8 rounded-lg w-[90vw] mx-auto">
                  <div
                    className="flex flex-col justify-center"
                    style={{ fontFamily: "Kalam, sans-serif" }}
                  >
                    <h2 className="text-3xl font-bold text-center mb-1">
                      Community posts
                    </h2>
                    <img
                      src="/images/image container.svg"
                      className="w-[70px] h-[20px] mx-auto"
                      alt="Image container"
                    />
                  </div>
                  {/* Add your blog content here */}
                  <div className="space-y-4 mt-6">
                    <div className="h-20 bg-[#A5B5C1]/20 rounded animate-pulse" />
                    <div className="h-20 bg-[#A5B5C1]/20 rounded animate-pulse" />
                    <div className="h-20 bg-[#A5B5C1]/20 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabNavigation;
