"use client";

import { Inter } from "next/font/google";

import { cn, monthAndYear } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InputProfileType } from "@/schema/profile-input";

const inter = Inter({ subsets: ["latin"] });

type PortofolioItemProps = {
  portofolio: InputProfileType["portofolio"][0];
};

const PortofolioItem = ({ portofolio }: PortofolioItemProps) => {
  return (
    <Card className="w-full border-none shadow-md">
      <CardHeader className="space-y-0 py-2">
        <p className="font-semibold text-base leading-6">
          {portofolio.portofolioPosition}
        </p>
        <p className="font-semibold text-xs text-[#717984]">
          {portofolio.portofolioCompany}
        </p>
        <p className="text-xs text-[#717984] font-normal">
          {monthAndYear(portofolio.portofolioStart)}{" "}
          {portofolio.portofolioStart ? "—" : null}{" "}
          {monthAndYear(portofolio.portofolioEnd)}
        </p>
      </CardHeader>
      <CardContent>
        <p className={cn(inter.className, "text-xs leading-[18px]")}>
          {portofolio.portofolioDescription}
        </p>
      </CardContent>
    </Card>
  );
};
export default PortofolioItem;
