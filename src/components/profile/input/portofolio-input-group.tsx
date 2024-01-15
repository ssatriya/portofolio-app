"use client";

import * as React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormReturn,
} from "react-hook-form";
import { ChevronsLeftRight, ChevronsRightLeft, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import InputCardWrapper from "@/components/profile/input-card-wrapper";
import { InputProfileType } from "@/schema/profile-input";
import { CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InitialToggleState } from "@/hooks/use-field-toggle";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn, monthAndYear } from "@/lib/utils";
import { MonthPicker } from "@/components/month-picker";
import { Textarea } from "@/components/ui/textarea";

type PortofolioInputGroupProps = {
  fields: FieldArrayWithId<InputProfileType>[];
  handleToggleForm: (formId: number) => void;
  state: InitialToggleState;
  remove: UseFieldArrayRemove;
  form: UseFormReturn<InputProfileType>;
};

const PortofolioInputGroup = ({
  fields,
  handleToggleForm,
  state,
  remove,
  form,
}: PortofolioInputGroupProps) => {
  return fields.map((field, index) => (
    <InputCardWrapper key={field.id}>
      <CardHeader>
        <div className="flex w-full justify-between items-center">
          <FormLabel className="underline underline-offset-4">
            Portofolio {index + 1}
          </FormLabel>
          <div className="flex gap-4">
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleToggleForm(index);
              }}
              size="icon"
              variant="icon"
            >
              {state.portofolioShow[index] ? (
                <ChevronsRightLeft className="w-5 h-5 -rotate-45" />
              ) : (
                <ChevronsLeftRight className="w-5 h-5 -rotate-45" />
              )}
            </Button>
            {index > 0 && (
              <Button size="icon" variant="icon" onClick={() => remove(index)}>
                <XCircle className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <AnimatePresence initial={false}>
        {state.portofolioShow[index] && (
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
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name={`portofolio.${index}.portofolioPosition`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Posisi" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`portofolio.${index}.portofolioCompany`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Perusahaan" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name={`portofolio.${index}.portofolioStart`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !form.getValues(
                                    `portofolio.${index}.portofolioStart`
                                  ) && "text-muted-foreground"
                                )}
                              >
                                {form.getValues(
                                  `portofolio.${index}.portofolioStart`
                                ) ? (
                                  <span>
                                    {monthAndYear(
                                      form.getValues(
                                        `portofolio.${index}.portofolioStart`
                                      )
                                    )}
                                  </span>
                                ) : (
                                  <span>Tanggal Mulai</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="p-0">
                              <MonthPicker
                                currentMonth={new Date()}
                                onMonthChange={(date) => {
                                  field.onChange(date.toString());
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`portofolio.${index}.portofolioEnd`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !form.getValues(
                                    `portofolio.${index}.portofolioEnd`
                                  ) && "text-muted-foreground"
                                )}
                              >
                                {form.getValues(
                                  `portofolio.${index}.portofolioEnd`
                                ) ? (
                                  <span>
                                    {monthAndYear(
                                      form.getValues(
                                        `portofolio.${index}.portofolioEnd`
                                      )
                                    )}
                                  </span>
                                ) : (
                                  <span>Tanggal Selesai</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="p-0">
                              <MonthPicker
                                currentMonth={new Date()}
                                onMonthChange={(date) => {
                                  field.onChange(date.toString());
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name={`portofolio.${index}.portofolioDescription`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea {...field} placeholder="Deskripsi" rows={5} />
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
  ));
};
export default PortofolioInputGroup;
