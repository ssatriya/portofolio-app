"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { UseFieldArrayAppend } from "react-hook-form";
import { InputProfileType } from "@/schema/profile-input";

type ProfileWrapperProps = {
  children: React.ReactNode;
  append: UseFieldArrayAppend<InputProfileType, "portofolio">;
  isDirty: boolean;
};

const ProfileWrapper = ({ children, append, isDirty }: ProfileWrapperProps) => {
  return (
    <div className="p-3 h-full overflow-y-hidden">
      <div className="flex gap-4 mb-8">
        <Button
          variant="primary"
          onClick={() => {
            append({
              portofolioPosition: "",
              portofolioCompany: "",
              portofolioStart: "",
              portofolioEnd: "",
              portofolioDescription: "",
            });
          }}
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Portofolio
        </Button>
        <Button
          variant="primaryFill"
          form="profile-post-form"
          type="submit"
          disabled={!isDirty}
        >
          Simpan Perubahan
        </Button>
      </div>
      <div className="flex 2xl:gap-11 xl:gap-6 gap-4">{children}</div>
    </div>
  );
};
export default ProfileWrapper;
