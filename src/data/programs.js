import { ComputerDesktopIcon, CodeBracketIcon, PaintBrushIcon, BookOpenIcon } from '@heroicons/vue/24/outline'

const UP = 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/'

// Content is taken from the official CCS program pages. `pattern` + `accent` give each discipline its own look.
export const programs = [
  {
    slug: 'bsit', code: 'BSIT', icon: ComputerDesktopIcon, accent: '#0D3B46', pattern: 'pattern-grid',
    name: 'Bachelor of Science in Information Technology',
    description: 'The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems.',
    overview: 'BSIT covers the use of both hardware and software technologies: planning, installing, customizing, operating, managing, administering and maintaining IT infrastructure that provides computing solutions to an organization’s needs. Graduates address user needs through the selection, development, application, integration and management of computing technologies.',
    areasTitle: 'Knowledge Areas',
    areas: ['Information Technology Fundamentals', 'Human Computer Interaction', 'Information Assurance and Security', 'Information Management', 'Integrative Programming and Technologies', 'Networking', 'Platform Technologies', 'Systems Administration and Maintenance', 'Systems Integration and Architecture', 'Social and Professional Issues', 'Web Systems and Technologies'],
    curriculum: ['The BSIT curriculum includes basic and advanced courses on planning, development, integration, and management of information technology infrastructure that provide computing solutions to address the needs of organizations.', 'It follows CHED Memo Order No. 25 s. 2015 (effective AY 2018–2019) and covers the knowledge areas recommended in the ACM Information Technology Curricula 2008.'],
    outcomes: ['Apply knowledge of computing, science and mathematics appropriate to the discipline (IT01).', 'Analyze complex problems and define the computing requirements for a solution (IT03).', 'Design, implement and evaluate computer-based systems to meet desired needs (IT05).', 'Integrate IT-based solutions into the user environment effectively (IT06).', 'Function effectively as a member or leader of a development team (IT08).', 'Understand professional, ethical, legal, security and social issues (IT12).'],
    careersTitle: 'The program prepares students to work in',
    careers: ['Information security', 'Network architecture', 'Database administration', 'Systems administration', 'Computer support'],
    org: { name: 'Information Technology Students', text: 'Members strengthen their bonds with each year level through outreach activities and college and university events, building the knowledge and personality that come from working together.' },
    logo: UP + '1.png', source: 'https://ccs.cpu.edu.ph/information-technology/'
  },
  {
    slug: 'bscs', code: 'BSCS', icon: CodeBracketIcon, accent: '#0D3B46', pattern: 'pattern-code',
    name: 'Bachelor of Science in Computer Science',
    description: 'The Computer Science (CS) program is designed for students who want to study computing in depth.',
    overview: 'BSCS includes the study of computing concepts and theories, algorithmic foundations and new developments in computing. The program prepares students to design and create algorithmically complex software and to develop new and effective algorithms for solving computing problems.',
    areasTitle: 'Knowledge Areas',
    areas: ['Algorithms and Complexity', 'Architecture and Organization', 'Discrete Structures', 'Human Computer Interaction', 'Information Assurance and Security', 'Networks and Communications', 'Operating Systems', 'Programming Languages', 'Software Development Fundamentals', 'Software Engineering', 'Social Issues and Professional Practice'],
    curriculum: ['The BSCS curriculum includes foundation and professional courses that cover theory, algorithms, software design and development, and new developments in computing.', 'It follows CHED Memo Order No. 25 s. 2015 and the eleven knowledge areas recommended in ACM Computer Science Curricula 2013.'],
    outcomes: ['Apply computing fundamentals, mathematics and domain knowledge to model defined problems (CS01).', 'Identify, analyze and solve complex computing problems using fundamental principles (CS02).', 'Apply algorithmic principles and CS theory to design computer-based systems, understanding the trade-offs (CS03).', 'Understand information security issues in the design and use of information systems (CS04).', 'Apply modern computing tools to complex computing activities (CS06).', 'Engage in independent learning for continual development as a computing professional (CS10).'],
    careersTitle: 'Career focus drawn from the published program outcomes',
    careers: ['Design of algorithmically complex software', 'Development of new and effective algorithms', 'Secure design of information systems', 'Research and lifelong professional development'],
    org: { name: 'Computer Science Society', text: 'Its mission is to promote the Computer Science course, guide and prepare students, strengthen the bonds of members as one family, and serve society while stressing lifelong learning and ethical conduct.' },
    logo: UP + 'CSS_PNG.png', source: 'https://ccs.cpu.edu.ph/computer-science/'
  },
  {
    slug: 'bsdmia', code: 'BSDMIA', icon: PaintBrushIcon, accent: '#C89B3C', pattern: 'pattern-diag',
    name: 'Bachelor of Science in Digital Media and Interactive Arts',
    description: 'The Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.',
    overview: 'Interactive arts and media combines arts, design and technology. Students are introduced to industry-standard tools in video editing, animation, 3D modeling, photography, graphic design, video game design and virtual reality. The program was established in 2014 and is offered under CHED CMO 19 s. 2016, which allows autonomous institutions to offer new programs.',
    areasTitle: 'Tools and Disciplines',
    areas: ['Video editing', 'Animation', '3D modeling', 'Photography', 'Graphic design', 'Video game design', 'Virtual reality'],
    curriculum: ['The program develops creative talents for applied arts industries including entertainment, education, advertising and commercials, films and corporate communications.', 'Its structure lets students from different disciplines collaborate to produce artworks that meet industry standards, through a talent-centric curriculum for the high-end digital media industry.'],
    outcomes: ['Identify user requirements leading to the design, creation, evaluation and delivery of digital media solutions (DMIA02).', 'Design, merge and bridge traditional arts with digital media (DMIA03).', 'Deliver and implement creations and evaluate digital media consumption in entertainment and corporate environments (DMIA04).', 'Demonstrate current techniques, skills, tools and practices (DMIA05).', 'Function effectively as an individual and as a member or leader in diverse teams (DMIA06).', 'Recognize professional, ethical, legal, security and social issues (DMIA07).'],
    careersTitle: 'Possible careers',
    careers: ['Animator', 'Graphic designer', 'Game designer', 'Web designer', 'Multi-media artist', 'Advertising executive', 'Art director', 'Digital artist', 'Freelance artist'],
    careerNote: 'Graduates can work in advertising agencies, game design companies, pre- and post-production houses, graphic design firms, art studios, mobile communication companies, magazines, publishers and web design companies.',
    org: { name: 'Modern Interactive Digital Artists Society (MIDAS)', text: 'The official organization of BSDMIA students. It helps students develop a sense of artistic self-identity and supports exhibits and outreach activities that raise public awareness of technology and its impact on society.' },
    logo: UP + 'MIDAS_PNG.png', source: 'https://ccs.cpu.edu.ph/digital-media-and-interactive-arts/'
  },
  {
    slug: 'blis', code: 'BLIS', icon: BookOpenIcon, accent: '#C89B3C', pattern: 'pattern-lines',
    name: 'Bachelor of Library and Information Science',
    description: 'BLIS is a four-year program that prepares students in the development, deployment, and management of information resources in print, non-print, electronic, and digital formats.',
    overview: 'The program trains students to apply information technology to basic library operations and functions. It follows the CHED policies and standards for Library and Information Science, which make LIS education responsive to society’s changing information needs and keep LIS professionals globally competitive. BLIS migrated to the College of Computer Studies in June 2018.',
    areasTitle: 'Areas of Study (from the published graduate outcomes)',
    areas: ['Selection and evaluation of information resources', 'Organization and dissemination of print, multimedia, electronic and digital resources', 'Library automation systems and ICT', 'Reference interviews and user needs assessment', 'Research for libraries and organizations', 'Information policy and ethics (copyright, plagiarism, cybercrimes)'],
    curriculum: ['The LIS curriculum equips professionals with the composite knowledge, skills, attitudes and tools to respond to the changing information needs of society.', 'The program had its accreditation orientation with PACUCOA in October 2019, with a preliminary survey planned for early 2020.'],
    outcomes: ['Select, evaluate, organize and disseminate print, multimedia, electronic and digital information resources (LIS01).', 'Identify users’ needs through reference interviews, surveys and other means (LIS06).', 'Understand the library’s automation system and the use of computer hardware, software and online tools (LIS08).', 'Develop IT solutions such as a library automation system, website or e-mail system (LIS09).', 'Conduct significant research projects that benefit the library and the organization (LIS10).', 'Evaluate and debate information policy and ethical issues (LIS11).'],
    careersTitle: 'Career focus drawn from the published program description',
    careers: ['Development of information resources', 'Deployment of information resources', 'Management of print, non-print, electronic and digital information', 'Library automation and IT solutions', 'Library research projects'],
    achievement: 'In the September 2021 Librarians Licensure Examination, CPU recorded a 60% passing rate among first-time takers, against 47.7% nationally.',
    org: null,
    logo: UP + 'LISSO.png', source: 'https://ccs.cpu.edu.ph/library-information-science/'
  }
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)
