import { z } from "zod";

import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/config";

export const InputProfileSchema = z.object({
  backgroundImage: z
    .any()
    .refine((file) => file, { message: "Background image is required" })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: "Maximum size is 5 Mb",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.mime), {
      message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
    }),
  profileImage: z
    .any()
    .refine((file) => file, { message: "Profile image is required" })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: "Maximum size is 5 Mb",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.mime), {
      message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
    }),
  profileName: z
    .string()
    .min(3, { message: "Name must be longer than 3 characters" }),
  profileTitle: z
    .string()
    .min(2, { message: "Title must be longer than 3 characters" }),
  profileDescription: z
    .string()
    .min(2, { message: "Description must be longer than 3 characters" }),
  portofolio: z
    .array(
      z.object({
        portofolioPosition: z
          .string()
          .min(2, { message: "Position must be longer than 3 characters" }),
        portofolioCompany: z
          .string()
          .min(2, { message: "Company name must be longer than 3 characters" }),
        portofolioStart: z
          .string()
          .min(4, { message: "Start date is required" }),
        portofolioEnd: z.string().min(4, { message: "Start date is required" }),
        portofolioDescription: z
          .string()
          .min(2, { message: "Description must be longer than 3 characters" }),
      })
    )
    .max(9, { message: "Portofolio can be more than 10" }),
});

export type InputProfileType = z.infer<typeof InputProfileSchema>;
