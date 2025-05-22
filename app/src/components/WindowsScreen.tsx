import { Component, createSignal } from "solid-js";
import WindowApp from "./WindowApps";
import TaskbarDivider from "./TaskbarDivider";
import { DayStats } from "./DayStats";
import { useWindowsContext } from "../context/WindowsContext";
import AppScreen from "./AppScreen";

const WindowsScreen: Component = () => {

    
    let audioElement: HTMLAudioElement;

    let dialogElement: HTMLDialogElement;

    const { store } = useWindowsContext();

    const [shutdown, setShutdown] = createSignal("");
    
    function playClickAudio(){
        audioElement.play();
    }

    function openDialog(){
        dialogElement.showModal();
    }

    function closeDialog(){
        dialogElement.close();
    }

    function mapTaskBar(items: string[]){
        return items.map((names) => {
            return (<div class="flex w-1/6 border-[3px] border-b-palette-light-purple border-r-palette-light-purple border-t-pink-100 border-l-pink-100 items-center h-4/5 justify-center text-center text-[1.5vh]">{names}</div>)
        })
    }

    return (<div class={`min-h-[100svh] aspect-square ${store.flicker ? "animate-flicker" : ""}`} onClick={playClickAudio}>

        <dialog ref={dialogElement} class="w-1/4 h-1/5 bg-gray-200 open:flex open:flex-col border-palette-light-purple border-2 z-0">
            <div class="w-full h-[10%] border-b-palette-pink pl-2 pr-2 bg-gradient-to-r from-palette-blue to-palette-pink flex flex-col justify-center">
                <button onclick={closeDialog} class="self-end hover:cursor-pointer">X</button>
            </div>
            <div class="w-full h-[70%] flex">
                <div class="h-full w-2/5 flex items-center justify-end pr-2">
                    <img src="/images/shutdown_monitor.png"></img>
                </div>
                <ul class="h-full w-3/5 flex  flex-col justify-center">
                    What do you want it to do?
                    <label class="hover:cursor-pointer">
                        <input type="radio" name="action" onclick={() => {setShutdown("Shut Down")}} class="hover:cursor-pointer"></input>
                        <span class="ml-2">Shut Down</span>
                    </label>
                    <label class="hover:cursor-pointer">
                        <input type="radio" name="action" onclick={() => {setShutdown("Restart")}} class="hover:cursor-pointer"></input>
                        <span class="ml-2">Restart</span>
                    </label>
                </ul>
            </div>
            <ul class="flex w-full h-[20%] justify-end items-center">
                <li class="h-full w-1/5 flex">
                    <button class="border-2 m-2 border-r-palette-purple border-b-palette-purple w-full hover:cursor-pointer border-t-gray-50 border-l-gray-50 text-sm" onclick={() => {if (shutdown() == "Shut Down"){window.close()}}}>{(shutdown() == "" || shutdown() == "Shut Down") ? "Ok" : "lol no"}</button>
                </li>
                <li class="h-full w-1/5 flex">
                    <button class="border-2 m-2 border-r-palette-purple border-b-palette-purple w-full hover:cursor-pointer border-t-gray-50 border-l-gray-50 text-sm" onclick={closeDialog}>Cancel</button>
                </li>
            </ul>
        </dialog>
        
        <audio src="../../media/mouse_click.mp3" ref={audioElement}/>

        <AppScreen name={store.windowApp}/>

        <section class="w-full h-[5%] flex flex-row items-center  bg-[#f8ebff]">    
            <section class="h-full w-full overflow-hidden">
                <span class="h-full w-full flex items-center text-[100%] whitespace-nowrap animate-marquee">Welcome to my website! Just 5 easy payments of 99.99 if you want to have a mention here!</span>
            </section>
        </section>


        <div class="h-[89%] w-full grid grid-cols-8 grid-rows-8 bg-[#f9e3ff] grid-flow-col p-10">
            <WindowApp source="/images/resume_app.png" name="Resume"/>
            <WindowApp source="/images/about_me_logo.png" name="About Me"></WindowApp>
        </div>

        <nav class="w-full h-[6%] flex flex-row items-center pl-2 pr-2 bg-[#f8ebff]">    
            <button class="w-[15%] shadow-md h-4/5 hover:cursor-pointer flex shadow-purple-100 border-solid border-purple-400 border-[3px] border-t-pink-100 border-l-pink-100 text-2xl" onclick={openDialog}>
                <img src="/images/custom_windows_logo.png" class="h-full object-contain aspect-square"/>
                <span class="object-fill w-full h-full flex items-center justify-center text-[2vh]">Start</span>
            </button>
            <TaskbarDivider/>
            <a target="_blank" href="https://github.com/thekevinWHYuan" class="aspect-square h-[32px] ml-2 mr-2 hover:cursor-pointer">
                <img src="/images/github_logo.png" alt="My Github"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/kevyudev/" class="aspect-square h-[32px] ml-2 mr-2 hover:cursor-pointer">
                <img src="/images/linkedin_logo.png" alt="My Linkedin"/>
            </a>
            <TaskbarDivider/>
            <div class="flex flex-grow h-full items-center pl-2">
                {mapTaskBar(store.taskbar)}
            </div>
            <div class="flex justify-end items-center h-full w-1/6">
                <DayStats/>
            </div>
        </nav>
    </div>);
}   

export default WindowsScreen