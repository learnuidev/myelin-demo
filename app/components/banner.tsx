"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Banner = () => {
  const { t } = useTranslation(["banner", "common"]);
  return (
    <section className="flex flex-col justify-center items-center mt-32">
      <h1 className="text-5xl font-bold">{t("banner:title")}</h1>

      <p className="mt-4 text-xl font-mono">{t("banner:description")}</p>

      <Button className="rounded-full mt-4">{t("cta")}</Button>
    </section>
  );
};
