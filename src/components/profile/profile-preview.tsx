"use client";

import * as React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { InputProfileType } from "@/schema/profile-input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PortofolioItem from "@/components/portofolio/portofolio-item";

const inter = Inter({ subsets: ["latin"] });

type ProfilePreviewProps = {
  watchedForm: InputProfileType;
};

const ProfilePreview = ({ watchedForm }: ProfilePreviewProps) => {
  return (
    <Card className="bg-white 2xl:w-[655px] xl:w-[600px] lg:w-[470px] max-lg:hidden h-fit">
      <CardHeader className="w-full h-60 relative flex flex-col items-center">
        <Image
          src={watchedForm.backgroundImage?.base64 || "/background.jpg"}
          fill
          alt="Background cover"
          className="bg-cover rounded-t-lg"
        />
        <div className="absolute -bottom-12">
          <Avatar className="h-40 w-40">
            <AvatarImage
              src={watchedForm.profileImage?.base64 || "/avatar.jpg"}
            />
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="mt-16">
        <div
          className={cn(inter.className, "w-full flex flex-col items-center")}
        >
          <h1 className="font-bold text-2xl leading-8">
            {watchedForm.profileName}
          </h1>
          <p className="font-bold text-lg leading-5 text-[#878787]">
            {watchedForm.profileTitle}
          </p>
          <p className="text-xs leading-5 text-center max-w-[300px]">
            {watchedForm.profileDescription}
          </p>
        </div>
        <div className="xl:px-10 mt-5 space-y-2">
          <h1
            className={cn(
              inter.className,
              "text-left font-bold text-base leading-5"
            )}
          >
            Portofolio
          </h1>
          <div className="flex-col flex items-center space-y-3">
            {watchedForm.portofolio.map((porto, index) => (
              <PortofolioItem key={index} portofolio={porto} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ProfilePreview;
