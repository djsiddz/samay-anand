import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Samay Anand',
    description: 'Funny, witty, and unexpected tales from the heart of Mumbai. Stories of everyday people, their struggles, wins, and the city that shapes them.',
    image: {
        src: '/space-ahead-preview.jpeg', // Replace with actual image later
        alt: 'Mumbai Stories - Blog by Samay Anand'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        {
            text: 'RSS Feed',
            href: withBase('/rss.xml')
        },
        {
            text: 'Sitemap',
            href: withBase('/sitemap-index.xml')
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/'
        }
    ],
    hero: {
        eyebrowText: 'Discover the city ☔',
        title: 'Mumbai Stories',
        text: "Witty, funny, and unexpected tales from everyday lives of Mumbai's people, by Samay Anand.",
        image: {
            src: '/assets/images/hero-image.jpg', // Replace with actual image later
            alt: 'Mumbai cityscape illustration'
        },
        actions: [
            {
                text: 'Read Stories',
                href: withBase('/blog')
            },
            {
                text: 'Subscribe',
                href: '#subscribe'
            }
        ]
    },
    about: {
        title: 'About Samay Anand',
        text: "Samay Anand is a writer from India, sharing short and medium-length stories about the vibrant lives of Mumbai's people. His writing blends humor, wit, and surprise, making every story a delightful journey. For the past three years, Samay has captured the essence of Mumbai, one story at a time."
    },
    contactInfo: {
        title: 'Contact',
        text: "Have a question, suggestion, or just want to say hi? Reach out to Samay through any of the links below:",
        email: {
            text: "Drop me an email and I’ll do my best to respond as soon as possible.",
            href: "mailto:example@example.com",
            email: "example@example.com"
        },
        socialProfiles: [
            {
                text: "Instagram",
                href: "https://instagram.com/"
            },
            {
                text: "Twitter",
                href: "https://twitter.com/"
            },
            {
                text: "LinkedIn",
                href: "https://linkedin.com/"
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Mumbai Stories',
        text: 'Get the latest tales, struggles and wins, in your inbox. One story per week. 💖',
        formUrl: '#'
    },
    postsPerPage: 4,
    recentPostLimit: 3
};

export default siteConfig;
