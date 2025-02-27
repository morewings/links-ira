import {
    Envelope,
    TelegramLogo,
    LinkedinLogo,
    FileText,
    Scroll,
} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
import image from '@/card-image.jpg';

export const config: Config = {
    // Set your or company name
    title: 'Irina Ikhilchik',
    // Add a brief description to display below name
    bio: 'BASF Senior expert',
    // Select a background style
    background: 'sunset',
    cardImage: image,
    // Set your Google Analytics id to enable
    // gaId: 'G-XXXXXXXXX',
    // Localise sharing text
    shareTitle: 'Share link',
    // Set icon links to contact you to display below the header
    headerLinks: [
        {
            title: 'Email',
            id: 'email',
            url: 'mailto:irina.ikhilchik@gmail.com',
            icon: Envelope,
        },
        {
            title: 'Telegram',
            id: 'telegram',
            url: 'https://t.me/mademoiselle_ii',
            icon: TelegramLogo,
        },
    ],
    // Set main links
    mainLinks: [
        {
            id: 'linkedin',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/irina-ikhilchik-9760441/',
            icon: LinkedinLogo,
        },
        {
            id: 'english-articles',
            title: 'My publications in English',
            url: 'https://onlinelibrary.wiley.com/authored-by/Ikhilchik/Irina',
            icon: FileText,
        },
        {
            id: 'russian-articles',
            title: 'My publications in Russian / Мои статьи на русском',
            url: 'https://cyberleninka.ru/article/n/primenimost-modeli-sozdaniya-znaniy-seci-v-rossiyskom-kulturnom-kontekste-teoreticheskiy-analiz',
            icon: FileText,
        },
        {
            id: 'english-articles-2',
            title: 'Applicability of the SECI Model of knowledge creation in Russian cultural context: Theoretical analysis',
            url: 'https://onlinelibrary.wiley.com/authored-by/Ikhilchik/Irina',
            icon: Scroll,
        },
        {
            id: 'russian-articles-2',
            title: 'Применимость модели создания знаний SECI в российском культурном контексте: теоретический анализ',
            url: 'https://cyberleninka.ru/article/n/primenimost-modeli-sozdaniya-znaniy-seci-v-rossiyskom-kulturnom-kontekste-teoreticheskiy-analiz',
            icon: Scroll,
        },
    ],
    vCard: {
        firstName: 'Irina',
        lastName: 'Ikhilchik',
        organization: 'BASF',
        title: 'Senior Expert',
        email: 'irina.ikhilchik@gmail.com',
    },
};
