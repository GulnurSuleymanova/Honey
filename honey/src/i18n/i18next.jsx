import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tərcümələr
const resources = {
    az: {
        translation: {
            home: [
                "Təzə təbii",
                "Nanə Çiçəyi Balı "
            ],
            whoose: [
                "Niyə bizi seçməlisiniz?",      // 0
                "Bizim üstünlüklərimiz",        // 1
                "Təbii və Orqanik Bal",         // 2
                "Təbii bal məhsullarını peşəkar şəkildə təqdim edirik.", // 3
                "Balın İzlənməsi və Sertifikatlaşdırma", // 4
                "Balınızın mənşəyi və keyfiyyəti müstəqil təsdiq olunub.", // 5
                "Peşəkar Arıçılar",            // 6
                "Arıçılıqda illərin təcrübəsi ilə xidmət göstəririk." // 7
            ],
            sidebar: [
                "Ana Səhifə",
                "Alış-veriş",
                "Haqqımızda",
                "Əlaqə",
                "Suallar"
            ],
            testimonials: {
                sectionTitle: "Müştəri rəyləri",
                sectionSubtitle: "Məhsullarımız haqqında fikirlər",
                items: [
                    {
                        text: "Bir qəhvə sevəri kimi, instant qəhvəyə şübhə ilə yanaşırdım, amma Botanica'nın çeşidləri gözləntilərimi üstələdi. Dadı çox zəngin və tam bədənlidir, üstəlik çox rahatdır.",
                        name: "Jessica",
                        location: "Çikaqodan"
                    },
                    {
                        text: "Vegetarian olduğum üçün omletdən həmişə məhrum idim. Botanica'nın Veg Omelette qarışığı ilə nəhayət sağlam və proteinli səhər yeməyim oldu.",
                        name: "Mark",
                        location: "Nyu Yorkdan"
                    },
                    {
                        text: "Botanica düyü çipsləri mətbəximdə daim var. Onlar sağlam alternativdir, amma hələ də xırtıldayan və dadlıdır. Mənim favoritim – Chilli Garlic dadıdır.",
                        name: "Sophia",
                        location: "Kaliforniyadan"
                    }
                ]
            },
            "certification": {
                "titleSmall": "True Source Sertifikatı",
                "titleBig": "Orijinallıq Sertifikatı",
                "desc": "True Source Honey sertifikatı balın şəffaf şəkildə əldə edildiyini və orijinallıq üçün test olunduğunu təsdiqləyir. İstehlakçılar True Source nişanı daşıyan bal və ya bal ehtiva edən məhsullar aldıqda, onun keyfiyyətinə əmin ola bilərlər."
            },

            "benefits": {
                "sectionTitle": "Məhsulun Faydaları",
                "sectionSubtitle": "Balın Xüsusiyyətləri",
                "description": "Bal əsasən şəkərdən ibarətdir, həmçinin amin turşuları, vitaminlər, minerallar, dəmir, sink və antioksidantlar ehtiva edir...",
                "left": [
                    { "number": "01", "text": "Bal şəkərdən daha təhlükəsizdir" },
                    { "number": "02", "text": "Bal dəri və saç dərisi infeksiyalarına qarşı mübarizə aparır" },
                    { "number": "03", "text": "Bal uşaqların yaxşı yatmasına kömək edir" }
                ],
                "right": [
                    { "number": "01", "text": "Bal qan üçün faydalıdır" },
                    { "number": "02", "text": "Bal yoga məşqləri edənlər üçün faydalıdır" },
                    { "number": "03", "text": "Bal antibakterial və antiseptikdir" }
                ]

            },

            "social": {
                "title": "Gəlin Sosial Olaq",
                "username": "@botanica",
                "shareStyle": "Öz stilini paylaş: #botanica",
                "sharePupStyle": "Balaca dostunun stilini paylaş: #botanica"

            },

            "shopbutton": {
                "title": "Xüsusi Təklif",
                "subtitle": "Təbii Günəbaxan Balı",
                "description": "Biz bu qızıl xəzinəni fəxrlə Ukrayna və Rumıniya arıçılarından alırıq",
                "button": "İndi Al"
            },


            "featured": {
                "title": "Məhsulun Faydaları",
                "subtitle": "Seçilmiş Kateqoriyalar",
                "sunflower": {
                    "name": "Günəbaxan Balı",
                    "desc": "Günəbaxan Balı hər qaşıqda dünyanın ən xoşbəxt çiçəklərinin ləzzətini gətirir. Biz bu qızıl xəzinəni Ukrayna və Rumıniya arıçıları ilə qürurla təmin edirik."
                },
                "wildflower": {
                    "name": "Çöl Çiçəkləri Balı",
                    "desc": "Çöl Çiçəkləri Balı müxtəlif çiçəklərin təbii ətrini əks etdirir. Avropanın ən canlı çəmənliklərindən toplanan bu bal süfrənizə zəngin çiçək dadı gətirir."
                },
                "acacia": {
                    "name": "Akasya Balı",
                    "desc": "Akasya Balı açıq rəngi və yüngül dadı ilə tanınır. Akasya ağaclarından toplanan bu bal incə şirinliyi sevənlər üçün idealdır."
                }

            }
        }
    },
    en: {
        translation: {
            home: [
                "Fresh Organic",
                "Mint Blossom Honey "
            ],
            whoose: [
                "Why choose us?",
                "Our Advantages",
                "All-Natural and Organic Honey",
                "We offer natural honey products professionally.",
                "Honey Traceability and Authenticity Certification",
                "Your honey has been independently verified for origin and tested for authenticity.",
                "Professional Beekeepers",
                "Years of experience in beekeeping ensures top quality service."
            ],
            sidebar: [
                "Home",
                "Shop",
                "About",
                "Contact",
                "FAQ"
            ],
            testimonials: {
                sectionTitle: "Customer Testimonials",
                sectionSubtitle: "What our customers say",
                items: [
                    {
                        text: "As a coffee lover, I was skeptical about instant coffee, but Botanica's instant range exceeded my expectations. Rich taste and very convenient!",
                        name: "Jessica",
                        location: "From Chicago"
                    },
                    {
                        text: "As a vegetarian, I always missed omelettes. With Botanica's Veg Omelette premix, I can enjoy a healthy and protein-packed breakfast again.",
                        name: "Mark",
                        location: "From New York"
                    },
                    {
                        text: "Botanica rice crackers are always in my pantry. A healthier snack alternative that's still tasty and crunchy. Chilli Garlic is my favorite!",
                        name: "Sophia",
                        location: "From California"
                    }
                ]
            },
            "certification": {
                "titleSmall": "True Source Certified",
                "titleBig": "Authenticity Certification",
                "desc": "True Source Honey certification confirms that honey was sourced in a transparent manner and tested for authenticity. When consumers buy honey or honey containing products bearing the True Source mark, they can be confident about its quality."
            },

            "benefits": {
                "sectionTitle": "Product Benefits",
                "sectionSubtitle": "Speciality of Honey",
                "description": "Honey contains mostly sugar, as well as amino acids, vitamins, minerals, iron, zinc, and antioxidants...",
                "left": [
                    { "number": "01", "text": "Honey is safer than Sugar" },
                    { "number": "02", "text": "Honey Combats Skin and Scalp Infections" },
                    { "number": "03", "text": "Honey helps Children Sleep Soundly" }
                ],
                "right": [
                    { "number": "01", "text": "Honey is Good for your Blood" },
                    { "number": "02", "text": "Honey is good for Yoga practitioners" },
                    { "number": "03", "text": "Honey is Antibacterial and Antiseptic" }
                ]

            },

            "social": {
                "title": "Let's Bee Social",
                "username": "@botanica",
                "shareStyle": "Share your style: #botanica",
                "sharePupStyle": "Share your pup’s style: #botanica"
            },

            "shopbutton": {
                "title": "Special Offer",
                "subtitle": "Raw Sunflower Honey",
                "description": "We proudly source this golden treasure from the beekeepers of Ukraine and Romania",
                "button": "Shop Now"

            },

            "featured": {
                "subtitle": "Product Benefits",
                "title": "Featured Categories",
                "cat1": {
                    "title": "Sunflower Honey",
                    "desc": "Sunflower Honey delivers the delight of the world’s happiest flowers with every spoonful. We proudly source this golden treasure from the beekeepers of Ukraine and Romania."
                },
                "cat2": {
                    "title": "Wildflower Honey",
                    "desc": "Wildflower Honey captures the natural aroma of mixed blossoms. Sourced from the most vibrant meadows of Europe, this honey brings a rich floral taste to your table."
                },
                "cat3": {
                    "title": "Acacia Honey",
                    "desc": "Acacia Honey is known for its light color and mild flavor. Harvested from acacia trees, it is perfect for those who love delicate sweetness without overpowering taste."
                }
            }
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "az",
    fallbackLng: "az",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
