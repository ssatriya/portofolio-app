"use client";

import * as React from "react";
import { Poppins } from "next/font/google";
import { Paperclip } from "lucide-react";
import Dropzone, { FileWithPath } from "react-dropzone";
import { ControllerFieldState, Noop, UseFormSetValue } from "react-hook-form";

import { InputProfileType } from "@/schema/profile-input";
import { cn, convertImageToBase64 } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "400"] });

type DropzoneInputProps = {
  setValue: UseFormSetValue<InputProfileType>;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  fieldState: ControllerFieldState;
  name: "backgroundImage" | "profileImage";
};

const DropzoneInput = ({
  setValue,
  onChange,
  onBlur,
  fieldState,
  name,
}: DropzoneInputProps) => {
  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFiles) => {
        const [fileDetail] = acceptedFiles.map(async (file) => ({
          blob: URL.createObjectURL(file),
          file: file,
          mime: file.type,
          name: file.name,
          extension: file.name.split(".").pop() as string,
          size: file.size.toString(),
          base64: await convertImageToBase64(file),
        }));
        const imageData = await fileDetail;
        console.log(imageData);

        setValue(name, imageData as unknown as FileWithPath, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      }}
    >
      {({ getRootProps, getInputProps, open, isDragActive, acceptedFiles }) => (
        <div>
          <div
            className="bg-[#EBEBEB] w-full h-48 rounded-md flex items-center justify-center cursor-pointer"
            {...getRootProps()}
          >
            <input
              {...getInputProps({
                onChange,
                onBlur,
              })}
            />
            <div className="flex flex-col items-center">
              {acceptedFiles.length ? (
                <p
                  className={cn(
                    poppins.className,
                    "font-medium text-[#6B6B6B] text-sm underline underline-offset-4"
                  )}
                >
                  {acceptedFiles[0].name}
                </p>
              ) : (
                <div className="flex flex-col gap-1 items-center">
                  <Paperclip className="h-5 w-5 rotate-45 text-[#6B6B6B]" />
                  <p
                    className={cn(
                      poppins.className,
                      "font-medium text-[#6B6B6B] text-sm underline underline-offset-4"
                    )}
                  >
                    Drag and drop files, or{" "}
                    <span className="text-[#0584F9]">Browse</span>
                  </p>
                  <p
                    className={cn(
                      poppins.className,
                      "text-[#9F9F9F] text-xs leading-4 underline underline-offset-4"
                    )}
                  >
                    Support formats: png, jpg, jpeg, mp4.
                  </p>
                  <p
                    className={cn(
                      poppins.className,
                      "text-[#9F9F9F] text-xs leading-4 underline underline-offset-4"
                    )}
                  >
                    Max size: 5Mb.
                  </p>
                </div>
              )}

              {/* On upload box error message */}
              {/* <div>
                {fieldState.error && (
                  <p
                    className={cn(
                      poppins.className,
                      "text-destructive text-xs leading-4 underline underline-offset-4"
                    )}
                  >
                    {fieldState.error.message}
                  </p>
                )}
              </div> */}
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  );
};
export default DropzoneInput;
