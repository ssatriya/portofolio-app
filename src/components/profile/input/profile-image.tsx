"use client";

import { Control, UseFormSetValue } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import { CardContent, CardHeader } from "@/components/ui/card";
import InputCardWrapper from "@/components/profile/input-card-wrapper";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ChevronsLeftRight, ChevronsRightLeft } from "lucide-react";
import { InitialToggleState } from "@/hooks/use-field-toggle";
import { InputProfileType } from "@/schema/profile-input";
import DropzoneInput from "@/components/profile/dropzone-input";

type ProfileImageProps = {
  state: InitialToggleState;
  control: Control<InputProfileType>;
  setValue: UseFormSetValue<InputProfileType>;
  toggleProfileImage: () => void;
};

const ProfileImage = ({
  state,
  control,
  setValue,
  toggleProfileImage,
}: ProfileImageProps) => {
  return (
    <InputCardWrapper>
      <CardHeader>
        <div className="flex w-full justify-between items-center">
          <FormLabel className="underline underline-offset-4">
            Profile Image
          </FormLabel>
          <Button
            onClick={(e) => {
              e.preventDefault();
              toggleProfileImage();
            }}
            size="icon"
            variant="icon"
          >
            {state.profileImageShow ? (
              <ChevronsRightLeft className="w-5 h-5 -rotate-45" />
            ) : (
              <ChevronsLeftRight className="w-5 h-5 -rotate-45" />
            )}
          </Button>
        </div>
      </CardHeader>
      <AnimatePresence initial={false}>
        {state.profileImageShow && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: "-10%" }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                y: "-20%",
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <CardContent>
                <FormField
                  control={control}
                  name="profileImage"
                  render={({ field: { onChange, onBlur }, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <DropzoneInput
                          setValue={setValue}
                          onChange={onChange}
                          onBlur={onBlur}
                          fieldState={fieldState}
                          name="profileImage"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </InputCardWrapper>
  );
};
export default ProfileImage;
