import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function renameTypeTour(name) {
  let parts = name.split("-");
  for (var i = 0; i < parts.length; i++) {
      parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
  }
  parts.splice(1, 0, "Tours");
  const outputString = parts.slice(0, parts.length - 1).join(" ") + " - " + parts[parts.length - 1];

  return outputString;
}