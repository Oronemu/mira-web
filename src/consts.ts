// Single source of truth for branding strings and links.
// Sync any updates here back into the iOS app's Settings if user-facing.

export const SITE = {
  domain: 'mira-diary.com',
  url: 'https://mira-diary.com',
  name: 'Mira',
  tagline: {
    en: 'Offline journal with on-device reflection',
    ru: 'Офлайн-дневник с рефлексией на устройстве',
  },
  description: {
    en: 'A private iOS journal. Your words stay on your device — an on-device language model helps you reflect without sending your writing anywhere.',
    ru: 'Приватный iOS-дневник. Ваши слова остаются на устройстве — встроенная языковая модель помогает рефлексировать, не отправляя записи никуда.',
  },
  supportEmail: 'support@mira-diary.com',
  developer: 'Ivan Rovkov',
  bundleId: 'com.veilbytesoft.Mira',
  appStoreUrl: 'https://apps.apple.com/app/mira-your-personal-diary/id6763016649',
  github: 'https://github.com/Oronemu',
} as const;

export type Locale = 'en' | 'ru';
export const LOCALES: Locale[] = ['en', 'ru'];
export const DEFAULT_LOCALE: Locale = 'en';
