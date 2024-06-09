import Image from "next/image"
import logo from "@/assets/logo.png"
import { Button } from "./ui/button"
import { Search } from "lucide-react"

interface CurrentPage{
    currentPage: 'home' | 'allNews' | 'support' | 'about'
}

export function Header({currentPage}: CurrentPage) {
    return (
        <header className="flex justify-between mx-2">
            <Image src={logo} alt="" width={100}/>
            
            <div className="flex items-center">
                <a className={`mx-4 ${currentPage === "home" ? 'font-bold underline' : ''}`} href="/">Home</a>
                <a className={`mx-4 ${currentPage === "allNews" ? 'font-bold underline' : ''}`} href="#">All News</a>
                <a className={`mx-4 ${currentPage === "support" ? 'font-bold underline' : ''}`} href="/support">Support</a>
                <a className={`mx-4 ${currentPage === "about" ? 'font-bold underline' : ''}`} href="#">About</a>
            </div>
            <div className="flex items-center">
                <Button className="mr-2 rounded-full" variant="outline"><a className="flex" href="#"><Search className="mr-2"/>Search</a></Button>
                <Button className="rounded-2xl" variant="outline"><a href="#">Create Account</a></Button>
            </div>
        </header>
    )
}