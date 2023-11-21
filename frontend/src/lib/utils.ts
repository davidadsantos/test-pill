import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cx(...args: classNames.ArgumentArray) {
  return classNames(args);
}
