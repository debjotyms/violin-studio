"use client";

import * as React from "react";
import { useLanguage } from "@/context/language-context";
import { Button } from "./ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
      className="w-10 h-9 px-0 font-bold"
    >
      {language === 'en' ? 'BN' : 'EN'}
    </Button>
  );
}
