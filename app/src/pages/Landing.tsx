import { Component, Show } from "solid-js";
import WindowsScreen from "../components/WindowsScreen";
import { useWindowsContext } from "../context/WindowsContext";

const Landing: Component = () => {

    const { store } = useWindowsContext();
    
    // return (<div class="w-screen h-screen fixed">

    //     <div>
    //         <Show when={store.scanline}>
    //             <div class="w-screen h-screen bg-mini-scanline opacity-15 absolute z-10 pointer-events-none"/>
    //             <div class="w-full absolute h-[10%] bg-gray-200 opacity-30 pointer-events-none animate-scanline z-20"/>
    //         </Show>
    //         <div class="w-inherit min-h-[100svh] flex justify-center items-center">
    //             <WindowsScreen/>
    //         </div>
    //     </div>

    // </div>);

    return (<div class="flex w-screen h-screen items-center justify-center">
        <h1 class="text-2xl">Website under renovations !!</h1>
    </div>)

}   

export default Landing;