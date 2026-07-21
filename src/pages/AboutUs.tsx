import React from 'react';
import { 
  Award, BookOpen, Star, Calendar, ArrowRight, ShieldAlert, 
  Database, CheckCircle, TrendingUp, BarChart, Code, Layers 
} from 'lucide-react';

export default function AboutUs() {
  const journeyTimeline = [
    {
      year: "2024",
      title: "Foundations in Computation",
      subtitle: "Commenced BCA at Garden City University, Bengaluru",
      desc: "Began academic training in software design, web development, and database systems. Cultivated a deep curiosity for statistical analysis and structured query formulation."
    },
    {
      year: "2025",
      title: "Data Analytics & SQL Specialization",
      subtitle: "Mastering Database Architecture & BI Platforms",
      desc: "Completed extensive specialized coursework in relational SQL modeling. Self-trained in Advanced Excel modeling and Power BI. Started crafting interactive analytical storyboards."
    },
    {
      year: "2026",
      title: "National Hackathons & Tactical Builds",
      subtitle: "Deploying Rapid AI & Analytics Systems under pressure",
      desc: "Emerged as a Winner at Green Hack and Finalist in HackArena 2.0. Developed key crime intelligence backends for the Karnataka State Police (ASTRA) and IoT drowning predictors (Sentinel)."
    },
    {
      year: "2027",
      title: "BCA Graduation & Future Analytics",
      subtitle: "Completing BCA & seeking Professional Internships",
      desc: "Delivering final-year capstone systems with advanced multi-agent workflows. Open for immediate recruitment as a Data Analyst Intern in pioneering enterprise environments."
    }
  ];

  const methodology = [
    {
      title: "ETL & Power Query Folding",
      desc: "I believe in cleaning data close to the source. I write optimized Power Query scripts and implement query folding to minimize server load and expedite loading.",
      icon: Database
    },
    {
      title: "Star Schema Relationships",
      desc: "No flat tables. I structure highly efficient Star and Snowflake relational models with explicit fact and dimension boundaries to keep models crisp.",
      icon: Layers
    },
    {
      title: "Performant DAX Measures",
      desc: "I write clean, documented DAX measures using variables (VAR) and optimized iteration logic to ensure reports render in milliseconds under load.",
      icon: Code
    },
    {
      title: "CXO Visual Storyboards",
      desc: "A dashboard is only as good as its readability. I design clean layouts with high visual hierarchy, explicit titles, and strict color consistency.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full pointer-events-auto bg-transparent min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="pt-36 pb-16 px-5 sm:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3 block">My Profile</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            The Analyst Behind the Data.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            I am Neeraj Gahlout, a technologist obsessed with translating messy, unstructured arrays into highly legible visual stories. Here is how I built my skills and my core architectural guidelines.
          </p>
        </div>
      </section>

      {/* 2. Journey Timeline */}
      <section className="py-16 bg-slate-50 border-t border-b border-gray-100 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-14 text-center sm:text-left">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1.5 block">Milestones</span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Timeline of Milestones</h2>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4 sm:ml-8 space-y-12">
            {journeyTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 transition-colors shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:bg-white transition-colors" />
                </div>

                {/* Content */}
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-indigo-600/30 font-mono tracking-tight block mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mt-1.5 mb-3">
                    {item.subtitle}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Analytical Methodology Grid */}
      <section className="py-20 px-5 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">My Philosophy</span>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            How I Clean, Model & Visualize
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            I don't just drag fields onto canvas. I adhere to rigorous database normalization and design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methodology.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <IconComp size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Recruiter Q&A */}
      <section className="py-20 px-5 sm:px-8 max-w-3xl mx-auto w-full mb-24">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Quick Reference</span>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Hiring Manager FAQ</h2>
        </div>
        
        <div className="space-y-4">
          {[
            { 
              q: "Are you open to relocation?", 
              a: "Yes. I am currently based in Bengaluru, Karnataka, but I am fully open to relocating to any tech/analytics hub in India or working remotely." 
            },
            { 
              q: "What is your primary analytical tool stack?", 
              a: "My core stack centers on Power BI (Power Query, DAX modeling) and SQL. When dealing with complex pipelines, I integrate Python (Pandas, NumPy) and FastAPI for API delivery." 
            },
            { 
              q: "When are you available to start an internship?", 
              a: "I am available to start immediately as an intern or associate. I can work full-time hours parallel to my concluding BCA syllabus." 
            },
            { 
              q: "How do your developer skills helper your analyst role?", 
              a: "Knowing how to code APIs (FastAPI) and structure SQL databases means I can ingest data directly from microservices. I don't wait for static Excel sheets; I can fetch, pre-clean, and pipeline data myself." 
            },
          ].map((faq, i) => (
            <div key={i} className="rounded-2xl p-6 border border-gray-200 bg-white shadow-sm">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">{faq.q}</h4>
              <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
