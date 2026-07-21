import React, { useState } from 'react';
import { 
  Database, TrendingUp, Cpu, Shield, Waves, Mail, Phone, MapPin, 
  Linkedin, Github, BookOpen, ExternalLink, Award, Sparkles, Code, 
  BarChart3, Binary, Settings, Terminal, CheckCircle2, ChevronRight, Briefcase
} from 'lucide-react';
import { FlowingParticles } from '../components/FlowingParticles';
import { InteractiveDashboards } from '../components/InteractiveDashboards';
import { BackendSimulator } from '../components/BackendSimulator';

export default function Home() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<'all' | 'analytics' | 'programming' | 'libraries' | 'tools' | 'concepts'>('all');
  const [activeDashboard, setActiveDashboard] = useState<'HR' | 'Sales'>('HR');
  const [selectedApi, setSelectedApi] = useState<'visionx' | 'astra' | 'waterhole' | 'swarm'>('visionx');

  const contactInfo = {
    email: 'neerajgahlout36@gmail.com',
    phone: '+91 9886690721',
    location: 'Bengaluru, Karnataka, India',
    linkedin: 'https://linkedin.com/in/neeraj-gahlout-b39993308',
    github: 'https://github.com/neerajcoder1'
  };

  const skillsData = [
    // Data Analytics
    { name: 'Power BI', category: 'analytics', level: 'Expert', icon: BarChart3 },
    { name: 'Power Query', category: 'analytics', level: 'Expert', icon: Settings },
    { name: 'DAX Formulas', category: 'analytics', level: 'Advanced', icon: Binary },
    { name: 'Data Modeling', category: 'analytics', level: 'Advanced', icon: Database },
    { name: 'Business Intelligence', category: 'analytics', level: 'Expert', icon: TrendingUp },
    { name: 'Advanced Excel', category: 'analytics', level: 'Advanced', icon: BarChart3 },
    
    // Programming
    { name: 'Python', category: 'programming', level: 'Advanced', icon: Code },
    { name: 'SQL & MySQL', category: 'programming', level: 'Expert', icon: Database },
    
    // Python Libraries
    { name: 'Pandas', category: 'libraries', level: 'Advanced', icon: Code },
    { name: 'NumPy', category: 'libraries', level: 'Advanced', icon: Code },
    { name: 'Matplotlib & Seaborn', category: 'libraries', level: 'Advanced', icon: BarChart3 },
    { name: 'Scikit-learn', category: 'libraries', level: 'Intermediate', icon: Cpu },
    
    // Tools
    { name: 'FastAPI', category: 'tools', level: 'Advanced', icon: Terminal },
    { name: 'REST APIs', category: 'tools', level: 'Advanced', icon: Settings },
    { name: 'VS Code', category: 'tools', level: 'Expert', icon: Code },
    { name: 'Jupyter Notebook', category: 'tools', level: 'Advanced', icon: Code },
    { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: Github },
    
    // Concepts
    { name: 'ETL Pipelines', category: 'concepts', level: 'Advanced', icon: Settings },
    { name: 'Data Cleaning', category: 'concepts', level: 'Expert', icon: Database },
    { name: 'KPI Reporting', category: 'concepts', level: 'Expert', icon: TrendingUp },
    { name: 'Statistical Analysis', category: 'concepts', level: 'Intermediate', icon: Binary },
    { name: 'Star & Snowflake Schema', category: 'concepts', level: 'Advanced', icon: Database },
    { name: 'Fact & Dimension Modeling', category: 'concepts', level: 'Advanced', icon: Database },
  ];

  const filteredSkills = selectedSkillCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === selectedSkillCategory);

  const achievements = [
    { title: 'Winner — Green Hack Hackathon', desc: 'Developed award-winning climate-conscious data models and analytical insights.', icon: Award, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Final Round — HackArena 2.0 Bangalore Zonals', desc: 'Ranked amongst the top analytical teams presenting rapid intelligence solutions.', icon: Award, color: 'text-indigo-600 bg-indigo-50' },
    { title: 'Shortlisted — Smart India Hackathon (SIH)', desc: 'Selected at national scale for solving core governmental business intelligence queries.', icon: Award, color: 'text-amber-600 bg-amber-50' },
    { title: 'Shortlisted — Prakasam Police National AI Hackathon 2026', desc: 'Engineered drowning protection backend telemetry models for state security forces.', icon: Award, color: 'text-sky-600 bg-sky-50' },
    { title: 'Participated — Zero to One National Hackathon', desc: 'Collaborated on end-to-end full-stack architectures and database pipeline flows.', icon: Award, color: 'text-rose-600 bg-rose-50' }
  ];

  const certifications = [
    { provider: 'IBM', name: 'Databases and SQL for Data Science with Python', desc: 'Comprehensive data-science level SQL mastery covering relational paradigms.', badge: 'Verified' },
    { provider: 'Deloitte Australia', name: 'Data Analytics Job Simulation', desc: 'Practical consulting scenario simulation covering requirements, ETL, and presentation.', badge: 'Industry Simulation' },
    { provider: 'Quantium', name: 'Data Analytics Job Simulation', desc: 'Simulated retail transactional diagnostics, pricing modeling, and forecasting.', badge: 'Diagnostics' },
    { provider: 'Tata', name: 'Data Visualisation Job Simulation', desc: 'CXO level storyboard mapping, dashboard flow layout, and KPI diagnostics.', badge: 'Executive Board' },
    { provider: 'Citi', name: 'Markets Quantitative Analysis Job Simulation', desc: 'Derivative modeling, quantitative metrics tracking, and statistical reporting.', badge: 'Quantitative' },
    { provider: 'Microsoft', name: 'Power BI Micro Course', desc: 'Advanced modeling, data-level security, and custom visualization configurations.', badge: 'Power BI Specialist' },
    { provider: 'UniAthena', name: 'Basics of Microsoft Power BI', desc: 'Foundational query folding, DAX calculations, and report architecture design.', badge: 'Foundational' }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-16 sm:pb-24 text-center overflow-hidden pointer-events-auto bg-slate-50/10">
        <FlowingParticles />
        <div className="px-5 z-10 flex flex-col items-center max-w-4xl mx-auto">
          
          {/* Subtle Accent Badge */}
          <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-100/60 text-indigo-700 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm animate-pulse">
            <Sparkles size={12} className="text-indigo-600" />
            <span>Seeking Data Analyst Internships</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-[1.08] mb-6 tracking-tight">
            Turning Raw Data <br />
            Into <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">Actionable Impact.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
            Hi, I'm <strong>Neeraj Gahlout</strong>. A final-year BCA student and technical Data Analyst based in Bengaluru. I build enterprise Power BI dashboards, optimize SQL structures, and engineer AI-powered FastAPI recommendation systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-950 text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Explore Sandbox & Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 hover:text-gray-950 transition-all shadow-sm active:scale-95"
            >
              Contact Coordinates
            </button>
          </div>
        </div>

        {/* Scroll Down Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 animate-bounce text-xs font-semibold text-gray-500">
          <span>Scroll to explore</span>
          <div className="w-1 h-3 rounded-full bg-gray-400"></div>
        </div>
      </section>

      {/* 2. SUMMARY & CONTACT CARD (BENTO BLOCK) */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto w-full pointer-events-auto border-t border-gray-100/50" id="profile">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Professional Narrative (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Professional Summary</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Analytical Mind. Technical Execution.
            </h2>
            <p className="text-base text-gray-700 mb-5 leading-relaxed">
              I am an analytical and detail-oriented final-year BCA student at <strong>Garden City University</strong>. I specialize in the architecture of data pipelines, transforming chaotic and unformatted datasets into visually flawless business intelligence systems.
            </p>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              Through multiple national-level hackathons and real-world projects, I have constructed crime intelligence modules, IoT water safety systems, and AI matching algorithms. I excel at translating complex technical requirements into user-friendly layouts and actionable reporting.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div>
                <span className="text-3xl font-extrabold text-indigo-600">2027</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase block mt-1">BCA Graduation</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-indigo-600">5+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase block mt-1">Hackathon Builds</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-indigo-600">7+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase block mt-1">Certifications</span>
              </div>
            </div>
          </div>

          {/* Quick Info & Contacts Card (Right) */}
          <div className="lg:col-span-5 bg-white border border-gray-200/80 p-8 rounded-3xl shadow-xl shadow-gray-100/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Garden City University</h4>
                  <p className="text-xs text-gray-500">BCA | Bengaluru, Karnataka</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Coordinates</h3>
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail size={16} className="text-gray-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-indigo-600 transition-colors font-medium">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone size={16} className="text-gray-400" />
                  <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-indigo-600 transition-colors font-medium">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/30 font-semibold py-3 rounded-xl text-xs transition-all"
              >
                <Linkedin size={14} />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href={contactInfo.github} 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/30 font-semibold py-3 rounded-xl text-xs transition-all"
              >
                <Github size={14} />
                <span>GitHub Code</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE DASHBOARDS SUITE (POWER BI SANDBOX) */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100 pointer-events-auto" id="projects">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Interactive Sandbox 1</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Explore Live BI Dashboards
            </h2>
            <p className="text-base text-gray-700">
              Below are live functional simulations of my BI analytics solutions. Switch tabs to analyze different departments, dates, or sales metrics and see dynamic rendering recalculations in real-time.
            </p>
          </div>

          <InteractiveDashboards activeDashboard={activeDashboard} setActiveDashboard={setActiveDashboard} />
        </div>
      </section>

      {/* 4. INTERACTIVE REST API SUITE (FASTAPI SANDBOX) */}
      <section className="py-20 bg-slate-900 text-slate-100 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-2 block">Interactive Sandbox 2</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Query Back-End Microservices
            </h2>
            <p className="text-base text-slate-400">
              I develop robust REST APIs in Python using FastAPI. Select a service below, enter query parameters, and submit a live request to visualize real JSON responses and server-side logic outputs.
            </p>
          </div>

          <BackendSimulator selectedApi={selectedApi} setSelectedApi={setSelectedApi} />
        </div>
      </section>

      {/* 5. TECHNICAL SKILLS SECTION */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto w-full pointer-events-auto" id="skills">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">My Toolbelt</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Technical Skill Matrix
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl">
              Filter by category to view detailed proficiency scores and conceptual structures mapped to my technical development processes.
            </p>
          </div>

          {/* Slicers for category */}
          <div className="flex flex-wrap gap-1.5 bg-gray-100 p-1 rounded-xl self-start md:self-auto border border-gray-200/50">
            {[
              { id: 'all', label: 'All Stacks' },
              { id: 'analytics', label: 'BI & Analytics' },
              { id: 'programming', label: 'Languages' },
              { id: 'libraries', label: 'Libraries' },
              { id: 'tools', label: 'Tools' },
              { id: 'concepts', label: 'Concepts' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSkillCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedSkillCategory === cat.id 
                    ? 'bg-gray-950 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" id="skills-matrix-grid">
          {filteredSkills.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200/80 p-5 rounded-2xl shadow-sm hover:border-indigo-400 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-slate-50 text-slate-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                    <IconComp size={16} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{skill.name}</h4>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase text-gray-400 tracking-wider">
                    {skill.category}
                  </span>
                  <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. STATIC PROJECTS SUMMARY GRID */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100 pointer-events-auto" id="portfolio">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Work Directory</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Comprehensive Projects Spec Sheet
            </h2>
            <p className="text-base text-gray-700">
              A precise catalog of backend architectures and business intelligence dashboards developed for organizations, police forces, and hackathon systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700">BI & Analytics</span>
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600">Power BI</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">HR Analytics Dashboard</h4>
                <p className="text-xs text-gray-500 font-semibold mb-4">Tech: Power BI, Excel, Power Query, DAX</p>
                <ul className="text-xs text-gray-700 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Designed interactive HR dashboards mapping KPIs like <strong>Attrition Rate</strong>, Average Salary, and department spreads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Constructed optimal <strong>Power Query</strong> staging ETL and organized robust <strong>Star Schema</strong> fact/dimension relations.</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveDashboard('HR');
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group"
              >
                <span>Interact with Simulation</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700">BI & Analytics</span>
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600">Excel / DAX</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sales Analytics Dashboard</h4>
                <p className="text-xs text-gray-500 font-semibold mb-4">Tech: Power BI, Excel, DAX</p>
                <ul className="text-xs text-gray-700 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Built sales dashboard mapping revenues, operational profits, and order diagnostics for active regions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Configured <strong>YTD vs PY (Time Intelligence)</strong> rolling variances to map annual and monthly performance indices.</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveDashboard('Sales');
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group"
              >
                <span>Interact with Simulation</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700">AI / Recommendation</span>
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600">FastAPI</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">VisionX — Recommendation</h4>
                <p className="text-xs text-gray-500 font-semibold mb-4">Tech: Python, FastAPI, SQL, Scikit-learn</p>
                <ul className="text-xs text-gray-700 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Created an AI-powered internship matching engine using Scikit-Learn NLP text vectors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Calculates cosine similarity vectors to recommend ideal job spreads via performant FastAPI endpoints.</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => {
                  document.getElementById('backend-api-sandbox')?.scrollIntoView({ behavior: 'smooth' });
                  setSelectedApi('visionx');
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group"
              >
                <span>Trigger REST Endpoint</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Project 4 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700">State Security</span>
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600">Crime Intelligence</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">ASTRA — Crime Platform</h4>
                <p className="text-xs text-gray-500 font-semibold mb-4">Tech: Python, FastAPI</p>
                <ul className="text-xs text-gray-700 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Designed backend infrastructure for Karnataka State Police Crime Intelligence platform.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Engineered high-performance relational analytics APIs and geospatial data aggregation pipelines.</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => {
                  document.getElementById('backend-api-sandbox')?.scrollIntoView({ behavior: 'smooth' });
                  setSelectedApi('astra');
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group"
              >
                <span>Trigger REST Endpoint</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Project 5 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700">Safety IoT</span>
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600">AI Alerts</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Prakasam Waterhole Sentinel</h4>
                <p className="text-xs text-gray-500 font-semibold mb-4">Tech: Python, FastAPI, AI</p>
                <ul className="text-xs text-gray-700 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Created drowning prediction modeling APIs integrated with active physical telemetry grids.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Aggregates depth, velocity, and temperature inputs to generate emergency notifications for active units.</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => {
                  document.getElementById('backend-api-sandbox')?.scrollIntoView({ behavior: 'smooth' });
                  setSelectedApi('waterhole');
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group"
              >
                <span>Trigger REST Endpoint</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Project 6 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700">Productivity</span>
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600">Multi-Agent</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">VisionX SwarmAssist</h4>
                <p className="text-xs text-gray-500 font-semibold mb-4">Tech: FastAPI, React, Ollama</p>
                <ul className="text-xs text-gray-700 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Architected backend coordination nodes for multi-agent asynchronous productivity tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>Configured pipeline task execution, agent context queues, and database checkpoint logging.</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => {
                  document.getElementById('backend-api-sandbox')?.scrollIntoView({ behavior: 'smooth' });
                  setSelectedApi('swarm');
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group"
              >
                <span>Trigger REST Endpoint</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. ACHIEVEMENTS SECTION */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto w-full pointer-events-auto" id="achievements">
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Track Record</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Hackathons & Achievements
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Competitive technical development records demonstrating high-pressure problem solving and architectural speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className={`p-3 rounded-xl ${item.color} shrink-0`}>
                  <IconComp size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CERTIFICATIONS SECTION */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-b border-gray-100 pointer-events-auto" id="certifications">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Verified Certifications
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Professional training indices validated by multinational software and consultation groups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{cert.provider}</span>
                    <span className="text-[9px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{cert.badge}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm leading-snug mb-2">{cert.name}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{cert.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 mt-4 uppercase">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                  <span>Completed & Audited</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA SECTION */}
      <section className="py-24 px-5 sm:px-8 max-w-4xl mx-auto w-full text-center pointer-events-auto" id="contact">
        <div className="bg-gray-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-indigo-500/10 to-transparent blur-2xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-radial from-sky-500/10 to-transparent blur-2xl rounded-full" />

          <div className="relative z-10">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3 block">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Let's Build Something Exceptional
            </h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
              I am actively seeking <strong>Data Analyst & Business Intelligence internships</strong> starting immediately. Let's discuss how my analytical modeling and BI development skills can drive value for your team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`mailto:${contactInfo.email}?subject=Inquiry%20from%20Portfolio`}
                className="bg-white text-gray-950 font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-all text-xs w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-lg active:scale-95"
              >
                <Mail size={14} />
                <span>Email: {contactInfo.email}</span>
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-500 transition-all text-xs w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-lg active:scale-95 border border-indigo-500"
              >
                <Linkedin size={14} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
