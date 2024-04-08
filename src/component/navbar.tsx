import React, {useState, useRef, useEffect} from "react";
import Logo from "../../public/logo.svg?react";
import Notif from "../assets/notifIco.svg?react";
import Schedule from "../assets/scheduleIco.svg?react";
import Fav from "../assets/favIco.svg?react";
import Saved from "../assets/bookmarkIco.svg?react";
import './navbar.css';



const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navbarRef = useRef<HTMLDivElement>(null);

    type MenuProps = {
        src?: React.FunctionComponentElement<React.SVGProps<SVGSVGElement>>
        desc: string
    }
    
    const Menu = ({src, desc} : MenuProps) => {
        return (
            <div  className={"flex px-5 py-3 items-center h-auto " }>
                <div className="w-4 h-4">
                    {src && React.cloneElement(src, {fill: 'white', width: '14px', height: '14px'})}
                </div>
                
                <span className={"text-white w-max ml-5 text-left text-sm transition-opacity ease-linear duration-200 "  + (isOpen ? "opacity-100" : "opacity-0")}>{desc}</span>
            </div>
        )
    }

    const handleOutsideClick = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Menambahkan event listener saat komponen dimount
        document.addEventListener('mousedown', handleOutsideClick);
        // Membersihkan event listener saat komponen di-unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <nav ref={navbarRef} className={"sticky flex flex-col mix-w-fit bg-primary h-screen transition-all duration-200 ease-linear " + (isOpen ? "w-48" : "w-20")}>
                <div className="mx-auto w-full h-full flex flex-col justify-between">
                    <div className="text-center py-5 w-full">
                        <Logo fill="white" className="inline" onClick={() => {setIsOpen(!isOpen)}} />
                        </div>
                    <div className="flex flex-col space-y-2 mx-auto ml-3 w-fit mt-7">
                        <Menu src={<Notif />} desc="Notification"/>
                        <Menu src={<Schedule />} desc="Schedule"/>
                        <Menu src={<Fav />} desc="Favorites"/>
                        <Menu src={<Saved />} desc="Saved Anime"/>
                    </div>
                    <div className="flex flex-col mt-auto pb-5 space-y-2 mx-auto ml-3 w-fit">
                        <Menu src={<Notif />} desc="Settings"/>
                        <Menu src={<Schedule />} desc="Help"/>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;