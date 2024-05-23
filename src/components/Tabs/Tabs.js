"use client"
import React, { useState } from 'react'
import MessageList from '../Messages/MessageList'
import ApplicationList from '../Applications/ApplicationList'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Messaages");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <>
    <div className='bg-[#2B2B2B] text-black py-4'>
      <div className='container flex items-center justify-between mx-auto px-2'>
        <div onClick={() => handleTabClick("Messaages")} className={`${activeTab === "Messaages" ? "bg-[#FAFAFA]" : "bg-[#CACACA]"} w-full py-4 flex items-center justify-center transition-all cursor-pointer`}>Messaages</div>
        <div onClick={() => handleTabClick("Job Applications")} className={`${activeTab === "Job Applications" ? "bg-[#FAFAFA]" : "bg-[#CACACA]"} w-full py-4 flex items-center justify-center transition-all cursor-pointer`}>Job Applications</div>
      </div>
    </div>
    {activeTab === "Messaages" && <MessageList />}
    {activeTab === "Job Applications" && <ApplicationList />}
    
    </>
    
  )
}

export default Tabs
