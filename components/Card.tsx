import Image from "next/image";
import { ArrowRightCircle, Calendar, MessageCircle } from "lucide-react";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface CardProps{
    image: any
    calendar: string
    comments: number
    title: string
    description: string
}

export function Card({image, calendar, comments, title, description}: CardProps) {
    return (
        <div className="w-96 m-5">
            <Image src={image} className="w-full" alt="descricao da imagem"/>
            <div className="flex justify-between text-neutral-400 text-sm"> 
                <div className="flex items-center">
                    <Calendar className="mr-3"/>
                    <p>{calendar}</p>
                </div>
                <div className="flex items-center">
                    <MessageCircle/>
                    <p className="ml-3">{comments}</p>
                </div>
            </div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm text-neutral-500"> {description}</p>
            <Separator className="my-4"/>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Avatar className="mr-2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>Eduardo Leal</span>
                </div>
                <Button>Leia Mais<ArrowRightCircle/></Button>
            </div>
        </div>
    )
}