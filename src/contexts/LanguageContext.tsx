import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
  formatNumber: (number: number) => string;
  formatDate: (date: Date) => string;
  formatPhone: (phone: string) => string;
}

const translations = {
  en: {
    // Common/Navigation
    nav: {
      home: "Home",
      about: "About",
      aboutVision: "About & Vision",
      ourTeam: "Our Team",
      teachersCommunity: "Teachers & Community",
      programs: "Programs",
      programsOverview: "Programs Overview",
      phase1: "Phase 1",
      phase2: "Phase 2",
      phase3: "Phase 3",
      phase4: "Phase 4",
      phase5: "Phase 5",
      apply: "Apply",
      applyStudent: "Apply as Student",
      applyVolunteer: "Apply as Volunteer/Partner",
      contact: "Contact",
      languageSelector: "Language"
    },

    // Validation Messages
    validation: {
      required: "This field is required",
      emailInvalid: "Please enter a valid email address",
      phoneInvalid: "Please enter a valid phone number",
      minLength: "Must be at least {min} characters",
      maxLength: "Must be no more than {max} characters",
      fieldRequired: "{field} is required",
      submitting: "Submitting...",
      submitError: "Something went wrong. Please try again.",
      networkError: "Network error. Please check your connection."
    },

    // Footer
    footer: {
      aboutProject: "About the Project",
      aboutDescription: "The Cloud Trail Project empowers Sahrawi refugees through digital skills and remote work opportunities, creating pathways to economic independence.",
      quickLinks: "Quick Links",
      programs: "Programs",
      applyNow: "Apply Now",
      volunteer: "Volunteer",
      donate: "Donate",
      contact: "Contact Us",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterDescription: "Stay updated with our latest news and success stories",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      copyright: "© 2025 Cloud Trail Project. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },

    // Common UI Elements
    common: {
      loading: "Loading...",
      save: "Save",
      cancel: "Cancel",
      edit: "Edit",
      delete: "Delete",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",
      ok: "OK",
      close: "Close",
      next: "Next",
      previous: "Previous",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      viewMore: "View More",
      viewLess: "View Less",
      learnMore: "Learn More",
      getStarted: "Get Started",
      joinNow: "Join Now",
      backToTop: "Back to Top"
    },

    // About & Vision Page
    aboutVision: {
      heroTitle: "Our Vision",
      heroSubtitle: "Following Knowledge Like Our Ancestors Followed The Rain",
      visionStatement1: "The Cloud Trail Project envisions a future where Sahrawi refugees transform their circumstances through digital skills and remote work opportunities. We're building pathways to economic independence that transcend geographical limitations, creating a self-sustaining ecosystem of learning and earning within refugee communities.",
      visionStatement2: "We believe technology and education are the new sources of sustenance in resource-scarce environments—just as our ancestors followed clouds across the desert to find water, today's Sahrawi youth can follow digital trails to find opportunity and dignity.",
      visionStatement3: "Our model moves from donor-supported education to a self-sustaining social enterprise where students become earners, mentors, and community leaders. We aim to create spaces where women and youth lead digital transformation, turning refugee camps into innovation and remote work hubs.",
      visionStatement4: "By 2030, we envision graduates running their own digital businesses, teaching new cohorts, and connecting their community to global opportunities—proving that with the right skills, geographical isolation need not limit human potential.",
      founderName: "Chej Ahamed",
      founderTitle: "Founder & Program Director, Cloud Trail Project",
      storyTitle: "Our Story and Mission",
      beginningTitle: "Our Beginning",
      beginning1: "The Cloud Trail Project was born from a simple yet powerful observation: digital skills represent an untapped pathway to opportunity in the Sahrawi refugee camps, where physical resources are scarce. Founded in 2025, this grassroots initiative aims to bridge the digital divide for Sahrawi youth and women.",
      beginning2: "Named in honour of the nomadic tradition of following clouds in search of rain, Cloud Trail reimagines that journey — now following knowledge and technology as the new sources of sustenance in the modern world.",
      missionTitle: "Our Mission",
      missionStatement: "To empower Sahrawi refugee youth and women by providing digital literacy, language training, and pathways to remote work opportunities, creating a self-sustaining educational ecosystem that leads to economic dignity.",
      missionDescription: "We're building a program that doesn't just teach technical skills but creates a complete pathway from basic digital literacy to employment while fostering community ownership and long-term sustainability.",
      quote: "The cloud trail once led our people to water in the desert. Today, it leads our youth to knowledge, opportunity, and dignity in a digital world.",
      quoteAuthor: "Chej Ahamed, Founder & Program Director",
      coreValuesTitle: "Our Core Values",
      communityCentered: "Community-Centered",
      communityCenteredDesc: "Everything we do strengthens and empowers the Sahrawi refugee community, with programs designed by and for community members.",
      sustainableImpact: "Sustainable Impact",
      sustainableImpactDesc: "We build programs that become self-sustaining, creating lasting change that continues long after initial support ends.",
      dignityOpportunity: "Dignity & Opportunity",
      dignityOpportunityDesc: "We believe every person deserves the opportunity to shape their own future with dignity, regardless of their circumstances."
    },

    // Our Team Page
    team: {
      heroTitle: "Meet Our Team",
      heroSubtitle: "Dedicated leaders bringing together diverse expertise to empower Sahrawi refugees through digital education and opportunity.",
      leadershipTitle: "Leadership Team",
      leadershipSubtitle: "Our leadership combines lived experience, technical expertise, and deep commitment to creating sustainable change in refugee communities.",

      founderDirector: "Founder & Program Director",
      socialImpactDirector: "Social Impact and Research Director",
      itDirector: "IT Director",

      chejBio: "Born in the Sahrawi refugee camps of Tindouf, Algeria, Chej embodies the journey from refugee to software engineer. His personal experience under the harsh conditions of displacement fuels his passion for the Cloud Trail Project. Having been fortunate enough to leave the camps and build a career in technology, Chej is driven by an unwavering commitment to create pathways for others still waiting for change. He believes deeply that digital skills can transcend physical borders, allowing his community to build livelihoods and dignity regardless of their circumstances. Through Cloud Trail, Chej doesn't just share technical knowledge—he shares hope, connecting his worlds by \"following knowledge like our ancestors followed the rain.\"",

      gianninaBio: "With an MSc in Health and International Development and deep experience in cross-cultural research, Giannina brings both academic excellence and genuine passion to the Cloud Trail Project. Having spent years immersed in indigenous communities throughout the Amazon, she has witnessed firsthand how access to education and resources can transform lives, particularly for women and youth. Her expertise in designing culturally-responsive research methodologies ensures our programs remain centred on community needs and dignity. Giannina's commitment to gender equity shapes our inclusive approach, while her skills in monitoring and evaluation strengthen our ability to measure real impact. For her, sustainable development must be built with—not for—communities, making her approach both empathetic and effective in creating lasting change.",

      traianBio: "With over five years of hands-on experience in full-stack development, system architecture, and team leadership, Traian brings deep technical expertise and real-world problem-solving to the Cloud Trail Project. Born and raised in Europe and now based in the UK, his journey through leading-edge technologies—from microservices and cloud computing to agile product development—makes him uniquely suited to build resilient, high-impact digital training platforms. Having previously led development teams in the healthcare sector, Traian is committed to applying his skills where they matter most: empowering communities that traditionally have limited access to technology. At Cloud Trail, he oversees IT infrastructure, curriculum technical design, and ensures our students gain real-world-ready skills. For Traian, technology isn't just about coding—it's about building bridges to opportunity, scalability, and dignity for refugee communities. His leadership transforms our classrooms into pathways for a better future, one project, one student at a time.",

      connectLinkedIn: "Connect on LinkedIn",
      localTeamTitle: "Local Coordination Team",
      localTeamSubtitle: "Our on-the-ground team in Smara brings together educational expertise, technical knowledge, and deep community connections.",
      programCoordinators: "Program Coordinators",
      programCoordinatorsDesc: "Local leaders who oversee daily operations and ensure programs meet community needs",
      teachingAssistants: "Teaching Assistants",
      teachingAssistantsDesc: "Graduates who return to mentor new students, creating a sustainable learning cycle",
      communityLiaisons: "Community Liaisons",
      communityLiaisonsDesc: "Trusted community members who bridge the program with local families and organizations",
      contactTeam: "Want to learn more about our team or explore collaboration opportunities?",
      contactUs: "Contact Us"
    },

    // Teachers & Community Page
    teachersCommunity: {
      title: "Teachers & Community",
      quote: "We're not just teaching coding or digital skills. We're building a sustainable ecosystem where knowledge flows from student to student, from graduates to new learners, creating a cycle of opportunity that grows stronger with each cohort.",
      quoteAuthor: "Giannina Chavez, Social Impact and Research Director",

      teachingApproachTitle: "Our Teaching Approach",
      teachingApproachSubtitle: "Cloud Trail brings together local talent and international expertise to create a rich learning environment:",

      programCoordinator: "Program Coordinator",
      programCoordinatorDesc: "Oversees curriculum implementation and program quality",
      leadInstructor: "Lead Instructor",
      leadInstructorDesc: "Delivers core technical content and guides student development",
      teachingAssistants: "Teaching Assistants",
      teachingAssistantsDesc: "Selected from top graduates who return to mentor new students",
      remoteMentors: "Remote Mentors",
      remoteMentorsDesc: "International tech professionals who provide virtual guidance and expertise",

      teacherDevTitle: "Teacher Development",
      teacherDevSubtitle: "We invest in developing local teaching capacity through our train-the-trainer model:",

      devPoint1: "Initial intensive training for instructors before program launch",
      devPoint2: "Ongoing professional development opportunities",
      devPoint3: "Progressive responsibility increase over time",
      devPoint4: "Leadership opportunities within the program",
      devPoint5: "Skills certification and professional credentials",

      localCapacityTitle: "Building Local Capacity",
      localCapacitySubtitle: "Our long-term sustainability depends on developing local capacity:",

      capacityPoint1: "Graduates become teaching assistants and eventually instructors",
      capacityPoint2: "Community members participate in program governance",
      capacityPoint3: "Local leadership takes increasing ownership of direction and operations",
      capacityPoint4: "Knowledge remains within the community, creating lasting impact",

      partnersTitle: "Our Partners",
      partnersSubtitle: "The Cloud Trail Project is proud to partner with organizations that share our vision:",
      partnerName: "Not Forgotten International",
      partnerDesc: "Providing infrastructure and facility support",
      additionalPartners: "Additional partners to be listed as confirmed",
      partnershipOpportunities: "Learn more about partnership opportunities",

      joinJourneyTitle: "Join Our Journey",
      applyStudent: "Apply as a Student",
      supportMission: "Support Our Mission",
      volunteerExpertise: "Volunteer Your Expertise",
      contactUs: "Contact Us"
    },

    // Contact Page
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with the Cloud Trail Project team. We'd love to hear from you.",
      getInTouch: "Get in Touch",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",

      contactInfo: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",

      followUs: "Follow Our Journey",
      socialMedia: "Stay connected with our latest updates and success stories.",

      partnerWithUs: "Partner With Us",
      partnershipDesc: "Interested in supporting our mission? We welcome partnerships with organizations that share our vision of empowering refugee communities through digital education."
    },

    // Application Forms
    apply: {
      studentTitle: "Apply as a Student",
      studentSubtitle: "Join the Cloud Trail Project and start your journey toward digital literacy and career opportunities.",

      volunteerTitle: "Apply as Volunteer/Partner",
      volunteerSubtitle: "Join our mission to empower Sahrawi refugee communities through digital education and opportunity.",

      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      age: "Age",
      education: "Education Level",
      experience: "Previous Experience",
      motivation: "Why do you want to join?",
      availability: "Availability",
      skills: "Skills/Expertise",
      submit: "Submit Application",

      personalInfo: "Personal Information",
      background: "Background",
      interests: "Interests & Goals",

      tellUsAboutYourself: "Tell us about yourself and your goals...",
      describeExperience: "Describe your relevant experience...",
      whyJoinProgram: "Why do you want to join this program?",

      submissionSuccess: "Thank you for your application! We'll be in touch soon.",
      submissionError: "There was an error submitting your application. Please try again."
    },

    // Phase pages
    phase1: {
      title: "Phase 1: Digital Literacy & Language",
      subtitle: "Building Your Foundation",
      duration: "2 months",
      description: "The Digital Literacy & Language phase provides students with essential computer skills and language proficiency to succeed in the digital economy.",
      whatYouLearn: "What You'll Learn",
      computerFundamentals: "Computer Fundamentals",
      coreDigitalTools: "Core Digital Tools",
      languageForTech: "Language for Tech",
      learningMethods: "Learning Methods",
      outcomes: "Outcomes",
      outcomeDescription: "Upon completing Phase 1, students will:"
    }
  },

  es: {
    // Common/Navigation
    nav: {
      home: "Inicio",
      about: "Acerca de",
      aboutVision: "Acerca de & Visión",
      ourTeam: "Nuestro Equipo",
      teachersCommunity: "Maestros y Comunidad",
      programs: "Programas",
      programsOverview: "Resumen de Programas",
      phase1: "Fase 1",
      phase2: "Fase 2",
      phase3: "Fase 3",
      phase4: "Fase 4",
      phase5: "Fase 5",
      apply: "Aplicar",
      applyStudent: "Aplicar como Estudiante",
      applyVolunteer: "Aplicar como Voluntario/Socio",
      contact: "Contacto",
      languageSelector: "Idioma"
    },

    // Validation Messages
    validation: {
      required: "Este campo es obligatorio",
      emailInvalid: "Por favor ingrese una dirección de correo válida",
      phoneInvalid: "Por favor ingrese un número de teléfono válido",
      minLength: "Debe tener al menos {min} caracteres",
      maxLength: "No debe tener más de {max} caracteres",
      fieldRequired: "{field} es obligatorio",
      submitting: "Enviando...",
      submitError: "Algo salió mal. Por favor inténtelo de nuevo.",
      networkError: "Error de red. Por favor verifique su conexión."
    },

    // Footer
    footer: {
      aboutProject: "Sobre el Proyecto",
      aboutDescription: "El Proyecto Cloud Trail empodera a los refugiados saharauis a través de habilidades digitales y oportunidades de trabajo remoto, creando caminos hacia la independencia económica.",
      quickLinks: "Enlaces Rápidos",
      programs: "Programas",
      applyNow: "Aplicar Ahora",
      volunteer: "Voluntario",
      donate: "Donar",
      contact: "Contáctanos",
      followUs: "Síguenos",
      newsletter: "Boletín",
      newsletterDescription: "Mantente actualizado con nuestras últimas noticias e historias de éxito",
      emailPlaceholder: "Ingresa tu correo",
      subscribe: "Suscribirse",
      copyright: "© 2025 Proyecto Cloud Trail. Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio"
    },

    // Common UI Elements
    common: {
      loading: "Cargando...",
      save: "Guardar",
      cancel: "Cancelar",
      edit: "Editar",
      delete: "Eliminar",
      confirm: "Confirmar",
      yes: "Sí",
      no: "No",
      ok: "Aceptar",
      close: "Cerrar",
      next: "Siguiente",
      previous: "Anterior",
      search: "Buscar",
      filter: "Filtrar",
      sort: "Ordenar",
      viewMore: "Ver Más",
      viewLess: "Ver Menos",
      learnMore: "Aprender Más",
      getStarted: "Comenzar",
      joinNow: "Únete Ahora",
      backToTop: "Volver Arriba"
    },

    // About & Vision Page
    aboutVision: {
      heroTitle: "Nuestra Visión",
      heroSubtitle: "Siguiendo el Conocimiento Como Nuestros Ancestros Siguieron la Lluvia",
      visionStatement1: "El Proyecto Cloud Trail visualiza un futuro donde los refugiados saharauis transforman sus circunstancias a través de habilidades digitales y oportunidades de trabajo remoto. Estamos construyendo caminos hacia la independencia económica que trascienden las limitaciones geográficas, creando un ecosistema autosostenible de aprendizaje y ganancia dentro de las comunidades de refugiados.",
      visionStatement2: "Creemos que la tecnología y la educación son las nuevas fuentes de sustento en entornos con recursos escasos—así como nuestros ancestros siguieron las nubes a través del desierto para encontrar agua, los jóvenes saharauis de hoy pueden seguir senderos digitales para encontrar oportunidad y dignidad.",
      visionStatement3: "Nuestro modelo pasa de la educación apoyada por donantes a una empresa social autosostenible donde los estudiantes se convierten en trabajadores, mentores y líderes comunitarios. Buscamos crear espacios donde las mujeres y los jóvenes lideren la transformación digital, convirtiendo los campos de refugiados en centros de innovación y trabajo remoto.",
      visionStatement4: "Para 2030, visualizamos graduados dirigiendo sus propios negocios digitales, enseñando a nuevas cohortes y conectando su comunidad con oportunidades globales—demostrando que con las habilidades correctas, el aislamiento geográfico no necesita limitar el potencial humano.",
      founderName: "Chej Ahamed",
      founderTitle: "Fundador y Director del Programa, Proyecto Cloud Trail",
      storyTitle: "Nuestra Historia y Misión",
      beginningTitle: "Nuestro Comienzo",
      beginning1: "El Proyecto Cloud Trail nació de una observación simple pero poderosa: las habilidades digitales representan un camino inexplorado hacia la oportunidad en los campos de refugiados saharauis, donde los recursos físicos son escasos. Fundada en 2025, esta iniciativa de base busca cerrar la brecha digital para los jóvenes y mujeres saharauis.",
      beginning2: "Nombrado en honor a la tradición nómada de seguir las nubes en busca de lluvia, Cloud Trail reimagina ese viaje — ahora siguiendo el conocimiento y la tecnología como las nuevas fuentes de sustento en el mundo moderno.",
      missionTitle: "Nuestra Misión",
      missionStatement: "Empoderar a los jóvenes y mujeres refugiados saharauis proporcionando alfabetización digital, entrenamiento en idiomas y caminos hacia oportunidades de trabajo remoto, creando un ecosistema educativo autosostenible que conduzca a la dignidad económica.",
      missionDescription: "Estamos construyendo un programa que no solo enseña habilidades técnicas sino que crea un camino completo desde la alfabetización digital básica hasta el empleo mientras fomenta la propiedad comunitaria y la sostenibilidad a largo plazo.",
      quote: "El sendero de las nubes una vez llevó a nuestro pueblo al agua en el desierto. Hoy, lleva a nuestros jóvenes al conocimiento, la oportunidad y la dignidad en un mundo digital.",
      quoteAuthor: "Chej Ahamed, Fundador y Director del Programa",
      coreValuesTitle: "Nuestros Valores Fundamentales",
      communityCentered: "Centrado en la Comunidad",
      communityCenteredDesc: "Todo lo que hacemos fortalece y empodera a la comunidad de refugiados saharauis, con programas diseñados por y para miembros de la comunidad.",
      sustainableImpact: "Impacto Sostenible",
      sustainableImpactDesc: "Construimos programas que se vuelven autosostenibles, creando cambios duraderos que continúan mucho después de que termine el apoyo inicial.",
      dignityOpportunity: "Dignidad y Oportunidad",
      dignityOpportunityDesc: "Creemos que toda persona merece la oportunidad de moldear su propio futuro con dignidad, independientemente de sus circunstancias."
    },

    // Our Team Page
    team: {
      heroTitle: "Conoce Nuestro Equipo",
      heroSubtitle: "Líderes dedicados que reúnen experiencia diversa para empoderar a los refugiados saharauis a través de la educación digital y las oportunidades.",
      leadershipTitle: "Equipo de Liderazgo",
      leadershipSubtitle: "Nuestro liderazgo combina experiencia vivida, experiencia técnica y un compromiso profundo para crear cambios sostenibles en las comunidades de refugiados.",

      founderDirector: "Fundador y Director del Programa",
      socialImpactDirector: "Director de Impacto Social e Investigación",
      itDirector: "Director de TI",

      chejBio: "Nacido en los campos de refugiados saharauis de Tinduf, Argelia, Chej encarna el viaje de refugiado a ingeniero de software. Su experiencia personal bajo las duras condiciones del desplazamiento alimenta su pasión por el Proyecto Cloud Trail. Habiendo tenido la fortuna de dejar los campamentos y construir una carrera en tecnología, Chej está impulsado por un compromiso inquebrantable de crear caminos para otros que aún esperan el cambio. Cree profundamente que las habilidades digitales pueden trascender las fronteras físicas, permitiendo a su comunidad construir medios de vida y dignidad independientemente de sus circunstancias. A través de Cloud Trail, Chej no solo comparte conocimiento técnico—comparte esperanza, conectando sus mundos \"siguiendo el conocimiento como nuestros ancestros siguieron la lluvia.\"",

      gianninaBio: "Con una Maestría en Salud y Desarrollo Internacional y experiencia profunda en investigación intercultural, Giannina aporta tanto excelencia académica como pasión genuina al Proyecto Cloud Trail. Habiendo pasado años inmersa en comunidades indígenas en toda la Amazonía, ha sido testigo de primera mano de cómo el acceso a la educación y los recursos puede transformar vidas, particularmente para mujeres y jóvenes. Su experiencia en el diseño de metodologías de investigación culturalmente receptivas asegura que nuestros programas permanezcan centrados en las necesidades y dignidad de la comunidad. El compromiso de Giannina con la equidad de género da forma a nuestro enfoque inclusivo, mientras que sus habilidades en monitoreo y evaluación fortalecen nuestra capacidad de medir el impacto real. Para ella, el desarrollo sostenible debe construirse con—no para—las comunidades, haciendo que su enfoque sea tanto empático como efectivo para crear cambios duraderos.",

      traianBio: "Con más de cinco años de experiencia práctica en desarrollo full-stack, arquitectura de sistemas y liderazgo de equipos, Traian aporta experiencia técnica profunda y resolución de problemas del mundo real al Proyecto Cloud Trail. Nacido y criado en Europa y ahora con base en el Reino Unido, su viaje a través de tecnologías de vanguardia—desde microservicios y computación en la nube hasta desarrollo ágil de productos—lo hace singularmente adecuado para construir plataformas de entrenamiento digital resilientes y de alto impacto. Habiendo liderado previamente equipos de desarrollo en el sector de la salud, Traian está comprometido a aplicar sus habilidades donde más importa: empoderando comunidades que tradicionalmente tienen acceso limitado a la tecnología. En Cloud Trail, supervisa la infraestructura de TI, el diseño técnico del currículo y asegura que nuestros estudiantes obtengan habilidades listas para el mundo real. Para Traian, la tecnología no se trata solo de codificar—se trata de construir puentes hacia la oportunidad, escalabilidad y dignidad para las comunidades de refugiados. Su liderazgo transforma nuestras aulas en caminos hacia un futuro mejor, un proyecto, un estudiante a la vez.",

      connectLinkedIn: "Conectar en LinkedIn",
      localTeamTitle: "Equipo de Coordinación Local",
      localTeamSubtitle: "Nuestro equipo sobre el terreno en Smara reúne experiencia educativa, conocimiento técnico y conexiones comunitarias profundas.",
      programCoordinators: "Coordinadores del Programa",
      programCoordinatorsDesc: "Líderes locales que supervisan las operaciones diarias y aseguran que los programas satisfagan las necesidades de la comunidad",
      teachingAssistants: "Asistentes de Enseñanza",
      teachingAssistantsDesc: "Graduados que regresan para mentorear a nuevos estudiantes, creando un ciclo de aprendizaje sostenible",
      communityLiaisons: "Enlaces Comunitarios",
      communityLiaisonsDesc: "Miembros de la comunidad de confianza que conectan el programa con familias y organizaciones locales",
      contactTeam: "¿Quieres aprender más sobre nuestro equipo o explorar oportunidades de colaboración?",
      contactUs: "Contáctanos"
    },

    // Teachers & Community Page
    teachersCommunity: {
      title: "Maestros y Comunidad",
      quote: "No solo estamos enseñando codificación o habilidades digitales. Estamos construyendo un ecosistema sostenible donde el conocimiento fluye de estudiante a estudiante, de graduados a nuevos aprendices, creando un ciclo de oportunidad que se fortalece con cada cohorte.",
      quoteAuthor: "Giannina Chavez, Directora de Impacto Social e Investigación",

      teachingApproachTitle: "Nuestro Enfoque de Enseñanza",
      teachingApproachSubtitle: "Cloud Trail reúne talento local y experiencia internacional para crear un ambiente de aprendizaje rico:",

      programCoordinator: "Coordinador del Programa",
      programCoordinatorDesc: "Supervisa la implementación del currículo y la calidad del programa",
      leadInstructor: "Instructor Principal",
      leadInstructorDesc: "Entrega contenido técnico central y guía el desarrollo de estudiantes",
      teachingAssistants: "Asistentes de Enseñanza",
      teachingAssistantsDesc: "Seleccionados de los mejores graduados que regresan para mentorear a nuevos estudiantes",
      remoteMentors: "Mentores Remotos",
      remoteMentorsDesc: "Profesionales tecnológicos internacionales que proporcionan orientación y experiencia virtual",

      teacherDevTitle: "Desarrollo de Maestros",
      teacherDevSubtitle: "Invertimos en desarrollar capacidad de enseñanza local a través de nuestro modelo de entrenar al entrenador:",

      devPoint1: "Entrenamiento intensivo inicial para instructores antes del lanzamiento del programa",
      devPoint2: "Oportunidades de desarrollo profesional continuo",
      devPoint3: "Aumento progresivo de responsabilidad con el tiempo",
      devPoint4: "Oportunidades de liderazgo dentro del programa",
      devPoint5: "Certificación de habilidades y credenciales profesionales",

      localCapacityTitle: "Construyendo Capacidad Local",
      localCapacitySubtitle: "Nuestra sostenibilidad a largo plazo depende del desarrollo de capacidad local:",

      capacityPoint1: "Los graduados se convierten en asistentes de enseñanza y eventualmente instructores",
      capacityPoint2: "Los miembros de la comunidad participan en la gobernanza del programa",
      capacityPoint3: "El liderazgo local toma creciente propiedad de la dirección y operaciones",
      capacityPoint4: "El conocimiento permanece dentro de la comunidad, creando impacto duradero",

      partnersTitle: "Nuestros Socios",
      partnersSubtitle: "El Proyecto Cloud Trail se enorgullece de asociarse con organizaciones que comparten nuestra visión:",
      partnerName: "Not Forgotten International",
      partnerDesc: "Proporcionando infraestructura y apoyo de instalaciones",
      additionalPartners: "Socios adicionales a ser listados cuando se confirmen",
      partnershipOpportunities: "Aprende más sobre oportunidades de asociación",

      joinJourneyTitle: "Únete a Nuestro Viaje",
      applyStudent: "Aplicar como Estudiante",
      supportMission: "Apoyar Nuestra Misión",
      volunteerExpertise: "Ser Voluntario con Tu Experiencia",
      contactUs: "Contáctanos"
    },

    // Contact Page
    contact: {
      title: "Contáctanos",
      subtitle: "Ponte en contacto con el equipo del Proyecto Cloud Trail. Nos encantaría saber de ti.",
      getInTouch: "Ponte en Contacto",
      name: "Nombre",
      email: "Correo Electrónico",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar Mensaje",

      contactInfo: "Información de Contacto",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono",
      addressLabel: "Dirección",

      followUs: "Sigue Nuestro Viaje",
      socialMedia: "Mantente conectado con nuestras últimas actualizaciones e historias de éxito.",

      partnerWithUs: "Asóciate con Nosotros",
      partnershipDesc: "¿Interesado en apoyar nuestra misión? Damos la bienvenida a asociaciones con organizaciones que comparten nuestra visión de empoderar a las comunidades de refugiados a través de la educación digital."
    },

    // Application Forms
    apply: {
      studentTitle: "Aplicar como Estudiante",
      studentSubtitle: "Únete al Proyecto Cloud Trail y comienza tu viaje hacia la alfabetización digital y oportunidades de carrera.",

      volunteerTitle: "Aplicar como Voluntario/Socio",
      volunteerSubtitle: "Únete a nuestra misión de empoderar a las comunidades de refugiados saharauis a través de la educación digital y las oportunidades.",

      firstName: "Nombre",
      lastName: "Apellido",
      email: "Dirección de Correo Electrónico",
      phone: "Número de Teléfono",
      age: "Edad",
      education: "Nivel de Educación",
      experience: "Experiencia Previa",
      motivation: "¿Por qué quieres unirte?",
      availability: "Disponibilidad",
      skills: "Habilidades/Experiencia",
      submit: "Enviar Aplicación",

      personalInfo: "Información Personal",
      background: "Antecedentes",
      interests: "Intereses y Objetivos",

      tellUsAboutYourself: "Cuéntanos sobre ti y tus objetivos...",
      describeExperience: "Describe tu experiencia relevante...",
      whyJoinProgram: "¿Por qué quieres unirte a este programa?",

      submissionSuccess: "¡Gracias por tu aplicación! Nos pondremos en contacto pronto.",
      submissionError: "Hubo un error al enviar tu aplicación. Por favor, inténtalo de nuevo."
    },

    // Phase pages
    phase1: {
      title: "Fase 1: Alfabetización Digital e Idioma",
      subtitle: "Construyendo Tu Base",
      duration: "2 meses",
      description: "La fase de Alfabetización Digital e Idioma proporciona a los estudiantes habilidades informáticas esenciales y competencia lingüística para tener éxito en la economía digital.",
      whatYouLearn: "Lo que Aprenderás",
      computerFundamentals: "Fundamentos de Computación",
      coreDigitalTools: "Herramientas Digitales Centrales",
      languageForTech: "Idioma para Tecnología",
      learningMethods: "Métodos de Aprendizaje",
      outcomes: "Resultados",
      outcomeDescription: "Al completar la Fase 1, los estudiantes:"
    }
  },

  ar: {
    // Common/Navigation
    nav: {
      home: "الرئيسية",
      about: "حول",
      aboutVision: "حول ورؤية",
      ourTeam: "فريقنا",
      teachersCommunity: "المعلمون والمجتمع",
      programs: "البرامج",
      programsOverview: "نظرة عامة على البرامج",
      phase1: "المرحلة 1",
      phase2: "المرحلة 2",
      phase3: "المرحلة 3",
      phase4: "المرحلة 4",
      phase5: "المرحلة 5",
      apply: "تطبيق",
      applyStudent: "التقديم كطالب",
      applyVolunteer: "التقديم كمتطوع/شريك",
      contact: "اتصل",
      languageSelector: "اللغة"
    },

    // Validation Messages
    validation: {
      required: "هذا الحقل مطلوب",
      emailInvalid: "يرجى إدخال عنوان بريد إلكتروني صحيح",
      phoneInvalid: "يرجى إدخال رقم هاتف صحيح",
      minLength: "يجب أن يكون على الأقل {min} أحرف",
      maxLength: "يجب ألا يزيد عن {max} أحرف",
      fieldRequired: "{field} مطلوب",
      submitting: "جاري الإرسال...",
      submitError: "حدث خطأ. يرجى المحاولة مرة أخرى.",
      networkError: "خطأ في الشبكة. يرجى التحقق من اتصالك."
    },

    // Footer
    footer: {
      aboutProject: "حول المشروع",
      aboutDescription: "يمكّن مشروع Cloud Trail اللاجئين الصحراويين من خلال المهارات الرقمية وفرص العمل عن بُعد، وإنشاء مسارات نحو الاستقلال الاقتصادي.",
      quickLinks: "روابط سريعة",
      programs: "البرامج",
      applyNow: "تقدم الآن",
      volunteer: "تطوع",
      donate: "تبرع",
      contact: "اتصل بنا",
      followUs: "تابعنا",
      newsletter: "النشرة الإخبارية",
      newsletterDescription: "ابق على اطلاع بآخر أخبارنا وقصص نجاحنا",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشتراك",
      copyright: "© 2025 مشروع Cloud Trail. جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة"
    },

    // Common UI Elements
    common: {
      loading: "جاري التحميل...",
      save: "حفظ",
      cancel: "إلغاء",
      edit: "تحرير",
      delete: "حذف",
      confirm: "تأكيد",
      yes: "نعم",
      no: "لا",
      ok: "موافق",
      close: "إغلاق",
      next: "التالي",
      previous: "السابق",
      search: "بحث",
      filter: "تصفية",
      sort: "ترتيب",
      viewMore: "عرض المزيد",
      viewLess: "عرض أقل",
      learnMore: "تعلم المزيد",
      getStarted: "ابدأ",
      joinNow: "انضم الآن",
      backToTop: "العودة للأعلى"
    },

    // About & Vision Page
    aboutVision: {
      heroTitle: "رؤيتنا",
      heroSubtitle: "اتباع المعرفة كما تبع أجدادنا المطر",
      visionStatement1: "يتصور مشروع Cloud Trail مستقبلاً حيث يحول اللاجئون الصحراويون ظروفهم من خلال المهارات الرقمية وفرص العمل عن بُعد. نحن نبني مسارات نحو الاستقلال الاقتصادي التي تتجاوز القيود الجغرافية، وننشئ نظاماً بيئياً مستداماً للتعلم والكسب داخل مجتمعات اللاجئين.",
      visionStatement2: "نؤمن أن التكنولوجيا والتعليم هما مصادر القوت الجديدة في البيئات الشحيحة الموارد—تماماً كما تبع أجدادنا الغيوم عبر الصحراء للعثور على الماء، يمكن للشباب الصحراوي اليوم اتباع المسارات الرقمية للعثور على الفرصة والكرامة.",
      visionStatement3: "ينتقل نموذجنا من التعليم المدعوم بالمانحين إلى مؤسسة اجتماعية مستدامة حيث يصبح الطلاب عاملين ومرشدين وقادة مجتمعيين. نهدف إلى إنشاء مساحات حيث تقود النساء والشباب التحول الرقمي، وتحويل مخيمات اللاجئين إلى مراكز للابتكار والعمل عن بُعد.",
      visionStatement4: "بحلول عام 2030، نتصور خريجين يديرون أعمالهم الرقمية الخاصة، ويعلمون مجموعات جديدة، ويربطون مجتمعهم بالفرص العالمية—مما يثبت أنه مع المهارات الصحيحة، لا يحتاج العزل الجغرافي إلى تقييد الإمكانات البشرية.",
      founderName: "شيخ أحمد",
      founderTitle: "المؤسس ومدير البرنامج، مشروع Cloud Trail",
      storyTitle: "قصتنا ورسالتنا",
      beginningTitle: "بدايتنا",
      beginning1: "وُلد مشروع Cloud Trail من ملاحظة بسيطة لكنها قوية: تمثل المهارات الرقمية مساراً غير مستغل نحو الفرصة في مخيمات اللاجئين الصحراويين، حيث الموارد المادية شحيحة. تأسست في عام 2025، تهدف هذه المبادرة الشعبية إلى سد الفجوة الرقمية للشباب والنساء الصحراويين.",
      beginning2: "سُمي تيمناً بالتقليد البدوي لاتباع الغيوم بحثاً عن المطر، يعيد Cloud Trail تصور تلك الرحلة — الآن باتباع المعرفة والتكنولوجيا كمصادر القوت الجديدة في العالم الحديث.",
      missionTitle: "رسالتنا",
      missionStatement: "تمكين الشباب والنساء اللاجئين الصحراويين من خلال توفير محو الأمية الرقمية، والتدريب اللغوي، ومسارات إلى فرص العمل عن بُعد، وإنشاء نظام بيئي تعليمي مستدام يؤدي إلى الكرامة الاقتصادية.",
      missionDescription: "نحن نبني برنامجاً لا يعلم المهارات التقنية فحسب بل ينشئ مساراً كاملاً من محو الأمية الرقمية الأساسية إلى التوظيف مع تعزيز الملكية المجتمعية والاستدامة طويلة المدى.",
      quote: "مسار الغيوم قاد شعبنا ذات مرة إلى الماء في الصحراء. اليوم، يقود شبابنا إلى المعرفة والفرصة والكرامة في عالم رقمي.",
      quoteAuthor: "شيخ أحمد، المؤسس ومدير البرنامج",
      coreValuesTitle: "قيمنا الأساسية",
      communityCentered: "محوره المجتمع",
      communityCenteredDesc: "كل ما نفعله يقوي ويمكن مجتمع اللاجئين الصحراويين، مع برامج مصممة من قبل أعضاء المجتمع ولهم.",
      sustainableImpact: "التأثير المستدام",
      sustainableImpactDesc: "نبني برامج تصبح مستدامة ذاتياً، وتخلق تغييراً دائماً يستمر طويلاً بعد انتهاء الدعم الأولي.",
      dignityOpportunity: "الكرامة والفرصة",
      dignityOpportunityDesc: "نؤمن أن كل شخص يستحق الفرصة لتشكيل مستقبله بكرامة، بغض النظر عن ظروفه."
    },

    // Our Team Page
    team: {
      heroTitle: "تعرف على فريقنا",
      heroSubtitle: "قادة متفانون يجمعون خبرة متنوعة لتمكين اللاجئين الصحراويين من خلال التعليم الرقمي والفرص.",
      leadershipTitle: "فريق القيادة",
      leadershipSubtitle: "تجمع قيادتنا بين الخبرة المعيشة والخبرة التقنية والالتزام العميق لإحداث تغيير مستدام في مجتمعات اللاجئين.",

      founderDirector: "المؤسس ومدير البرنامج",
      socialImpactDirector: "مدير التأثير الاجتماعي والبحث",
      itDirector: "مدير تقنية المعلومات",

      chejBio: "وُلد في مخيمات اللاجئين الصحراويين في تندوف، الجزائر، يجسد شيخ الرحلة من لاجئ إلى مهندس برمجيات. تجربته الشخصية تحت الظروف القاسية للنزوح تغذي شغفه بمشروع Cloud Trail. بعد أن كان محظوظاً بما يكفي لمغادرة المخيمات وبناء مهنة في التكنولوجيا، يدفع شيخ التزام لا يتزعزع لإنشاء مسارات للآخرين الذين لا يزالون ينتظرون التغيير. يؤمن بعمق أن المهارات الرقمية يمكن أن تتجاوز الحدود المادية، مما يسمح لمجتمعه ببناء سبل العيش والكرامة بغض النظر عن ظروفه. من خلال Cloud Trail، لا يشارك شيخ المعرفة التقنية فحسب—بل يشارك الأمل، ويربط عوالمه \"باتباع المعرفة كما تبع أجدادنا المطر.\"",

      gianninaBio: "مع ماجستير في الصحة والتنمية الدولية وخبرة عميقة في البحث عبر الثقافات، تجلب جيانينا كلاً من التميز الأكاديمي والشغف الحقيقي لمشروع Cloud Trail. بعد أن أمضت سنوات مغمورة في المجتمعات الأصلية في جميع أنحاء الأمازون، شهدت بشكل مباشر كيف يمكن للوصول إلى التعليم والموارد أن يحول الحياة، خاصة للنساء والشباب. خبرتها في تصميم منهجيات البحث المتجاوبة ثقافياً تضمن أن تبقى برامجنا متمركزة على احتياجات المجتمع وكرامته. التزام جيانينا بالمساواة بين الجنسين يشكل نهجنا الشامل، بينما مهاراتها في المراقبة والتقييم تقوي قدرتنا على قياس التأثير الحقيقي. بالنسبة لها، يجب بناء التنمية المستدامة مع—وليس من أجل—المجتمعات، مما يجعل نهجها متعاطفاً وفعلاً في إحداث تغيير دائم.",

      traianBio: "مع أكثر من خمس سنوات من الخبرة العملية في التطوير الشامل، وهندسة الأنظمة، وقيادة الفرق، يجلب تراين خبرة تقنية عميقة وحل مشاكل العالم الحقيقي لمشروع Cloud Trail. وُلد ونشأ في أوروبا ومقره الآن في المملكة المتحدة، رحلته عبر التقنيات الرائدة—من الخدمات المصغرة والحوسبة السحابية إلى تطوير المنتجات الرشيقة—تجعله مناسباً بشكل فريد لبناء منصات تدريب رقمية مرنة وعالية التأثير. بعد أن قاد سابقاً فرق التطوير في قطاع الصحة، ملتزم تراين بتطبيق مهاراته حيث تهم أكثر: تمكين المجتمعات التي لديها تقليدياً وصول محدود للتكنولوجيا. في Cloud Trail، يشرف على البنية التحتية لتقنية المعلومات، والتصميم التقني للمنهج، ويضمن حصول طلابنا على مهارات جاهزة للعالم الحقيقي. بالنسبة لتراين، التكنولوجيا ليست فقط عن البرمجة—إنها عن بناء جسور للفرصة والقابلية للتوسع والكرامة لمجتمعات اللاجئين. قيادته تحول فصولنا الدراسية إلى مسارات لمستقبل أفضل، مشروع واحد، طالب واحد في كل مرة.",

      connectLinkedIn: "اتصل على LinkedIn",
      localTeamTitle: "فريق التنسيق المحلي",
      localTeamSubtitle: "فريقنا على الأرض في السمارة يجمع بين الخبرة التعليمية والمعرفة التقنية والاتصالات المجتمعية العميقة.",
      programCoordinators: "منسقو البرنامج",
      programCoordinatorsDesc: "قادة محليون يشرفون على العمليات اليومية ويضمنون أن البرامج تلبي احتياجات المجتمع",
      teachingAssistants: "مساعدو التدريس",
      teachingAssistantsDesc: "خريجون يعودون لإرشاد طلاب جدد، مما يخلق دورة تعلم مستدامة",
      communityLiaisons: "اتصالات المجتمع",
      communityLiaisonsDesc: "أعضاء مجتمع موثوقون يربطون البرنامج بالعائلات والمنظمات المحلية",
      contactTeam: "تريد معرفة المزيد عن فريقنا أو استكشاف فرص التعاون؟",
      contactUs: "اتصل بنا"
    },

    // Teachers & Community Page
    teachersCommunity: {
      title: "المعلمون والمجتمع",
      quote: "لسنا نعلم البرمجة أو المهارات الرقمية فقط. نحن نبني نظاماً بيئياً مستداماً حيث تتدفق المعرفة من طالب إلى طالب، من الخريجين إلى المتعلمين الجدد، مما يخلق دورة من الفرص تصبح أقوى مع كل مجموعة.",
      quoteAuthor: "جيانينا تشافيز، مديرة التأثير الاجتماعي والبحث",

      teachingApproachTitle: "نهج التدريس لدينا",
      teachingApproachSubtitle: "يجمع Cloud Trail بين المواهب المحلية والخبرة الدولية لإنشاء بيئة تعلم غنية:",

      programCoordinator: "منسق البرنامج",
      programCoordinatorDesc: "يشرف على تنفيذ المنهج وجودة البرنامج",
      leadInstructor: "المدرس الرئيسي",
      leadInstructorDesc: "يقدم المحتوى التقني الأساسي ويوجه تطوير الطلاب",
      teachingAssistants: "مساعدو التدريس",
      teachingAssistantsDesc: "مختارون من أفضل الخريجين الذين يعودون لإرشاد طلاب جدد",
      remoteMentors: "موجهون عن بُعد",
      remoteMentorsDesc: "محترفو تقنية دوليون يقدمون التوجيه والخبرة الافتراضية",

      teacherDevTitle: "تطوير المعلمين",
      teacherDevSubtitle: "نستثمر في تطوير القدرة التعليمية المحلية من خلال نموذج تدريب المدرب:",

      devPoint1: "تدريب مكثف أولي للمدربين قبل إطلاق البرنامج",
      devPoint2: "فرص التطوير المهني المستمر",
      devPoint3: "زيادة تدريجية في المسؤولية مع الوقت",
      devPoint4: "فرص القيادة داخل البرنامج",
      devPoint5: "شهادة المهارات والأوراق الاعتماد المهنية",

      localCapacityTitle: "بناء القدرة المحلية",
      localCapacitySubtitle: "تعتمد استدامتنا طويلة المدى على تطوير القدرة المحلية:",

      capacityPoint1: "يصبح الخريجون مساعدي تدريس وفي النهاية مدربين",
      capacityPoint2: "يشارك أعضاء المجتمع في حوكمة البرنامج",
      capacityPoint3: "تأخذ القيادة المحلية ملكية متزايدة للاتجاه والعمليات",
      capacityPoint4: "تبقى المعرفة داخل المجتمع، مما يخلق تأثيراً دائماً",

      partnersTitle: "شركاؤنا",
      partnersSubtitle: "يفخر مشروع Cloud Trail بالشراكة مع المنظمات التي تشارك رؤيتنا:",
      partnerName: "Not Forgotten International",
      partnerDesc: "توفير دعم البنية التحتية والمرافق",
      additionalPartners: "شركاء إضافيون ليتم إدراجهم عند التأكيد",
      partnershipOpportunities: "تعرف على المزيد حول فرص الشراكة",

      joinJourneyTitle: "انضم إلى رحلتنا",
      applyStudent: "التقديم كطالب",
      supportMission: "ادعم مهمتنا",
      volunteerExpertise: "تطوع بخبرتك",
      contactUs: "اتصل بنا"
    },

    // Contact Page
    contact: {
      title: "اتصل بنا",
      subtitle: "تواصل مع فريق مشروع Cloud Trail. نحب أن نسمع منك.",
      getInTouch: "تواصل معنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      send: "إرسال الرسالة",

      contactInfo: "معلومات الاتصال",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      addressLabel: "العنوان",

      followUs: "تابع رحلتنا",
      socialMedia: "ابق متصلاً مع آخر تحديثاتنا وقصص نجاحنا.",

      partnerWithUs: "تشارك معنا",
      partnershipDesc: "مهتم بدعم مهمتنا؟ نرحب بالشراكات مع المنظمات التي تشارك رؤيتنا لتمكين مجتمعات اللاجئين من خلال التعليم الرقمي."
    },

    // Application Forms
    apply: {
      studentTitle: "التقديم كطالب",
      studentSubtitle: "انضم إلى مشروع Cloud Trail وابدأ رحلتك نحو محو الأمية الرقمية وفرص المهنة.",

      volunteerTitle: "التقديم كمتطوع/شريك",
      volunteerSubtitle: "انضم إلى مهمتنا لتمكين مجتمعات اللاجئين الصحراويين من خلال التعليم الرقمي والفرص.",

      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "عنوان البريد الإلكتروني",
      phone: "رقم الهاتف",
      age: "العمر",
      education: "مستوى التعليم",
      experience: "الخبرة السابقة",
      motivation: "لماذا تريد الانضمام؟",
      availability: "التوفر",
      skills: "المهارات/الخبرة",
      submit: "إرسال الطلب",

      personalInfo: "المعلومات الشخصية",
      background: "الخلفية",
      interests: "الاهتمامات والأهداف",

      tellUsAboutYourself: "أخبرنا عن نفسك وأهدافك...",
      describeExperience: "اوصف خبرتك ذات الصلة...",
      whyJoinProgram: "لماذا تريد الانضمام إلى هذا البرنامج؟",

      submissionSuccess: "شكراً لطلبك! سنتواصل معك قريباً.",
      submissionError: "كان هناك خطأ في إرسال طلبك. يرجى المحاولة مرة أخرى."
    },

    // Phase pages
    phase1: {
      title: "المرحلة 1: محو الأمية الرقمية واللغة",
      subtitle: "بناء أساسك",
      duration: "شهرين",
      description: "توفر مرحلة محو الأمية الرقمية واللغة للطلاب مهارات الحاسوب الأساسية والكفاءة اللغوية للنجاح في الاقتصاد الرقمي.",
      whatYouLearn: "ما ستتعلمه",
      computerFundamentals: "أساسيات الحاسوب",
      coreDigitalTools: "الأدوات الرقمية الأساسية",
      languageForTech: "اللغة للتكنولوجيا",
      learningMethods: "طرق التعلم",
      outcomes: "النتائج",
      outcomeDescription: "عند إكمال المرحلة 1، سيكون الطلاب:"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('cloudtrail-language');
    return (saved as Language) || 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('cloudtrail-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in fallback
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  // Format numbers according to locale
  const formatNumber = (number: number): string => {
    const locale = language === 'ar' ? 'ar-SA' : language === 'es' ? 'es-ES' : 'en-US';
    return new Intl.NumberFormat(locale).format(number);
  };

  // Format dates according to locale
  const formatDate = (date: Date): string => {
    const locale = language === 'ar' ? 'ar-SA' : language === 'es' ? 'es-ES' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Format phone numbers (basic formatting)
  const formatPhone = (phone: string): string => {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');

    // Apply different formatting based on language/region
    if (language === 'ar') {
      // Arabic format: +966 XX XXX XXXX
      if (cleaned.length >= 10) {
        return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
      }
    } else if (language === 'es') {
      // Spanish format: +34 XXX XXX XXX
      if (cleaned.length >= 9) {
        return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
      }
    } else {
      // English format: +1 (XXX) XXX-XXXX
      if (cleaned.length >= 10) {
        return `+1 (${cleaned.slice(-10, -7)}) ${cleaned.slice(-7, -4)}-${cleaned.slice(-4)}`;
      }
    }

    return phone; // Return original if formatting fails
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      isRTL,
      formatNumber,
      formatDate,
      formatPhone
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
