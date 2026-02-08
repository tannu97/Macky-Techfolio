import { messages, projects, services, type InsertMessage, type Project, type Service } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<void>;
  getProjects(): Promise<Project[]>;
  getServices(): Promise<Service[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(message: InsertMessage): Promise<void> {
    await db.insert(messages).values(message);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async seedData(): Promise<void> {
    const existingServices = await db.select().from(services);
    if (existingServices.length === 0) {
      await db.insert(services).values([
        {
          title: "Web Development",
          description: "Custom websites and web applications built with modern technologies. Responsive, fast, and SEO-optimized solutions.",
          icon: "Globe",
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with exceptional performance.",
          icon: "Smartphone",
        },
        {
          title: "UI/UX Design",
          description: "Beautiful, intuitive designs that enhance user experience. User-centered design approach for maximum engagement.",
          icon: "Palette",
        },
        {
          title: "Cyber Security",
          description: "Protect your data and systems from cyber threats. We offer a range of services to keep your business secure.",
          icon: "Shield",
        },
        {
          title: "AI & ML",
          description: "AI and Machine Learning solutions to automate your business processes and improve efficiency.",
          icon: "Brain",
        },
        {
          title: "Data Analytics",
          description: "Transform your data into actionable insights. Advanced analytics and BI solutions to drive data-driven decisions.",
          icon: "BarChart",
        },
        {
          title: "Digital Marketing",
          description: "Boost your online presence with comprehensive digital marketing strategies. SEO, social media, and PPC campaigns.",
          icon: "Megaphone",
        },
        {
          title: "Cloud & IT Solutions",
          description: "Cloud migration, infrastructure management, and IT consulting. Secure, scalable, and cost-effective solutions.",
          icon: "Cloud",
        },
      ]);
    }

    const existingProjects = await db.select().from(projects);
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        {
          title: "E-Commerce Platform",
          category: "Web",
          description: "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
          techStack: ["React", "Node.js", "MongoDB", "Stripe"],
          imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        },
        {
          title: "Fitness Tracker App",
          category: "App",
          description: "Mobile app for tracking workouts, nutrition, and fitness goals with real-time synchronization.",
          techStack: ["React Native", "Firebase", "Redux"],
          imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
        },
        {
          title: "CRM System",
          category: "Software",
          description: "Comprehensive customer relationship management system with analytics and reporting features.",
          techStack: ["Vue.js", "Laravel", "MySQL", "Redis"],
          imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        },
        {
          title: "Restaurant Website",
          category: "Web",
          description: "Modern restaurant website with online ordering, menu management, and reservation system.",
          techStack: ["Next.js", "Tailwind CSS", "Sanity CMS"],
          imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        },
        {
          title: "Social Media App",
          category: "App",
          description: "Cross-platform social media application with real-time messaging and content sharing.",
          techStack: ["Flutter", "Firebase", "Cloud Functions"],
          imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        },
        {
          title: "Inventory Management",
          category: "Software",
          description: "Enterprise inventory management system with barcode scanning and automated reporting.",
          techStack: ["Angular", "Spring Boot", "PostgreSQL"],
          imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
        },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
