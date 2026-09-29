import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            // --- NavBar ---
            "home": "Home",
            "about_us": "About Us",
            "services": "Services",
            "our_fleet": "Partners",
            "contact_us": "Contact Us",

            // --- General & Buttons ---
            "book_now": "Book Now",
            "details": "Details",
            "call_us": "Call Us",
            "whatsapp": "WhatsApp",
            "booking_message": "I would like to book a consultation appointment at the dental clinic",

            // --- Services Page Translations ---
            "services_page": {
                "main_title": "Our Premium Medical Services",
                "main_desc": "We provide you and your family with the latest dental care and treatment technologies with the highest standards of quality and safety by a select group of specialized doctors.",
                "more_btn": "More",
                "items": {
                    "1": {
                        "title": "Dental Implants",
                        "description": "Replacing missing teeth with high-quality fixed artificial roots for a natural smile."
                    },
                    "2": {
                        "title": "Dental Braces",
                        "description": "Correcting tooth misalignment and restoring them to a regular shape for a harmonious look."
                    },
                    "3": {
                        "title": "Teeth Whitening",
                        "description": "Latest teeth whitening and cleaning techniques to remove pigmentation and restore bright whiteness."
                    },
                    "4": {
                        "title": "Hollywood Smile",
                        "description": "Designing a complete and attractive smile using the best cosmetic dental veneer materials."
                    },
                    "5": {
                        "title": "Root Canal Treatment",
                        "description": "Treating advanced decay and internal infections with utmost care and pain-free."
                    },
                    "6": {
                        "title": "Dental Prostheses",
                        "description": "Fixed and removable prostheses to replace damaged teeth with high quality and durability."
                    },
                    "7": {
                        "title": "Gums Care",
                        "description": "Treating and protecting gum diseases to ensure teeth health and stability."
                    },
                    "8": {
                        "title": "Dental Cosmetics",
                        "description": "Repairing anterior teeth defects and embellishing them to improve general facial appearance."
                    }
                }
            },

            // --- Home Slider ---
            "slider": {
                "slide1": {
                    "title_part1": "Number One",
                    "title_span": "In Dental Care",
                    "title_part2": "For Your Smile",
                    "desc": "We provide the best advanced dental treatments and cosmetic procedures with high precision."
                },
                "slide2": {
                    "title_part1": "The Best",
                    "title_span": "Dental",
                    "title_part2": "Experience",
                    "desc": "We offer integrated dental care solutions and painless treatments in a comfortable environment."
                },
                "slide3": {
                    "title_part1": "A Smile of",
                    "title_span": "Trusted",
                    "title_part2": "Confidence",
                    "desc": "Collaborating with elite dental consultants to serve you with international standards."
                }
            },

            // --- About Section ---
            "about": {
                "sub_title": "Diamond Dental Clinic",
                "main_intro_title": "Crafting Your Bright Smile With Advanced Technologies & Top Safety Standards",
                "company_description_1": "We believe in our clinic that a confident smile is the foundation of beauty and self-confidence. Therefore, we combine the expertise of elite dental and surgical consultants with the latest global technological innovations to ensure an exceptional treatment experience without any anxiety or pain.",
                "company_description_2": "We are committed to applying the highest international sterilization and infection control standards to provide you and your family with a safe and comfortable medical environment worthy of your expectations.",
                "years_exp": "Years of Experience",
                "clients": "Successful Smiles",
                "support": "Safety & Sterilization",
                "cta": "Book Your Consultation Now"
            },

            // --- Fleet / Partners Section ---
            "fleet": {
                "title": "Our Dental Partners & Brands",
                "subtitle": "We partner with leading global dental technology and material providers to deliver top-tier treatments.",
                "more_btn": "More",
                "categories": {
                    "luxury": { "name": "Straumann", "desc": "Swiss dental implant technology partner." },
                    "economy": { "name": "Ivoclar Vivadent", "desc": "Premium aesthetic dental materials." },
                    "suv": { "name": "3M Oral Care", "desc": "Advanced orthodontic and bonding solutions." },
                    "family": { "name": "Align Technology", "desc": "Official clear aligners provider." }
                }
            },

            "business": {
                "launch_today": "Start your journey to a bright smile with",
                "brand_name": "Diamond Dental Clinic",
                "tagline": "Beyond an option, the trusted choice for your dental care."
            },

            "contact_title": "Contact Us",

            // --- Form ---
            "form": {
                "title": "We Are Happy To Hear From You",
                "name_label": "Full Name",
                "name_placeholder": "Enter your name here",
                "phone_label": "Phone Number",
                "phone_placeholder": "Example: 01012345678",
                "email_label": "Email Address",
                "message_label": "Your Message",
                "message_placeholder": "How can we help you with our dental services?",
                "submit_btn": "Send Message",
                "success_msg": "Your message has been sent successfully! We will contact you soon.",
                "error_msg": "An error occurred during sending, please try again later."
            },

            "navbar": {
                "home": "Home",
                "about_us": "About Us",
                "our_doctors": "Our Doctors",
                "treatments": "Treatments",
                "contact_us": "Contact Us",
                "book_appointment": "Book Appointment",
                "services": {
                    "dental_implants": "Dental Implants",
                    "orthodontics": "Orthodontics",
                    "teeth_whitening": "Teeth Whitening",
                    "hollywood_smile": "Hollywood Smile",
                    "root_canal": "Root Canal",
                    "pediatric_dentistry": "Pediatric Dentistry",
                    "gum_care": "Gum Care",
                    "cosmetic_dentistry": "Cosmetic Dentistry"
                },

                // --- Testimonials ---
                "testimonials": {
                    "main_title": "Patient Reviews",
                    "slide1": { "text": "An excellent dental clinic, painless procedures and a very professional medical team. Highly recommended." },
                    "slide2": { "text": "The best dental care experience. Absolute cleanliness, punctuality, and amazing results. Thank you!" }
                },

                "about_company": "About Clinic",
                "footer_description": "Leaders in providing integrated dental care, advanced implants, and aesthetic smile designs.",
                "our_location": "Our Location",
                "address_details": "Cairo, Egypt - Advanced Medical Complex.",
                "open_daily": "Open Daily",
                "working_hours": "10:00 AM - 10:00 PM"
            }
        }
    },
    ar: {
        translation: {
            "home": "الرئيسية",
            "about_us": "من نحن",
            "services": "خدماتنا",
            "our_fleet": "الشركاء",
            "contact_us": "اتصل بنا",

            // --- Services Page Translations ---
            "services_page": {
                "main_title": "خدماتنا الطبية المتميزة",
                "main_desc": "نقدم لك ولعائلتك أحدث تقنيات العناية بالأسنان وعلاجها بأعلى معايير الجودة والأمان على يد نخبة من الأطباء المتخصصين.",
                "more_btn": "المزيد",
                "items": {
                    "1": {
                        "title": "زراعة الأسنان",
                        "description": "تعويض الأسنان المفقودة بجذور صناعية ثابتة عالية الجودة لابتسامة طبيعية."
                    },
                    "2": {
                        "title": "تقويم الأسنان",
                        "description": "تصحيح إتلاف الأسنان وإرجاعها لشكلها المنتظم للحصول على مظهر متناسق."
                    },
                    "3": {
                        "title": "تبييض الأسنان",
                        "description": "أحدث تقنيات تبييض وتنظيف الأسنان لإزالة التصبغات وإعادة البياض الناصع."
                    },
                    "4": {
                        "title": "ابتسامة هوليود",
                        "description": "تصميم ابتسامة متكاملة وجذابة بأفضل خامات القشور التجميلية للأسنان."
                    },
                    "5": {
                        "title": "علاج جذور الأسنان",
                        "description": "معالجة التسوس المتقدم والالتهابات الداخلية بعناية تامة وبدون آلام."
                    },
                    "6": {
                        "title": "تركيبات الأسنان",
                        "description": "تركيبات ثابتة ومتحركة لتعويض الأسنان المتضررة بجودة ومتانة عالية."
                    },
                    "7": {
                        "title": "عناية اللثة",
                        "description": "علاج أمراض اللثة وحمايتها لضمان صحة الأسنان واستقرارها."
                    },
                    "8": {
                        "title": "تجميل الأسنان",
                        "description": "إصلاح عيوب الأسنان الأمامية وتجميلها لتحسين المظهر العام للوجه."
                    }
                }
            },

            // --- Arabic (ar) Navbar & Sections ---
            "navbar": {
                "home": "الرئيسية",
                "about_us": "من نحن",
                "our_doctors": "أطبائنا",
                "treatments": "الخدمات",
                "contact_us": "اتصل بنا",
                "book_appointment": "احجز موعدك",
                "services": {
                    "dental_implants": "زراعة الأسنان",
                    "orthodontics": "تقويم الأسنان",
                    "teeth_whitening": "تبييض الأسنان",
                    "hollywood_smile": "ابتسامة هوليوود",
                    "root_canal": "علاج العصب",
                    "pediatric_dentistry": "أسنان الأطفال",
                    "gum_care": "عناية اللثة",
                    "cosmetic_dentistry": "تجميل الأسنان"
                }
            },

            // --- Home Slider ---
            "slider": {
                "slide1": {
                    "title_part1": "الخيار الأول",
                    "title_span": "في طب الأسنان",
                    "title_part2": "لأجل ابتسامتك",
                    "desc": "نقدم أفضل علاجات الأسنان المتقدمة والإجراءات التجميلية بأعلى دقة ومعايير أمان."
                },
                "slide2": {
                    "title_part1": "أفضل",
                    "title_span": "رعاية",
                    "title_part2": "لأسنانك",
                    "desc": "نوفر حلول العناية بالأسنان المتكاملة وعلاجات بدون ألم في بيئة مريحة ومعقمة."
                },
                "slide3": {
                    "title_part1": "ابتسامة تنبض",
                    "title_span": "بالثقة",
                    "title_part2": "والموثوقية",
                    "desc": "نتعاون مع نخبة من الاستشاريين لخدمتكم وفق أحدث المعايير الطبية العالمية."
                }
            },

            "book_now": "احجز الآن",
            "details": "التفاصيل",
            "call_us": "اتصل بنا",
            "whatsapp": "واتساب",
            "booking_message": "مرحباً، أود حجز موعد استشارة في عيادة الأسنان",

            "about": {
                "sub_title": "عيادة فيلا للأسنان",
                "main_intro_title": "نصنع ابتسامتك المشرقة بأحدث التقنيات وأعلى معايير الأمان",
                "company_description_1": "نؤمن في عيادتنا بأن الابتسامة الواثقة هي أساس الجمال والثقة بالنفس. لذلك نجمع بين خبرة نخبة من استشاريي طب وجراحة الأسنان، وبين أحدث الابتكارات التكنولوجية العالمية لضمان تجربة علاجية استثنائية وبدون أي شعور بالقلق أو الألم.",
                "company_description_2": "نلتزم بتطبيق أقصى معايير التعقيم العالمية والتحكم في العدوى، لنمنحك و لعائلتك بيئة طبية آمنة ومريحة تليق بتطلعاتكم.",
                "years_exp": "سنوات خبرة",
                "clients": "ابتسامة ناجحة",
                "support": "أمان وتعقيم",
                "cta": "احجز موعد استشارتك الآن"
            },

            "fleet": {
                "title": "شركاؤنا وأحدث التقنيات",
                "subtitle": "نتعاون مع كبرى الشركات العالمية لتوفير أفضل خامات ومستلزمات طب الأسنان.",
                "more_btn": "المزيد",
                "categories": {
                    "luxury": { "name": "Straumann", "desc": "شريك تكنولوجيا زراعة الأسنان السويسرية." },
                    "economy": { "name": "Ivoclar Vivadent", "desc": "أجود خامات التجميل والتلبيسات." },
                    "suv": { "name": "3M Oral Care", "desc": "حلول التقويم والعناية المتقدمة." },
                    "family": { "name": "Align Technology", "desc": "المزوّد المعتمد للتقويم الشفاف." }
                }
            },

            "business": {
                "launch_today": "ابدأ رحلتك نحو ابتسامة مشرقة...مع",
                "brand_name": "عيادة فيلا للأسنان",
                "tagline": "ليس مجرد خيار، بل هو الخيار الأمثل لصحة أسنانك وعنايتك"
            },
            "contact_title": "تواصل معنا",

            "form": {
                "title": "يسعدنا تواصلك معنا",
                "name_label": "الاسم الكامل",
                "name_placeholder": "أدخل اسمك هنا",
                "phone_label": "رقم الهاتف",
                "phone_placeholder": "مثال: 01012345678",
                "email_label": "البريد الإلكتروني",
                "message_label": "رسالتك",
                "message_placeholder": "كيف يمكننا مساعدتك في خدمات العيادة؟",
                "submit_btn": "إرسال الرسالة",
                "success_msg": "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
                "error_msg": "حدث خطأ في الإرسال، يرجى المحاولة لاحقاً."
            },

            "testimonials": {
                "main_title": "آراء المرضى والعملاء",
                "slide1": { "text": "عيادة أسنان ممتازة، تعامل راقٍ وإجراءات بدون أي ألم. فريق طبي محترف جداً أنصح بالتعامل معهم." },
                "slide2": { "text": "أفضل تجربة علاجية وتجميلية للأسنان. نظافة تامة، دقة في المواعيد ونتائج مذهلة. شكراً لكم!" }
            },

            "about_company": "عن العيادة",
            "footer_description": "رائدون في تقديم حلول طب وجراحة الأسنان وزراعة الأسنان وتصميم الابتسامات بأعلى معايير الجودة.",
            "our_location": "موقعنا",
            "address_details": "أول جمال جسر السويس، القاهرة، مصر",
            "open_daily": "مفتوح يومياً",
            "working_hours": "10:00 ص - 10:00 م"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "ar",
        detection: {
            order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        interpolation: { escapeValue: false }
    });

const handleDirectionUpdate = (lang) => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.dir = dir;
    if (document.documentElement) {
        document.documentElement.dir = dir;
        document.documentElement.lang = lang;
    }
    if (document.body) {
        document.body.dir = dir;
    }
};

handleDirectionUpdate(i18n.language);

i18n.on("languageChanged", (lang) => {
    handleDirectionUpdate(lang);
});

export default i18n;