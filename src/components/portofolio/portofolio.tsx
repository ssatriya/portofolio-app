"use client";

import * as React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useReadLocalStorage } from "usehooks-ts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import PortofolioItem from "@/components/portofolio/portofolio-item";
import { InputProfileType } from "@/schema/profile-input";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const Portofolio = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const localPorto = useReadLocalStorage<InputProfileType>("porto");

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Card className="bg-white xl:w-[1000px] lg:w-[950px] md:w-[750px] min-w-[375px]">
      <CardHeader className="w-full h-60 relative flex flex-col items-center">
        <Image
          src={localPorto?.backgroundImage?.base64 || "/background.jpg"}
          fill
          alt="Background cover"
          className="bg-cover rounded-t-lg"
        />
        <div className="absolute -bottom-12">
          <Avatar className="h-40 w-40">
            <AvatarImage
              src={localPorto?.profileImage?.base64 || "/avatar.jpg"}
            />
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="mt-16">
        <div
          className={cn(
            inter.className,
            "w-full flex flex-col items-center text-center"
          )}
        >
          <h1 className="font-bold text-2xl leading-8">
            {localPorto?.profileName}
          </h1>
          <p className="font-bold text-lg leading-5 text-[#878787]">
            {localPorto?.profileTitle}
          </p>
          <p className="text-xs leading-5 max-w-[300px]">
            {localPorto?.profileDescription}
          </p>
        </div>
        <div className="lg:px-10 mt-5 space-y-2">
          <h1
            className={cn(
              inter.className,
              "text-left font-bold text-base leading-5 max-md:text-center w-full"
            )}
          >
            Portofolio
          </h1>
          <div className="flex-col flex items-center space-y-3">
            {localPorto?.portofolio.map((porto, index) => (
              <PortofolioItem key={index} portofolio={porto} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Portofolio;
