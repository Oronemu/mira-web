// All UI translations live here. Keys are flat strings with namespaced prefixes.

import type { Locale } from '../consts';

export const ui = {
  en: {
    'nav.features': 'Features',
    'nav.privacy': 'Privacy',
    'nav.philosophy': 'Philosophy',
    'nav.faq': 'FAQ',
    'nav.support': 'Support',
    'nav.download': 'Download',

    'hero.eyebrow': 'A quiet companion for your thoughts',
    'hero.title.a': 'A journal that',
    'hero.title.b': 'listens',
    'hero.title.c': 'in private.',
    'hero.subtitle':
      'Mira is an iOS journal that reflects with you on-device. Your words never leave your iPhone unless you choose end-to-end encrypted iCloud sync.',
    'hero.cta.primary': 'Download on the App Store',
    'hero.cta.secondary': 'See what Mira does',
    'hero.cta.coming': 'Coming soon',

    'features.eyebrow': 'What Mira does',
    'features.title': 'Built for the slow act of writing',

    'features.write.title': 'Write, with mood and place',
    'features.write.body':
      'Daily entries with mood, photos, tags, and locations — soft typography, large editor, no friction.',

    'features.local.title': 'Reflection without the cloud',
    'features.local.body':
      'A language model runs entirely on your iPhone. Weekly reflections, summaries, and prompts — all local, no network needed.',

    'features.ask.title': 'Ask Mira',
    'features.ask.body':
      'A private chat with your own past. Mira reasons over your entries with semantic search to surface what you actually wrote.',

    'features.calendar.title': 'Calendar & search',
    'features.calendar.body':
      'Browse a month at a glance, scrub mood across weeks, search by word or feeling.',

    'features.sync.title': 'Optional encrypted iCloud',
    'features.sync.body':
      'When you enable sync, your entries are end-to-end encrypted by Apple — only your devices can read them.',

    'features.lock.title': 'Biometric lock',
    'features.lock.body':
      'Face ID or Touch ID protects the journal at the system level. Even on a shared device, it stays yours.',

    'philosophy.eyebrow': 'Why Mira',
    'philosophy.title': 'A journal can be loud, or it can listen.',
    'philosophy.body':
      'Most apps that promise reflection turn your private thoughts into ad signal or model training data. Mira does the opposite. It is built around one principle — your writing is yours. The on-device model reads it; the cloud does not.',
    'philosophy.quote':
      '"You have power over your mind — not outside events. Realize this, and you will find strength."',
    'philosophy.quote.attribution': 'Marcus Aurelius',

    'privacy.eyebrow': 'Privacy by architecture',
    'privacy.title': 'Three promises, kept by the code.',

    'privacy.local.title': 'Your writing stays local',
    'privacy.local.body':
      'Entries, photos, embeddings, and AI prompts never leave your iPhone. Even with cloud AI, only your single question and a small relevant excerpt go to the model — never your whole journal.',

    'privacy.telemetry.title': 'No content in telemetry',
    'privacy.telemetry.body':
      'Anonymous usage events (which screens, which features) help improve the app. Your entries — text, mood, photos, locations — are never logged, never sent, never seen.',

    'privacy.encrypted.title': 'iCloud sync is end-to-end',
    'privacy.encrypted.body':
      'Optional sync uses Apple\'s end-to-end encryption: only your signed-in devices hold the keys. Apple cannot read your journal, and neither can we.',

    'ai.eyebrow': 'How Mira thinks',
    'ai.title': 'Two minds, both yours to choose.',
    'ai.local.label': 'On-device · free',
    'ai.local.title': 'On-device language model',
    'ai.local.body':
      'A small, fast language model that runs entirely on your iPhone. No network, no limits, no telemetry of what you wrote.',
    'ai.cloud.label': 'Cloud · with Mira Pro',
    'ai.cloud.title': 'Cloud AI by subscription',
    'ai.cloud.body':
      'Mira Pro adds a more capable cloud model — Claude. Mira sends only your question and a brief excerpt of relevant entries; the rest of your journal stays on the phone.',

    'faq.eyebrow': 'Common questions',
    'faq.title': 'Quick answers',
    'faq.see_all': 'See all FAQ in the app · Settings → Help & support',

    'cta.title': 'Start tonight.',
    'cta.body':
      'A handful of words before sleep. Mira will be there tomorrow, the day after, and a year from now — quietly, on your device.',

    'footer.tagline': 'A quiet, on-device journal.',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'EULA',
    'footer.legal.support': 'Support',
    'footer.copy': '© 2026 Ivan Rovkov · Made with care.',
    'footer.lang': 'Language',

    'support.title': 'Support',
    'support.intro':
      'Most questions are answered inside the app — open Settings → Help & support to see the full FAQ. For anything else, email us. We read everything.',
    'support.email.label': 'Write us at',
    'support.cta': 'Email support',
    'support.faq.title': 'Frequently asked',

    'legal.privacy.title': 'Privacy Policy',
    'legal.terms.title': 'EULA',
    'legal.last_updated': 'Last updated',
    'legal.back': 'Back home',

    '404.title': 'Lost a page',
    '404.body': 'This corner of Mira does not exist. Let\'s head back.',
    '404.cta': 'Back home',
  },

  ru: {
    'nav.features': 'Функции',
    'nav.privacy': 'Приватность',
    'nav.philosophy': 'Философия',
    'nav.faq': 'Вопросы',
    'nav.support': 'Поддержка',
    'nav.download': 'Скачать',

    'hero.eyebrow': 'Тихий собеседник для ваших мыслей',
    'hero.title.a': 'Дневник, который',
    'hero.title.b': 'слушает',
    'hero.title.c': 'наедине.',
    'hero.subtitle':
      'Mira — iOS-дневник, который рефлексирует вместе с вами прямо на устройстве. Ваши слова не покидают iPhone, если вы сами не включите end-to-end шифрованную синхронизацию через iCloud.',
    'hero.cta.primary': 'Скачать в App Store',
    'hero.cta.secondary': 'Что умеет Mira',
    'hero.cta.coming': 'Скоро',

    'features.eyebrow': 'Что умеет Mira',
    'features.title': 'Сделано для медленного письма',

    'features.write.title': 'Пишите — с настроением и местом',
    'features.write.body':
      'Ежедневные записи с настроением, фото, тегами и локацией. Мягкая типографика, большой редактор, ничего лишнего.',

    'features.local.title': 'Рефлексия без облака',
    'features.local.body':
      'Языковая модель работает полностью на iPhone. Еженедельные обзоры, саммари, подсказки — всё локально, сеть не нужна.',

    'features.ask.title': 'Спросите Mira',
    'features.ask.body':
      'Приватный диалог с вашим прошлым. Mira рассуждает над записями через семантический поиск и поднимает то, что вы действительно написали.',

    'features.calendar.title': 'Календарь и поиск',
    'features.calendar.body':
      'Смотрите месяц одним взглядом, отслеживайте настроение по неделям, ищите по слову или ощущению.',

    'features.sync.title': 'Опциональный шифрованный iCloud',
    'features.sync.body':
      'Когда включаете синхронизацию, записи защищены end-to-end шифрованием Apple — прочитать их могут только ваши устройства.',

    'features.lock.title': 'Биометрический замок',
    'features.lock.body':
      'Face ID или Touch ID защищают дневник на уровне системы. Даже на общем устройстве он остаётся вашим.',

    'philosophy.eyebrow': 'Почему Mira',
    'philosophy.title': 'Дневник может говорить — или слушать.',
    'philosophy.body':
      'Большинство приложений, обещающих рефлексию, превращают ваши мысли в рекламные сигналы или обучающие данные. Mira делает наоборот. Она построена вокруг одного принципа: ваше письмо принадлежит вам. Локальная модель читает его; облако — нет.',
    'philosophy.quote':
      '«Ты властен над своим разумом — а не над внешними событиями. Осознай это, и ты обретёшь силу.»',
    'philosophy.quote.attribution': 'Марк Аврелий',

    'privacy.eyebrow': 'Приватность по архитектуре',
    'privacy.title': 'Три обещания, которые держит сам код.',

    'privacy.local.title': 'Письмо остаётся локально',
    'privacy.local.body':
      'Записи, фото, эмбеддинги и AI-промпты не покидают iPhone. Даже с облачным AI отправляются только конкретный вопрос и небольшой релевантный фрагмент — никогда весь дневник.',

    'privacy.telemetry.title': 'В телеметрии нет содержимого',
    'privacy.telemetry.body':
      'Анонимные события использования (какие экраны, какие функции) помогают улучшать приложение. Ваши записи — текст, настроение, фото, локации — никогда не логируются, не отправляются и не видны нам.',

    'privacy.encrypted.title': 'Синхронизация iCloud — end-to-end',
    'privacy.encrypted.body':
      'Опциональная синхронизация использует end-to-end шифрование Apple: ключи есть только у ваших устройств. Apple не может прочитать дневник — и мы тоже.',

    'ai.eyebrow': 'Как Mira думает',
    'ai.title': 'Два разума — выбирайте свой.',
    'ai.local.label': 'На устройстве · бесплатно',
    'ai.local.title': 'Локальная языковая модель',
    'ai.local.body':
      'Компактная и быстрая языковая модель, которая работает целиком на iPhone. Без сети, без лимитов, без телеметрии того, что вы написали.',
    'ai.cloud.label': 'Облако · с Mira Pro',
    'ai.cloud.title': 'Облачный AI по подписке',
    'ai.cloud.body':
      'Mira Pro добавляет более сильную облачную модель — Claude. Mira отправляет только ваш вопрос и небольшой релевантный фрагмент записей; остальной дневник остаётся на телефоне.',

    'faq.eyebrow': 'Частые вопросы',
    'faq.title': 'Короткие ответы',
    'faq.see_all': 'Полный FAQ — в приложении: Настройки → Помощь и поддержка',

    'cta.title': 'Начните сегодня вечером.',
    'cta.body':
      'Несколько слов перед сном. Mira будет здесь и завтра, и через год — тихо, на вашем устройстве.',

    'footer.tagline': 'Тихий дневник, который работает на устройстве.',
    'footer.legal.privacy': 'Политика конфиденциальности',
    'footer.legal.terms': 'EULA',
    'footer.legal.support': 'Поддержка',
    'footer.copy': '© 2026 Иван Ровков · Сделано с заботой.',
    'footer.lang': 'Язык',

    'support.title': 'Поддержка',
    'support.intro':
      'Большинство вопросов закрыты внутри приложения — откройте Настройки → Помощь и поддержка для полного FAQ. Если не нашли ответ — напишите нам. Мы читаем всё.',
    'support.email.label': 'Пишите на',
    'support.cta': 'Написать в поддержку',
    'support.faq.title': 'Частые вопросы',

    'legal.privacy.title': 'Политика конфиденциальности',
    'legal.terms.title': 'EULA',
    'legal.last_updated': 'Последнее обновление',
    'legal.back': 'На главную',

    '404.title': 'Страница потерялась',
    '404.body': 'Этого уголка Mira не существует. Давайте вернёмся.',
    '404.cta': 'На главную',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key] ?? ui.en[key] ?? key;
}
