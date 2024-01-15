"use client";

import { ChevronsLeftRight, ChevronsRightLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { CardContent, CardHeader } from "@/components/ui/card";
import InputCardWrapper from "../input-card-wrapper";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { InitialToggleState } from "@/hooks/use-field-toggle";
import { Control } from "react-hook-form";
import { InputProfileType } from "@/schema/profile-input";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ProfileInputGroupProps = {
  state: InitialToggleState;
  control: Control<InputProfileType>;
  toggleProfile: () => void;
};

const ProfileInputGroup = ({
  state,
  control,
  toggleProfile,
}: ProfileInputGroupProps) => {
  return (
    <InputCardWrapper>
      <CardHeader>
        <div className="flex w-full justify-between items-center">
          <FormLabel className="underline underline-offset-4">
            Profile
          </FormLabel>
          <Button
            onClick={(e) => {
              e.preventDefault();
              toggleProfile();
            }}
            size="icon"
            variant="icon"
          >
            {state.profileShow ? (
              <ChevronsRightLeft className="w-5 h-5 -rotate-45" />
            ) : (
              <ChevronsLeftRight className="w-5 h-5 -rotate-45" />
            )}
          </Button>
        </div>
      </CardHeader>

      <AnimatePresence initial={false}>
        {state.profileShow && (
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
                y: "-10%",
                transition: {
                  duration: 0.5,
                },
                height: 0,
              }}
            >
              <CardContent className="space-y-6">
                <FormField
                  control={control}
                  name="profileName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Nama" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="profileTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Title/Posisi" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="profileDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea rows={5} {...field} placeholder="Deskripsi" />
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
export default ProfileInputGroup;
