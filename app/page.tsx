import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { Banner } from "./components/banner";

export default function Home() {
  return (
    <div>
      <LanguageSwitcher />
      <Banner />
    </div>
  );
}
