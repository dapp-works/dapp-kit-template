import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Check, Globe } from 'lucide-react';

const LocaleSwitcher = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(nextLocale) {
    startTransition(() => {
      router.replace(pathname, undefined, { locale: nextLocale });
    });
  }

  const locales = [
    { value: 'en', label: 'English' },
    { value: 'zh', label: '简体中文' },
    { value: 'zh-tw', label: '繁體中文' },
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'tr', label: 'Türkçe' },
    { value: 'de', label: 'Deutsch' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'pt', label: 'Português' },
    { value: 'ru', label: 'Русский' },
    { value: 'ko', label: '한국어' },
    { value: 'ja', label: '日本語' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isPending}>
        <Globe size={22} />
      </DropdownMenuTrigger>
      <DropdownMenuContent collisionPadding={10} sideOffset={5} className="p-2 space-y-1">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.value}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => {
              onSelectChange(locale.value);
            }}
          >
            {locale.label}
            {router.locale === locale.value && <Check size={18} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
