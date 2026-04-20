/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Settings, 
  ChevronRight,
  Terminal,
  Printer
} from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-xs uppercase tracking-[4px] font-bold text-accent mb-2">{children}</h2>
    <div className="w-12 h-px bg-line"></div>
  </div>
);

interface ExperienceProps {
  key?: React.Key;
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

const ExperienceItem = ({ title, company, period, location, bullets }: ExperienceProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
      <div>
        <h3 className="text-2xl italic font-display text-ink">{title}</h3>
        <p className="text-accent font-bold text-sm uppercase tracking-wider">{company}</p>
      </div>
      <div className="text-ink/50 text-[10px] uppercase tracking-widest mt-1 md:mt-0">
        {period} — {location}
      </div>
    </div>
    <ul className="space-y-3">
      {bullets.map((bullet: string, idx: number) => (
        <li key={idx} className="text-ink/80 text-sm leading-relaxed flex gap-3">
          <span className="text-accent">•</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

interface EducationProps {
  key?: React.Key;
  degree: string;
  school: string;
  year: string;
  location: string;
}

const EducationItem = ({ degree, school, year, location }: EducationProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <h3 className="text-lg italic font-display text-ink">{degree}</h3>
    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{school}</p>
    <p className="text-ink/40 text-[10px] uppercase tracking-widest">{year} — {location}</p>
  </motion.div>
);

const SkillTag = ({ name }: { name: string; key?: React.Key }) => (
  <span className="inline-block px-3 py-1.5 bg-white border border-line text-[11px] uppercase tracking-wider text-ink/70 rounded-sm">
    {name}
  </span>
);

export default function App() {
  const experiences = [
    {
      title: "Coordenador de Tecnologia",
      company: "Destro",
      period: "05/2019 - 09/2025",
      location: "Cascavel, PR",
      bullets: [
        "Liderei a transição integral dos sistemas ERP, WMS e Força de Vendas, coordenando o treinamento de equipes e representantes garantindo a continuidade das operações.",
        "Estruturei o ecosistema de TI alinhando processos e tecnologias sob uma visão de negócio, posicionando a área como pilar estratégico.",
        "Implementei processos de auditoria digital e cruzamento de dados, transformando informações fiscais/contábeis em recuperação de créditos e benefícios financeiros.",
        "Direcionamento de normas de governança e adequação à LGPD, garantindo operações mais seguras, éticas e em conformidade com a legislação vigente.",
        "Planejamos a cultura de dados e soluções de Business Intelligence (BI) para suporte à tomada de decisão.",
        "Projetei e implementei ambientes de alta disponibilidade baseados em virtualização, otimizando recursos de hardware para suportar a escalabilidade comercial e a continuidade do negócio."
      ]
    },
    {
      title: "Analista de Sistemas",
      company: "Grupo Huber",
      period: "01/2015 - 04/2019",
      location: "Cascavel, PR",
      bullets: [
        "Estruturei a otimização de 2 sistemas WMS/TMS, aumentando a eficiência operacional em 30% no Grupo Huber.",
        "Liderei a troca do Força de Vendas, ajustando processos e capacitando a usabilidade dos representantes comerciais.",
        "Colaborei na auditoria de dados junto a consultorias. Fortaleci a governança e a confiabilidade das informações para decisões seguras."
      ]
    }
      ,
     {
      title: "Analista de Sistemas / Logística",
      company: "Ghelere Transportes",
      period: "01/2012 - 10/2014",
      location: "Cascavel, PR",
      bullets: [
        "Coordenei a implantação e a customização do ERP para as particularidades do transporte rodoviário, otimizando processos logísticos, fiscais e operacionais específicos do segmento.",
        "Assegurei a alta disponibilidade do sistema e do servidor local, garantindo a estabilidade das operações 24/7",
        "Implementei o controle rigoroso de custos operacionais (combustível, pneus e manutenção), transformando dados em indicadores de economia."
        
      ]
    }
    
  ];

  const education = [
    {
      degree: "Pós - BI em Dados Geográfico",
      school: "Anhanguera",
      year: "2025",
      location: "EAD"
    },
    {
      degree: "MBA - Controladoria, Finanças",
      school: "Univel",
      year: "2018",
      location: "Cascavel, PR"
    },
    {
      degree: "Tecnólogo em Logística",
      school: "Univel",
      year: "2012",
      location: "Cascavel, PR"
    },
    {
      degree: "Analista de Sistema",
      school: "Universidade Presbiteriana Mackenzie",
      year: "1999",
      location: "São Paulo, SP"
    }
  ];

  const skills = ["Programação", "Redes", "Arquitetura", "DevOps", "Regras de Negócio", "SQL", "LLM Automações"];

  const courses = [
    { name: "Desenvolvimento Sistemas", details: "Diversas linguagens de Programação, python, javascript e java." },
    { name: "Gestão de Pessoas e Cultura de Feedback", details: "Liderança e desenvolvimento de equipes." },
    { name: "Inteligência Emocional - PDI", details: "Autodesenvolvimento, autogestão e comunicação assertiva." },
    { name: "Data Science & Analytics SQL", details: "Análise avançada de dados e modelagem SQL." },
    { name: "Regras de Negócio", details: "Contabilidade, fiscal, logística, comercial, compras, pcp e financeiro." }
  ];

  return (
    <div className="min-h-screen bg-bg text-ink font-sans flex relative overflow-x-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex w-20 border-r border-line flex-col justify-between items-center py-12 sticky h-screen top-0">
        <div className="vertical-text text-[10px] uppercase tracking-[4px] font-bold opacity-30 rotate-180">
          PORTIFÓLIO PESSOAL
        </div>
        <div className="vertical-text text-[10px] uppercase tracking-[4px] font-bold opacity-30 rotate-180">
          CURRÍCULO ONLINE
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Accent Shape */}
        <div className="accent-shape w-[300px] h-[300px] top-20 right-40"></div>
        
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
          {/* Header */}
          <header className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs uppercase tracking-[3px] font-bold text-accent mb-4 ml-1">
                Business | Coordenação | Desenvolvimento | ERP
              </p>
              <h1 className="text-7xl md:text-9xl font-display italic leading-[0.95] tracking-tight mb-8">
                Douglas<br /> <span className="ml-10">Desidério</span>
              </h1>
            </motion.div>
          </header>

          {/* Left Column */}
          <div className="space-y-20">
            {/* Bio */}
            <section>
              <p className="text-2xl md:text-3xl font-display leading-relaxed text-ink/90 max-w-2xl">
                Transformar tecnologia em resultados reais ao negócio.
              </p>
            </section>

            {/* Experience */}
            <section>
              <SectionTitle>Experiência Profissional</SectionTitle>
              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <ExperienceItem key={idx} {...exp} />
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle>Educação</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {education.map((edu, idx) => (
                  <EducationItem key={idx} {...edu} />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar Info) */}
          <aside className="space-y-12">
            <div className="bg-white border border-line p-8 md:p-10 sticky top-24">
              {/* Contacts */}
              <div className="mb-12">
                <h4 className="text-[10px] uppercase tracking-[3px] font-bold text-accent mb-6">Contatos</h4>
                <div className="space-y-4">
                  <a href="mailto:douglas.salvador@gmail.com" className="block text-sm hover:text-accent transition-colors border-b border-transparent hover:border-accent w-fit pb-1">
                    douglas.salvador@gmail.com
                  </a>
                  
                  <p className="text-sm text-ink/60 pt-2">Cascavel, PR</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-12">
                <h4 className="text-[10px] uppercase tracking-[3px] font-bold text-accent mb-6">Habilidades</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <SkillTag key={idx} name={skill} />
                  ))}
                </div>
              </div>

              {/* Courses */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[3px] font-bold text-accent mb-6">Treinamento</h4>
                <div className="space-y-6">
                  {courses.map((course, idx) => (
                    <div key={idx}>
                      <h5 className="text-xs font-bold text-ink mb-1">{course.name}</h5>
                      <p className="text-[10px] text-ink/50 leading-relaxed uppercase tracking-wider">{course.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Footer Action */}
          <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-6 pt-12 border-t border-line no-print">
            <a 
              href="mailto:douglas.salvador@gmail.com"
              className="bg-ink text-bg px-10 py-5 text-[11px] uppercase tracking-[3px] font-bold hover:bg-accent transition-colors w-full md:w-auto text-center"
            >
              Entrar em Contato
            </a>
            <button 
              type="button"
              onClick={() => {
                window.focus();
                window.print();
              }}
              className="border border-ink text-ink px-10 py-5 text-[11px] uppercase tracking-[3px] font-bold hover:bg-ink hover:text-bg transition-all w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Imprimir em PDF <Printer size={16} />
            </button>
            <span className="text-[10px] uppercase tracking-[2px] opacity-40">
              Disponível para novos desafios estratégicos
            </span>
          </div>
        </div>

        {/* Year Marker */}
        <div className="absolute bottom-12 right-12 text-[80px] md:text-[120px] font-display font-bold opacity-[0.03] select-none pointer-events-none no-print">
          2026
        </div>
      </div>
    </div>
  );
}
