"use client";

import { Card } from "@/components/ui/card";

type InputCardWrapperProps = {
  children: React.ReactNode;
};

const InputCardWrapper = ({ children }: InputCardWrapperProps) => {
  return (
    <Card className="bg-white 2xl:w-[900px] xl:w-[600px] lg:w-[440px] max-lg:w-[700px] max-sm:w-[340px]">
      {children}
    </Card>
  );
};
export default InputCardWrapper;
