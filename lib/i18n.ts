import tr from "@/content/tr/common";
import en from "@/content/en/common";
import ar from "@/content/ar/common";
import trHome from "@/content/tr/home";
import enHome from "@/content/en/home";
import arHome from "@/content/ar/home";
import trPages from "@/content/tr/pages";
import enPages from "@/content/en/pages";
import arPages from "@/content/ar/pages";

import type { Locale } from "./locale";

export * from "./locale";

export const getCopy = (locale: Locale) => ({ tr, en, ar })[locale];
export const getHomeCopy = (locale: Locale) => ({ tr: trHome, en: enHome, ar: arHome })[locale];
export const getPagesCopy = (locale: Locale) => ({ tr: trPages, en: enPages, ar: arPages })[locale];
