"use client"
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function Contact() {
    return (
        <div>
            <Header currentPage="support"/>
            <Separator/>
            <br /><br />
            <div className="flex items-center min-h-screen flex-col ">
                <Card className="w-96">
                    <CardHeader>
                        <CardTitle>Form Support</CardTitle>
                        <CardDescription>Customer help support form</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action="">
                            <Label>Name</Label>
                            <Input type="text" placeholder="Name" required/>
                            <br />
                            <Label>E-mail</Label>
                            <Input type="email" placeholder="E-mail" required/>
                            <br />
                            <Label>Message</Label>
                            <Textarea className="resize-none" required/>
                            <br /><br />
                            <Button className="w-full" type="submit">Send</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}