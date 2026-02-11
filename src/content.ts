export type Locale = 'en' | 'ru' | 'sr-Lat'

type BlogPost = {
  id: string
  title: string
  excerpt: string
  date: string
  featured?: boolean
}

export type LocaleContent = {
  nav: {
    home: string
    about: string
    blog: string
    contact: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  highlights: {
    title: string
    items: string[]
  }
  request: {
    title: string
    description: string
    name: string
    level: string
    goal: string
    contact: string
    submit: string
    note: string
  }
  about: {
    title: string
    summary: string
    specialtiesTitle: string
    specialties: string[]
    experienceTitle: string
    experience: string[]
    educationTitle: string
    education: string[]
  }
  blog: {
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
    locationLabel: string
    emailLabel: string
    phoneLabel: string
  }
  footer: string
  blogPosts: BlogPost[]
}

export const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'sr-Lat', label: 'SR-Lat' },
]

export const content: Record<Locale, LocaleContent> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      badge: 'English tutor in Novi Sad / Online',
      title: 'Valerii Linden',
      subtitle:
        'Practical, confidence-building English lessons for A1-B1 learners. Clear grammar, speaking-first practice, and real-life communication.',
      ctaPrimary: 'Request a class',
      ctaSecondary: 'See the blog',
    },
    highlights: {
      title: 'Teaching focus',
      items: [
        'Structured A1-B1 programs with steady progress and review',
        'Speaking-first lessons with systematic grammar and vocabulary growth',
        'Business English foundations: emails, meetings, polite requests',
        'Pronunciation and listening support for clearer speech',
      ],
    },
    request: {
      title: 'Request a class',
      description:
        'Tell me your goal and level. Soon this request will go to me.',
      name: 'Your name',
      level: 'Current level (A1-B1)',
      goal: 'Main goal',
      contact: 'Preferred contact',
      submit: 'Send request',
      note: 'No payment or booking yet. This is a simple request form.',
    },
    about: {
      title: 'About me',
      summary:
        'English tutor with 5 years of international business communication experience. Since 2025 I have been teaching private English classes for A1-B1 learners, building speaking confidence and real-life skills.',
      specialtiesTitle: 'Teaching specialties',
      specialties: [
        'Speaking-first approach with clear grammar rules and guided practice',
        'Goal-based study plans and needs analysis',
        'Business English foundations for workplace communication',
        'Cross-cultural communication for international partners',
      ],
      experienceTitle: 'Experience',
      experience: [
        'Private English Tutor (2025 - present) — 1:1 classes, structured lessons, practical communication scenarios.',
        'Lead Chemical Engineer (2020 - 2025) — professional English correspondence with international counterparties.',
        'Chemistry Tutor (2018 - 2020) — exam preparation and structured training plans.',
      ],
      educationTitle: 'Education & certifications',
      education: [
        'MSc in Chemistry, Southern Federal University (2018 - 2020)',
        'TOEFL (2020) — B2 level, continued improvement since',
      ],
    },
    blog: {
      title: 'Blog',
      subtitle: 'Short, practical articles to help you speak and write with confidence.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Open for new students in Novi Sad and online.',
      locationLabel: 'Location',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
    },
    footer: 'Linden English. Private lessons, speaking confidence, real-life English.',
    blogPosts: [
      {
        id: 'small-talk',
        title: 'Small Talk for Real Situations',
        excerpt:
          'Simple questions and answers that help you start conversations without feeling awkward.',
        date: '2026-02-01',
        featured: true,
      },
      {
        id: 'email-clarity',
        title: 'Clear Business Emails in 5 Steps',
        excerpt:
          'A repeatable structure for polite requests, updates, and follow-ups.',
        date: '2026-01-18',
        featured: true,
      },
      {
        id: 'pronunciation',
        title: 'Pronunciation: The 3 Sounds That Change Meaning',
        excerpt:
          'Practice the sounds that cause the most misunderstandings for A1-B1 learners.',
        date: '2026-01-05',
      },
      {
        id: 'grammar-confidence',
        title: 'Grammar Without Fear',
        excerpt:
          'How to learn grammar rules and still speak naturally.',
        date: '2025-12-22',
      },
    ],
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      blog: 'Блог',
      contact: 'Контакты',
    },
    hero: {
      badge: 'Преподаватель английского в Нови-Саде / Онлайн',
      title: 'Валерий Линден',
      subtitle:
        'Практичные занятия для уровней A1-B1: уверенная речь, понятная грамматика и живое общение.',
      ctaPrimary: 'Запросить урок',
      ctaSecondary: 'Перейти в блог',
    },
    highlights: {
      title: 'Фокус обучения',
      items: [
        'Структурные программы A1-B1 с устойчивым прогрессом',
        'Упор на разговор с системным ростом грамматики и словаря',
        'База Business English: письма, встречи, вежливые просьбы',
        'Произношение и аудирование для более четкой речи',
      ],
    },
    request: {
      title: 'Запросить урок',
      description:
        'Опишите цель и уровень. В будущем запрос будет отправлен мне.',
      name: 'Ваше имя',
      level: 'Текущий уровень (A1-B1)',
      goal: 'Главная цель',
      contact: 'Как связаться',
      submit: 'Отправить запрос',
      note: 'Это не оплата и не бронирование, а простой запрос.',
    },
    about: {
      title: 'Обо мне',
      summary:
        'Преподаватель английского с 5-летним опытом международной деловой коммуникации. С 2025 года веду индивидуальные занятия для уровней A1-B1, развивая уверенную речь и практические навыки.',
      specialtiesTitle: 'Специализации',
      specialties: [
        'Разговорный подход с понятными правилами грамматики и практикой',
        'План обучения от целей и потребностей ученика',
        'Базовый Business English для рабочей коммуникации',
        'Межкультурная коммуникация для международных партнеров',
      ],
      experienceTitle: 'Опыт',
      experience: [
        'Частный преподаватель английского (2025 - настоящее) — индивидуальные занятия, структурные уроки, практические сценарии.',
        'Ведущий химический инженер (2020 - 2025) — деловая переписка на английском.',
        'Репетитор по химии (2018 - 2020) — подготовка к экзаменам и учебные планы.',
      ],
      educationTitle: 'Образование и сертификаты',
      education: [
        'Магистр химии, Южный федеральный университет (2018 - 2020)',
        'TOEFL (2020) — уровень B2, продолжаю повышать уровень',
      ],
    },
    blog: {
      title: 'Блог',
      subtitle: 'Короткие практичные статьи для уверенной речи и письма.',
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Открыт к новым ученикам в Нови-Саде и онлайн.',
      locationLabel: 'Локация',
      emailLabel: 'Email',
      phoneLabel: 'Телефон',
    },
    footer: 'Linden English. Индивидуальные занятия и уверенная речь.',
    blogPosts: [
      {
        id: 'small-talk',
        title: 'Small Talk для реальных ситуаций',
        excerpt:
          'Простые вопросы и ответы, которые помогают начать разговор без неловкости.',
        date: '2026-02-01',
        featured: true,
      },
      {
        id: 'email-clarity',
        title: 'Понятные деловые письма за 5 шагов',
        excerpt:
          'Структура для вежливых просьб, обновлений и follow-up.',
        date: '2026-01-18',
        featured: true,
      },
      {
        id: 'pronunciation',
        title: 'Произношение: 3 звука, которые меняют смысл',
        excerpt:
          'Практика самых сложных звуков для уровней A1-B1.',
        date: '2026-01-05',
      },
      {
        id: 'grammar-confidence',
        title: 'Грамматика без страха',
        excerpt:
          'Как учить правила и при этом говорить естественно.',
        date: '2025-12-22',
      },
    ],
  },
  'sr-Lat': {
    nav: {
      home: 'Pocetna',
      about: 'O meni',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    hero: {
      badge: 'Profesor engleskog u Novom Sadu / Online',
      title: 'Valerii Linden',
      subtitle:
        'Prakticne lekcije za nivoe A1-B1. Jasna gramatika, govor na prvom mestu i komunikacija iz stvarnog zivota.',
      ctaPrimary: 'Zahtev za cas',
      ctaSecondary: 'Otvori blog',
    },
    highlights: {
      title: 'Fokus nastave',
      items: [
        'Strukturisani A1-B1 programi sa stabilnim napretkom',
        'Govor na prvom mestu uz sistematicnu gramatiku i recnik',
        'Osnove Business English: mejlovi, sastanci, ljubazni zahtevi',
        'Izgovor i slusanje za jasniji govor',
      ],
    },
    request: {
      title: 'Zahtev za cas',
      description:
        'Napisite cilj i nivo. U buducnosti ce zahtev ici do mene.',
      name: 'Vase ime',
      level: 'Trenutni nivo (A1-B1)',
      goal: 'Glavni cilj',
      contact: 'Kontakt',
      submit: 'Posalji zahtev',
      note: 'Ovo nije naplata ni rezervacija, vec samo zahtev.',
    },
    about: {
      title: 'O meni',
      summary:
        'Profesor engleskog sa 5 godina iskustva u medjunarodnoj poslovnoj komunikaciji. Od 2025. godine drzim individualne casove za nivoe A1-B1 sa fokusom na samopouzdanje u govoru.',
      specialtiesTitle: 'Specijalnosti',
      specialties: [
        'Govor na prvom mestu uz jasna pravila gramatike i praksu',
        'Plan ucenja prema ciljevima i potrebama',
        'Osnove poslovnog engleskog za radnu komunikaciju',
        'Medjukulturna komunikacija sa inostranim partnerima',
      ],
      experienceTitle: 'Iskustvo',
      experience: [
        'Privatni profesor engleskog (2025 - danas) — 1:1 casovi, strukturisane lekcije, prakticni scenariji.',
        'Glavni hemijski inzenjer (2020 - 2025) — poslovna komunikacija na engleskom.',
        'Tutor iz hemije (2018 - 2020) — priprema za ispite i planovi ucenja.',
      ],
      educationTitle: 'Obrazovanje i sertifikati',
      education: [
        'MSc hemija, Southern Federal University (2018 - 2020)',
        'TOEFL (2020) — B2 nivo, nastavak usavrsavanja',
      ],
    },
    blog: {
      title: 'Blog',
      subtitle: 'Kratki prakticni tekstovi za sigurniji govor i pisanje.',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Slobodan za nove ucenike u Novom Sadu i online.',
      locationLabel: 'Lokacija',
      emailLabel: 'Email',
      phoneLabel: 'Telefon',
    },
    footer: 'Linden English. Individualni casovi i samopouzdanje u govoru.',
    blogPosts: [
      {
        id: 'small-talk',
        title: 'Small Talk u stvarnim situacijama',
        excerpt:
          'Jednostavna pitanja i odgovori za lak pocetak razgovora.',
        date: '2026-02-01',
        featured: true,
      },
      {
        id: 'email-clarity',
        title: 'Jasni poslovni mejlovi u 5 koraka',
        excerpt:
          'Struktura za ljubazne zahteve, azuriranja i follow-up.',
        date: '2026-01-18',
        featured: true,
      },
      {
        id: 'pronunciation',
        title: 'Izgovor: 3 zvuka koja menjaju znacenje',
        excerpt:
          'Vezbe za zvukove koji najcesce zbunjuju A1-B1 nivo.',
        date: '2026-01-05',
      },
      {
        id: 'grammar-confidence',
        title: 'Gramatika bez straha',
        excerpt:
          'Kako uciti pravila i pritom govoriti prirodno.',
        date: '2025-12-22',
      },
    ],
  },
}
