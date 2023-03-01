import Logo from '../assets/svgs/logo'

export const HOME = '/';
export const STORE= '/store';
export const CONTACT = '/contact_us';
export const BLOGS = '/blogs';
export const ABOUT = '/about-us';
export const LOGIN = '/login';

export const NAVBAR_MENU = [
    {
        href: HOME,
        label: "پرسش و پاسخ",
        event: {
            category: '',
            action: '',
            label: ""
        }
    },
    {
        href: BLOGS,
        label: "بلاگ",
        event: {
            category: '',
            action: '',
            label: "BLOGS"
        }
    },
    {
        href: HOME,
        label: "خدمات دیگر",
        event: {
            category: '',
            action: '',
            label: ""
        }
    },
    {
        href: HOME,
        label: "",
        image: <Logo color='#fff'/>,
        event: {
            category: '',
            action: '',
            label: "Home"
        }
    },
    {
        href: STORE,
        label: "فروشگاه",
        event: {
            category: '',
            action: '',
            label: ""
        }
    },
    {
        href: CONTACT,
        label: "ارتباط با ما",
        event: {
            category: '',
            action: '',
            label: "CONTACT"
        }
    },

    {
        href: LOGIN,
        label: "ورود/ ثبت نام",
        event: {
            category: '',
            action: '',
            label: "LOGIN"
        }
    },
]

export const FOOTER_MENU = [
    {
        href: HOME,
        label: "صفحه اصلی",
        event: {
            category: '',
            action: '',
            label: "Home"
        }
    },
    {
        href: BLOGS,
        label: "حس خوب همدلی",
        event: {
            category: '',
            action: '',
            label: "BLOGS"
        }
    },
    {
        href: ABOUT,
        label: "درباره ما",
        event: {
            category: '',
            action: '',
            label: "about"
        }
    },
]