import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result && typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to read the file."));
      }
    };

    reader.onerror = () => {
      reject(new Error("Error reading the file."));
    };

    reader.readAsDataURL(file);
  });
}

export function monthAndYear(dateString: string) {
  if (!dateString) {
    return null;
  }
  return format(dateString, "MMMM yyyy", {
    locale: id,
  });
}
