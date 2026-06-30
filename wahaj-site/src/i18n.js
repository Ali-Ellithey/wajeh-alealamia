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
            "our_fleet": "Our Fleet",
            "contact_us": "Contact Us",

            // --- General & Buttons ---
            "book_now": "Book Now",
            "details": "Details",
            "call_us": "Call Us",
            "whatsapp": "WhatsApp",
            "booking_message": "I would like to book",

            // --- Home Slider ---
            "slider": {
                "slide1": {
                    "title_part1": "Number One",
                    "title_span": "In Kuwait",
                    "title_part2": "For You",
                    "desc": "Wahaj is always with you to provide the best car rental services in Kuwait."
                },
                "slide2": {
                    "title_part1": "The Best",
                    "title_span": "Service",
                    "title_part2": "In Kuwait",
                    "desc": "We offer a wide range of high-quality cars at great prices for all our clients."
                },
                "slide3": {
                    "title_part1": "Fleet of",
                    "title_span": "Modern",
                    "title_part2": "Cars",
                    "desc": "We provide a wide range of the latest luxury car models with professional drivers."
                }
            },

            // --- About Section ---
            "about": {
                "sub_title": "Who We Are",
                "main_intro_title": "Wahaj Luxury Car Rental Company",
                "company_description": "At Wahaj, we strive to provide a new concept of luxury and safety in transportation. With our extensive experience in the Kuwaiti market, we provide our clients with a diverse fleet that combines luxury and economy, with a full commitment to punctuality and high quality.",
                "years_exp": "Years of Experience",
                "clients": "Happy Clients",
                "support": "Continuous Support",
                "main_title": "Our Exceptional Services",
                "luxury": "Luxury Cars",
                "luxury_details": "We offer the most luxurious modern cars with professional drivers to ensure total comfort and elegance for all your commutes.",
                "suv": "SUV Cars",
                "suv_details": "Spacious family vehicles (SUV) equipped with the latest safety and comfort features, perfect for family trips and large groups.",
                "family": "Large Family Cars",
                "family_details": "Integrated transportation solutions for large families, featuring spacious cars with extra seating and ample luggage space.",
                "economy": "Mid-Size & Economy Cars",
                "economy_details": "Your ideal choice for practical daily commutes; comfortable, modern, and fuel-efficient cars at the best price.",
                "airport_basic": "Basic Airport Service",
                "airport_details": "24/7 airport transfer and reception service. We wait for you upon arrival to transport you smoothly to your destination.",
                "vip_service": "VIP Service",
                "vip_details": "Specialized VIP service for business executives and dignitaries, offering complete privacy and attention to the finest details."
            },

            // --- Fleet Section ---
            "fleet": {
                "title": "Our Fleet",
                "subtitle": "We offer a wide range of high-quality cars at great prices. With diversity in brands, sizes, and options.",
                "more_btn": "More",
                "categories": {
                    "luxury": { "name": "Luxury Cars", "desc": "Best luxury cars for rent with driver in Kuwait." },
                    "economy": { "name": "Economy Cars", "desc": "Practical and affordable cars for daily needs." },
                    "suv": { "name": "Super Sport", "desc": "Outstanding power and performance." },
                    "family": { "name": "Large Family", "desc": "Space and comfort for all family members." }
                }
            },


            // داخل قسم en:
            "invest": {

                "sub_title": "Our Premium Services",

                "main_title": "Elevate Your Driving Experience",

                "order_btn": "Order Service Now",

                "tabs": {

                    "rental": "Car Rental",

                    "insurance": "Insurance",

                    "legal": "Legal Contracts"

                },

                "rental": {

                    "title": "Best Car Rental Service in Kuwait",

                    "desc": "We provide a wide range of modern cars, from economy to luxury, to suit all your needs.",

                    "features": ["✔ Full insurance on all cars", "✔ Airport pick-up & drop-off", "✔ Daily, weekly, and monthly contracts"]

                },

                "insurance": {

                    "title": "Full Protection & Peace of Mind",

                    "desc": "We provide the best comprehensive insurance plans that cover all your needs and ensure quick compensation.",

                    "features": ["✔ Full accident coverage", "✔ Fast insurance procedures", "✔ Replacement car service"]

                },

                "legal": {

                    "title": "Certified Documentation for Your Rights",

                    "desc": "We offer legal contract services that give your transactions an official legal character.",

                    "features": ["✔ Legal buy & sell contracts", "✔ Official documentation", "✔ Full data confidentiality"]

                }

            }

            ,

            // داخل قسم en:

            "services_content": {

                "rental": {

                    "title": "Modern Car Rental Fleet",

                    "desc": "We offer a unique car rental experience in Kuwait. Whether you need an economy car for daily use or a luxury car for special occasions, we provide the latest models at competitive prices."

                },

                "maintenance": {

                    "title": "Full Readiness & Periodic Maintenance",

                    "desc": "We don't just rent cars; we provide a high-quality transportation solution. Our rental fleet undergoes strict periodic maintenance and a comprehensive inspection before every delivery."

                },

                "driver": {

                    "title": "Chauffeur Services",

                    "desc": "We provide comfort and luxury through our professional chauffeur services. We guarantee full privacy and strict punctuality to reach your destination safely and comfortably."

                }

            }

            ,



            // داخل قسم en:

            "business": {

                "launch_today": "Start your journey today...with",

                "brand_name": "Wahaj Al-Alamiya",

                "tagline": "Beyond an option, the certain choice for every trip."

            },

            // في قسم en:

            "contact_title": "Contact Us",

            // داخل قسم en:

            "form": {

                "title": "We Are Happy To Hear From You",

                "name_label": "Full Name",

                "name_placeholder": "Enter your name here",

                "phone_label": "Phone Number",

                "phone_placeholder": "Example: 96512345678",

                "email_label": "Email Address",

                "message_label": "Your Message",

                "message_placeholder": "How can we help you?",

                "submit_btn": "Send Message",

                "success_msg": "Your message has been sent successfully! We will contact you soon.",

                "error_msg": "An error occurred during sending, please try again later."

            },


            // --- Testimonials ---
            "testimonials": {
                "main_title": "Client Reviews",
                "slide1": { "text": "An excellent and very professional service, the cars are clean and the drivers are very polite. I highly recommend Wahaj." },
                "slide2": { "text": "The best car rental experience in Kuwait. Punctuality and high-end luxury vehicles. Thank you for the great service." }
            },

            // --- Footer & Others ---
            "about_company": "About Company",
            "footer_description": "We are leaders in providing luxury and economy mobility solutions in Kuwait.",
            "our_location": "Our Location",
            "address_details": "Kuwait, plot 50, Al-Ardiya 92400.",
            "open_daily": "Open Daily",
            "working_hours": "9:00 AM - 10:00 PM",
            "brands_section": { "title": "International Brands in Our Fleet" },

        }
    },
    ar: {
        translation: {
            "home": "الرئيسية",
            "about_us": "من نحن",
            "services": "خدماتنا",
            "our_fleet": "أسطولنا",
            "contact_us": "اتصل بنا",

            // --- Home Slider ---
            "slider": {
                "slide1": {
                    "title_part1": "الأولى",
                    "title_span": "في الكويت",
                    "title_part2": "من أجلك",
                    "desc": "وهج دائماً معك لتوفير أفضل الخدمات في تأجير السيارات داخل الكويت."
                },
                "slide2": {
                    "title_part1": "أفضل",
                    "title_span": "خدمة",
                    "title_part2": "في الكويت",
                    "desc": "نحن نقدم مجموعة كبيرة من السيارات عالية الجودة بأسعار رائعة لجميع عملائنا."
                },
                "slide3": {
                    "title_part1": "أسطول",
                    "title_span": "من السيارات",
                    "title_part2": "الحديثة",
                    "desc": "نقدم مجموعة واسعة من أحدث موديلات السيارات الفاخرة مع سائقين محترفين."
                }
            },

            "book_now": "احجز الآن",
            "details": "التفاصيل",
            "call_us": "اتصل بنا",
            "whatsapp": "واتساب",
            "booking_message": "أرغب في حجز خدمة",

            "about": {
                "sub_title": "من نحن",
                "main_intro_title": "شركة وهج العالمية لتأجير السيارات الفاخرة",
                "company_description": "نسعى في شركة وهج لتقديم مفهوم جديد للرفاهية والأمان في النقل. بفضل خبرتنا العريقة في السوق الكويتي، نوفر لعملائنا أسطولاً متنوعاً يجمع بين الفخامة والاقتصاد، مع التزام تام بالدقة والجودة العالية.",
                "years_exp": "سنوات خبرة",
                "clients": "عميل سعيد",
                "support": "دعم متواصل",
                "main_title": "خدماتنا المتميزة",
                "luxury": "السيارات الفارهة",
                "luxury_details": "نقدم لكم أفخم السيارات الحديثة مع سائقين محترفين لضمان راحة تامة وفخامة تليق بكم في كافة مشاويركم.",
                "suv": "سيارات الرياضية",
                "suv_details": "سيارات عائلية واسعة مجهزة بأحدث وسائل الأمان والراحة، مثالية للرحلات العائلية والمجموعات الكبيرة.",
                "family": "سيارات عائلية كبيرة",
                "family_details": "حلول نقل متكاملة للعائلات الكبيرة، سيارات واسعة تتسع لعدد ركاب أكبر مع مساحة تخزين واسعة للحقائب.",
                "economy": "سيارات اقتصادية ومتوسطة",
                "economy_details": "خيارك الأمثل للمشاوير اليومية والعملية، سيارات مريحة وحديثة توفر لك الجودة بأفضل سعر.",
                "airport_basic": "توصيل واستقبال المطار",
                "airport_details": "خدمة توصيل واستقبال من وإلى المطار على مدار 24 ساعة، ننتظرك عند وصولك لننقلكم بكل سلاسة.",
                "vip_service": "خدمة VIP للأعمال",
                "vip_details": "خدمة الـ VIP الخاصة بمدراء الأعمال والشخصيات الهامة، خصوصية تامة واهتمام بأدق التفاصيل."
            },

            "fleet": {
                "title": "أسطولنا",
                "subtitle": "نقدم مجموعة متنوعة من السيارات الحديثة التي تلبي كافة تطلعاتكم بجودة عالية وأسعار تنافسية.",
                "more_btn": "المزيد",
                "categories": {
                    "luxury": { "name": "سيارات فارهة", "desc": "أفخم السيارات للإيجار مع سائق في الكويت." },
                    "economy": { "name": "سيارات اقتصادية", "desc": "سيارات عملية تناسب احتياجاتك اليومية." },
                    "suv": { "name": "سيارات رياضية", "desc": "أداء مذهل وقوة على جميع الطرقات." },
                    "family": { "name": "سيارات عائلية", "desc": "راحة وأمان لجميع أفراد العائلة." }
                }
            },
            "services_title": "خدماتنا",

            "invest": {

                "sub_title": "خدماتنا المتميزة",

                "main_title": "ارتقِ بتجربة قيادتك معنا",

                "order_btn": "اطلب الخدمة الآن",

                "tabs": {

                    "rental": "تأجير السيارات",

                    "insurance": "تأمين شامل",

                    "legal": "العقود التوثيقية"

                },

                "rental": {

                    "title": "أفضل خدمة تأجير سيارات في الكويت",

                    "desc": "نوفر لك مجموعة واسعة من السيارات الحديثة، من الاقتصادية إلى الفاخرة، لتناسب جميع احتياجاتك سواء كانت لرحلات العمل أو النزهات العائلية.",

                    "features": ["✔ تأمين شامل على جميع السيارات", "✔ خدمة استلام وتسليم من المطار", "✔ عقود يومية، أسبوعية، وشهرية"]

                },

                "insurance": {

                    "title": "حماية كاملة وراحة بال على الطريق",

                    "desc": "نوفر لك أفضل خطط التأمين الشامل التي تغطي كافة احتياجاتك وتضمن لك تعويضاً سريعاً وحماية متكاملة ضد الحوادث والأضرار.",

                    "features": ["✔ تغطية كاملة للحوادث", "✔ تأمين سريع وإجراءات ميسرة", "✔ خدمة سيارة بديلة"]

                },

                "legal": {

                    "title": "توثيق معتمد لضمان حقوقك",

                    "desc": "نقدم لك خدمة العقود التوثيقية التي تمنح تعاملاتك صبغة قانونية رسمية لضمان مستقبل خالٍ من النزاعات.",

                    "features": ["✔ صياغة عقود بيع وشراء", "✔ توثيق رسمي للحقوق", "✔ سرية تامة للبيانات"]

                }

            },

            // داخل قسم ar:

            "services_content": {

                "rental": {

                    "title": "أحدث أسطول لتأجير السيارات",

                    "desc": "نقدم لك تجربة فريدة في استئجار السيارات داخل الكويت. سواء كنت تبحث عن سيارة اقتصادية ليومك العملي أو سيارة فارهة لمناسباتك الخاصة، نحن نوفر لك أحدث الموديلات بأسعار تنافسية."

                },

                "maintenance": {

                    "title": "الجاهزية التامة والصيانة الدورية",

                    "desc": "نحن لا نؤجر مجرد سيارات، بل نقدم لك وسيلة تنقل خاضعة لأعلى معايير الجودة. أسطول سيارات التأجير لدينا يخضع لصيانة دورية صارمة وفحص شامل قبل كل عملية تسليم."

                },

                "driver": {

                    "title": "خدمات النقل بسائق",

                    "desc": "نوفر لك سبل الراحة والرفاهية من خلال خدمة السيارات المزودة بسائقين محترفين. نضمن لك خصوصية تامة، التزاماً دقيقاً بالمواعيد لتصل إلى وجهتك بكل راحة وأمان."

                }

            },

            // داخل قسم ar:

            "business": {

                "launch_today": "ابدأ رحلتك اليوم...مع",

                "brand_name": " وهج العالمية لتأجير السيارات",

                "tagline": "ليس مجرد خيار، بل هو الخيار الأمثل لكل رحلة"

            },
            "contact_title": "تواصل معنا",

            // داخل قسم ar:

            "form": {

                "title": "يسعدنا تواصلك معنا",

                "name_label": "الاسم الكامل",

                "name_placeholder": "أدخل اسمك هنا",

                "phone_label": "رقم الهاتف",

                "phone_placeholder": "مثال: 96512345678",

                "email_label": "البريد الإلكتروني",

                "message_label": "رسالتك",

                "message_placeholder": "كيف يمكننا مساعدتك؟",

                "submit_btn": "إرسال الرسالة",

                "success_msg": "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",

                "error_msg": "حدث خطأ في الإرسال، يرجى المحاولة لاحقاً."

            },
            // --- Testimonials ---
            "testimonials": {
                "main_title": "آراء العملاء",
                "slide1": { "text": "خدمة ممتازة واحترافية للغاية، السيارات نظيفة والسائقين قمة في الرقي والأدب. أنصح بالتعامل مع شركة وهج." },
                "slide2": { "text": "أفضل تجربة تأجير سيارات في الكويت. دقة في المواعيد وسيارات حديثة فخمة جداً. شكراً لكم على الخدمة الراقية." }
            },

            "about_company": "عن شركتنا",
            "footer_description": "رائدون في تقديم حلول التنقل الفاخرة والاقتصادية في الكويت بأعلى معايير الجودة.",
            "our_location": "موقعنا",
            "address_details": "الكويت، قسيمة 50، العارضية 92400.",
            "open_daily": "مفتوح يومياً",
            "working_hours": "9:00 ص - 10:00 م",
            "brands_section": { "title": "ماركات عالمية كجزء من أسطولنا" },

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

export default i18n;