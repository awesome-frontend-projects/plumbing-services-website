import {
  RiCalendarScheduleLine,
  RiEyeLine,
  RiFacebookCircleFill,
  RiHandHeartLine,
  RiInstagramLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiShieldCheckLine,
  RiToolsLine,
  RiTwitterXFill,
  RiYoutubeFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/about",
  },
  {
    id: 3,
    label: "Services",
    href: "/services",
  },
  {
    id: 4,
    label: "Blog",
    href: "/blog",
  },
];

export const aboutSecItems = [
  {
    id: 1,
    label: "Licensed, bonded, and fully insured technicians",
  },
  {
    id: 2,
    label: "Upfront pricing with no hidden fees or surprises",
  },
  {
    id: 3,
    label: "Same-day service for most repairs and emergencies",
  },
];

export const servicesSecCardItems = [
  {
    id: "01",
    title: "Emergency Plumbing",
    text: "24/7 fast response for leaks, burst pipes, and urgent repairs.",
    icon: "/images/icon-3.svg",
  },
  {
    id: "02",
    title: "Drain Cleaning & Unclogging",
    text: "Clearing blocked sinks, toilets, showers, and sewer lines.",
    icon: "/images/icon-4.svg",
  },
  {
    id: "03",
    title: "Pipe Installation & Repairs",
    text: "Fixing or replacing damaged water supply and drain pipes.",
    icon: "/images/icon-5.svg",
  },
  {
    id: "04",
    title: "Water Heater Services",
    text: "Installation, maintenance, and repair of tank and tankless water heaters.",
    icon: "/images/icon-6.svg",
  },
  {
    id: "05",
    title: "Bathroom & Kitchen Plumbing",
    text: "Installing faucets, sinks, showers, bathtubs, toilets, and appliances.",
    icon: "/images/icon-7.svg",
  },
  {
    id: "06",
    title: "Leak Detection & Repair",
    text: " Identifying hidden leaks and preventing costly water damage.",
    icon: "/images/icon-8.svg",
  },
  {
    id: "07",
    title: "Sewer Line Services",
    text: "Inspection, repair, and replacement of sewer lines for smooth flow.",
    icon: "/images/icon-9.svg",
  },
];

export const ourExperienceSecItems = [
  {
    id: 1,
    value: 15,
    label: "Years of Experience",
  },
  {
    id: 2,
    value: 10,
    label: "Happy Clients",
  },
  {
    id: 3,
    value: 30,
    label: "Qualified Experts",
  },
];

export const blogSecCardItems = [
  {
    id: 1,
    img: "/images/blog-img-1.png",
    title: "5 Signs Your Water Heater Needs Professional Attention",
    date: "sep 20,2024",
  },
  {
    id: 2,
    img: "/images/blog-img-2.png",
    title: "Winter Plumbing Prep: Protecting Your Pipes from Freezing",
    date: "Aug 12 20,2024",
  },
  {
    id: 3,
    img: "/images/blog-img-3.png",
    title: "DIY vs. Professional Plumbing: When to Call the Experts",
    date: "Nov 04,2023",
  },
];

export const testimonialsCardItems = [
  {
    id: 1,
    text: "“Amazing service! They fixed our burst pipe emergency at 2 AM and had everything back to normal by morning. Professional, fast, and reasonably priced.” ",
    img: "/images/profile-img-1.png",
    name: "Lisa mark",
  },
  {
    id: 2,
    text: "“These guys saved my weekend! My kitchen sink was completely backed up before a dinner party. They came out same day, fixed the problem quickly, and cleaned up perfectly. True professionals.”",
    img: "/images/profile-img-2.png",
    name: "Michael Thompson",
  },
  {
    id: 3,
    text: "“I've used several plumbers over the years, but none compare to this team. They installed our new water heater and explained everything clearly. Highly recommend!”",
    img: "/images/profile-img-3.png",
    name: "Jennifer Rodriguez",
  },
  {
    id: 4,
    text: "“Outstanding work on our bathroom renovation. They handled all the plumbing for our new master bath - from rough-in to fixtures. Very impressed!”",
    img: "/images/profile-img-4.png",
    name: "David Chen",
  },
];

export const ctaListItems = [
  {
    id: 1,
    icon: RiPhoneLine,
    title: "Phone num",
    label: "+1234567891011",
  },
  {
    id: 2,
    icon: RiMapPinLine,
    title: "Location",
    label: "123 Broadway, Manhattan New York, NY 10001",
  },
  {
    id: 3,
    icon: RiMailLine,
    title: "Email address",
    label: "help@plufix.com",
  },
  {
    id: 4,
    icon: RiCalendarScheduleLine,
    title: "Business Hours",
    label: "Mon–Sat: 8:00 AM – 6:00 PM Sun: Emergency calls only",
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: RiFacebookCircleFill,
  },
  {
    id: 2,
    icon: RiInstagramLine,
  },
  {
    id: 3,
    icon: RiYoutubeFill,
  },
  {
    id: 4,
    icon: RiTwitterXFill,
  },
];

export const footerList = [
  {
    id: 1,
    title: "Company",
    list: ["About Us", "Our Team", "Careers", "Testimonials"],
  },
  {
    id: 2,
    title: "Services",
    list: [
      "Emergency Plumbing",
      "Drain Cleaning",
      "Pipe Repairs",
      "Water Heater Services",
      "Leak Detection",
    ],
  },
  {
    id: 3,
    title: "Quick Links",
    list: ["home", "about", "services", "blog", "contact"],
  },
];

// *************************
//      About page
// *************************

export const teamCardItems = [
  {
    id: 1,
    img: "/images/team-1.png",
    name: "James Thompson",
    role: "Senior Plumbing Technician",
  },
  {
    id: 2,
    img: "/images/team-2.png",
    name: "Mark Brooks",
    role: "Lead Plumber & Operations Manager",
  },
  {
    id: 3,
    img: "/images/team-3.png",
    name: "David Martinez",
    role: "Certified Plumbing Specialist",
  },
  {
    id: 4,
    img: "/images/team-4.png",
    name: "Robert Johnson",
    role: "Plumbing Technician",
  },
];

export const ourFoundationCardItems = [
  {
    id: 1,
    icon: RiShieldCheckLine,
    title: "Reliability",
    text: "We show up when we say we will and complete every job to the highest standard.",
  },
  {
    id: 2,
    icon: RiEyeLine,
    title: "Transparency",
    text: "We provide clear, upfront pricing and explain exactly what needs to be done before we start any work.",
  },
  {
    id: 3,
    icon: RiHandHeartLine,
    title: "Integrity",
    text: "We show up when we say we will and complete every job to the highest standard.",
  },
  {
    id: 4,
    icon: RiToolsLine,
    title: "Quality Craftsmanship",
    text: "Every job, from the smallest repair to major installations, receives our full attention and expertise.",
  },
];

// *************************
//      Services page
// *************************
export const servicesPageCardItems = [
  {
    id: "01",
    title: "Emergency Plumbing",
    text: "24/7 fast response for leaks, burst pipes, and urgent repairs.",
    icon: "/images/icon-3.svg",
  },
  {
    id: "02",
    title: "Drain Cleaning & Unclogging",
    text: "Clearing blocked sinks, toilets, showers, and sewer lines.",
    icon: "/images/icon-4.svg",
  },
  {
    id: "03",
    title: "Pipe Installation & Repairs",
    text: "Fixing or replacing damaged water supply and drain pipes.",
    icon: "/images/icon-5.svg",
  },
  {
    id: "04",
    title: "Water Heater Services",
    text: "Installation, maintenance, and repair of tank and tankless water heaters.",
    icon: "/images/icon-6.svg",
  },
  {
    id: "05",
    title: "Bathroom & Kitchen Plumbing",
    text: "Installing faucets, sinks, showers, bathtubs, toilets, and appliances.",
    icon: "/images/icon-7.svg",
  },
  {
    id: "06",
    title: "Leak Detection & Repair",
    text: " Identifying hidden leaks and preventing costly water damage.",
    icon: "/images/icon-8.svg",
  },
  {
    id: "07",
    title: "Sewer Line Services",
    text: "Inspection, repair, and replacement of sewer lines for smooth flow.",
    icon: "/images/icon-9.svg",
  },
  {
    id: "08",
    title: "Garbage Disposal Services",
    text: " Professional installation, repair, and maintenance of kitchen garbage disposal units",
    icon: "/images/icon-10.svg",
  },
  {
    id: "09",
    title: "Toilet Repair & Installation",
    text: " Complete toilet services including repairs, replacements, and new installations",
    icon: "/images/icon-11.svg",
  },
  {
    id: "10",
    title: "Faucet & Fixture Services",
    text: "Installation and repair of faucets, showerheads, and plumbing fixtures",
    icon: "/images/icon-12.svg",
  },
  {
    id: "11",
    title: "Gas Line Services",
    text: " Licensed gas line installation, repair, and safety inspections for appliances",
    icon: "/images/icon-13.svg",
  },
  {
    id: "12",
    title: "Commercial Plumbing",
    text: "Comprehensive plumbing services for businesses, restaurants, and commercial properties",
    icon: "/images/icon-14.svg",
  },
];

// *************************
//      Blog page
// *************************

export const blogPageCardItems = [
  {
    id: 1,
    img: "/images/blog-img-1.png",
    title: "5 Signs Your Water Heater Needs Professional Attention",
    date: "sep 20,2024",
  },
  {
    id: 2,
    img: "/images/blog-img-2.png",
    title: "Winter Plumbing Prep: Protecting Your Pipes from Freezing",
    date: "Aug 12 20,2024",
  },
  {
    id: 3,
    img: "/images/blog-img-3.png",
    title: "DIY vs. Professional Plumbing: When to Call the Experts",
    date: "Nov 04,2023",
  },
  {
    id: 4,
    img: "/images/blog-img-4.png",
    title: "The Hidden Dangers of Chemical Drain Cleaners",
    date: "sep 20,2024",
  },
  {
    id: 5,
    img: "/images/blog-img-5.png",
    title: "Water Pressure Problems: Causes and Solutions",
    date: "Aug 12 20,2024",
  },
  {
    id: 6,
    img: "/images/blog-img-6.png",
    title: "Smart Home Plumbing: Modern Technology for Your Home",
    date: "Nov 04,2023",
  },
  {
    id: 7,
    img: "/images/blog-img-7.png",
    title: "Emergency Plumbing: What to Do Before the Plumber Arrives",
    date: "sep 20,2024",
  },
  {
    id: 8,
    img: "/images/blog-img-8.png",
    title: "The Complete Guide to Garbage Disposal Maintenance",
    date: "Aug 12 20,2024",
  },
  {
    id: 9,
    img: "/images/blog-img-9.png",
    title: "Understanding Your Home's Plumbing System",
    date: "Nov 04,2023",
  },
];

// *************************
//      Blog Detail page
// *************************

export const blogDetailItems = [
  {
    id: "1",
    img: "/images/blog-img-1.png",
    title: "5 Signs Your Water Heater Needs Professional Attention",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
  {
    id: "2",
    img: "/images/blog-img-2.png",
    title: "Winter Plumbing Prep: Protecting Your Pipes from Freezing",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
  {
    id: "3",
    img: "/images/blog-img-3.png",
    title: "DIY vs. Professional Plumbing: When to Call the Experts",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
  {
    id: "4",
    img: "/images/blog-img-4.png",
    title: "The Hidden Dangers of Chemical Drain Cleaners",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
  {
    id: "5",
    img: "/images/blog-img-5.png",
    title: "Water Pressure Problems: Causes and Solutions",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
  {
    id: "6",
    img: "/images/blog-img-6.png",
    title: " Smart Home Plumbing: Modern Technology for Your Home",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
  {
    id: "7",
    img: "/images/blog-img-7.png",
    title: "Emergency Plumbing: What to Do Before the Plumber Arrives",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
  {
    id: "8",
    img: "/images/blog-img-8.png",
    title: "The Complete Guide to Garbage Disposal Maintenance",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
  {
    id: "9",
    img: "/images/blog-img-9.png",
    title: "Understanding Your Home's Plumbing System",
    description:
      "consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.Lorem ipsum dolor.",
    list: [
      {
        id: 1,
        title: "1.Inconsistent Water Temperature",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 2,
        title: "2.Strange Noises",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 3,
        title: "3.Discolored or Rusty Water",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 4,
        title: "4.Water Around the Unit",
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
      {
        id: 5,
        title: "5.Age of the Unit",
        label:
          "tempora et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, officia. Saepe quasi fugit sequi, eveniet cum quia quaerat quod consectetur alias tempora et eaque architecto ea quidem excepturi debitis error.",
      },
    ],
  },
];
