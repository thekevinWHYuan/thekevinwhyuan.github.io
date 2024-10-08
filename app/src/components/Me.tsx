import { Show } from "solid-js";
import { useWindowsContext } from "../context/WindowsContext";
import Post from "./Posts";
import ProjectSection from "./Projects";

interface IAboutMe{
    title: string
    banner: string
    mode: string
}

export default function Me(props: IAboutMe){

    const { store, setStore } = useWindowsContext();

    // Keep track of stack
    function anotherPage(name: string){
        if (store.currentPage != (store.searchHistory.length - 1)){
            for (let i = 0; i < (store.searchHistory.length - store.currentPage - 1); i++){
                // pop stack   
            }
        }
        setStore("searchHistory", (searches) => [...searches, name]);
        setStore("currentPage", store.searchHistory.length - 1);
        setStore("windowApp", name);
    }

    return (<div class="grid grid-rows-10 grid-cols-10 h-full w-full p-2">
        <header class={`col-span-10 row-span-2 flex ${props.banner} items-center justify-center border-2 border-palette-purple bg-cover`}>
            <h1 class="text-[8vh] text-palette-purple">{props.title}</h1>
        </header>
        <aside class="col-span-2 row-span-8 flex flex-col pt-2">
            {/* <img src="src/public/images/its_me.jpeg" class="aspect-square pb-1 pointer-events-none" alt="Hey look it's supposed to be me"/> */}
            <div class="aspect-square pb-1 pointer-events-none flex items-center justify-center text-[1.25vh]" >
                Picture Coming Soon..
            </div>
            <nav class="flex-grow flex flex-col">
                <h2 class={`text-palette-purple w-full h-1/6 flex items-center justify-center border-2 border-palette-purple text-[1.5vh] ${props.banner}`}>
                    Related Items
                </h2>
                <ul class="flex-grow flex flex-col justify-around items-center">
                    <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50 hover:cursor-pointer" onClick={() =>anotherPage("About Me")}><a class={`${store.windowApp == "About Me" ? "text-palette-purple" : ""} text-[1.5vh]`}>About Me</a></li>
                    <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50 hover:cursor-pointer" onClick={() =>anotherPage("Resume")}><a class={`${store.windowApp == "Resume" ? "text-palette-purple" : ""} text-[1.5vh]`}>Resume</a></li>
                    <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50 hover:cursor-pointer" onClick={() =>anotherPage("Projects")}><a  class={`${store.windowApp == "Projects" ? "text-palette-purple" : ""} text-[1.5vh]`}>Projects</a></li>
                    {/* <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50 hover:cursor-pointer" onClick={() =>anotherPage("Endorsements")}><a class={`${store.windowApp == "Endorsements" ? "text-palette-purple" : ""} text-[1.5vh]`}>Endorsements</a></li> */}
                    <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50 hover:cursor-pointer" onClick={() =>anotherPage("Blog")}><a  class={`${store.windowApp == "Blog" ? "text-palette-purple" : ""} text-[1.5vh]`}>Blog</a></li>
                </ul>
            </nav>
        </aside>
        <section class="col-span-8 row-span-8 flex flex-col pl-2 pt-2 h-full">
            <Show when={props.mode == "About Me"}>
                <Post title="Introduction" content={<span class="h-[90%]">Hello all! I'm Kevin, a 3rd Year at Cal Poly studying <a href="https://www.calpoly.edu/major/software-engineering" class="hover:cursor-pointer text-palette-purple" target="_blank"><u>Software Engineering</u></a> and minoring in the <a href="https://eadvise.calpoly.edu/Minors/Computing-for-Interactive-Arts" class=" text-palette-purple" target="_blank"><u>Computing for the Interactive Arts</u></a> program. <br/> <br/>Interests include Web or VR Development. Besides any sort of programming, I love to dabble in 3D modeling using Blender and Video Editing using Davinci Resolve. Will nerd out about history and aerospace stuff given the chance :D</span>}/>
                <Post title="How did I get here?" content={<p class="h-[90%] overflow-y-scroll">printf("Hello World")? nah. "/gamemode 1" is where it's at. For many it might be the fabled Hello World but for me, my love of programming started in Minecraft, staring down at the dark caverns.<br/> <br/>As you enter, the omnipresent darkness engulfs you. Tales of a misfortunate mishap can be heard just ever so often as echoes and screeches fills the barren cavern. "ok yea, i don't feel like losing all my stuff" <em>types /gamemode 1</em> <br/> <br/> It was only when I was introduced to <a href="https://minecraft.fandom.com/wiki/Command_Block" target="_blank" class="text-palette-purple"><u>Command Blocks</u></a> that things started to get more interesting. These were blocks, that as the name suggest, runs commands. There were many different types that represented loops and conditionals. Combined with redstone (think of it as the circuitry that connects it all together), you can start creating some real complex things. <br/> <br/>From there, I started creating birthday gifts for my friends oftentimes, small minigames and firework displays. My love for commands only grew and it was only natural before I moved on to different sorts of programming languages (yes including scratch).</p>}/>
            </Show>
            <Show when={props.mode == "Projects"}>
                <ProjectSection/>
            </Show>
            <Show when={props.mode == "Resume"}>
                <object data="/assets/My_Resume.pdf" class="w-full h-full">
                    <p>It appears that the resume didn't load correctly D:</p>
                </object>
            </Show>
            <Show when={props.mode == "Blog"}>
                <span class="text-[1.5vh] h-full w-full text-center">Under Construction D:</span>
            </Show>
        </section>

    </div>);
}