// ── Portfolio Data ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Dharshan U",
  role: "Cloud & DevOps Engineer",
  tagline: "Building Scalable Infrastructure",
  email: "dharshankanth@email.com",
  phone: "+91 98765 43210",
  location: "Coimbatore, Tamil Nadu, India",
  github: "https://github.com/DharshanKanth",
  linkedin: "https://www.linkedin.com/in/dharshan-u-222b66295",
  availability: "Open to Opportunities",
  currentlyLearning: ["AI Automation", "MLOps", "Advanced Kubernetes", "Multi-cloud Infrastructure", "DevSecOps"],
  education: {
    institution: "KPR Institute of Engineering and Technology",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.4",
    year: "2022 – 2026",
  },
};

export const metrics = [
  { label: "Infra Automation", value: 70, suffix: "%" },
  { label: "Deployment Speed", value: 60, suffix: "%" },
  { label: "Team Clarity", value: 40, suffix: "%" },
  { label: "CGPA", value: 8.4, suffix: "/10" },
];

export const deploymentMetrics = [
  { label: "System Uptime", value: "99.9%", sub: "SLA achieved" },
  { label: "Deployment Speed", value: "60%", sub: "Acceleration" },
  { label: "Infra Automation", value: "70%", sub: "Setup time saved" },
  { label: "API Throughput", value: "1k+", sub: "Requests/day" },
];

// ── Skills ───────────────────────────────────────────────────────────────────

export const skillCategories = [
  {
    id: "cloud",
    label: "Cloud (AWS)",
    color: "#FF9900",
    bgColor: "rgba(255, 153, 0, 0.1)",
    borderColor: "rgba(255, 153, 0, 0.3)",
    skills: ["EC2", "S3", "IAM", "Lambda", "RDS", "VPC", "CloudWatch", "Route 53"],
  },
  {
    id: "devops",
    label: "DevOps",
    color: "#00c3ff",
    bgColor: "rgba(0, 195, 255, 0.1)",
    borderColor: "rgba(0, 195, 255, 0.3)",
    skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Helm", "Ansible"],
  },
  {
    id: "mlops",
    label: "MLOps",
    color: "#a855f7",
    bgColor: "rgba(168, 85, 247, 0.1)",
    borderColor: "rgba(168, 85, 247, 0.3)",
    skills: ["FastAPI", "Model Serving", "ML Pipelines", "Container ML", "Monitoring"],
  },
  {
    id: "programming",
    label: "Programming",
    color: "#22c55e",
    bgColor: "rgba(34, 197, 94, 0.1)",
    borderColor: "rgba(34, 197, 94, 0.3)",
    skills: ["Python", "Bash", "JavaScript", "TypeScript", "Shell Scripting"],
  },
  {
    id: "stack",
    label: "Full Stack",
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.1)",
    borderColor: "rgba(59, 130, 246, 0.3)",
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Next.js"],
  },
  {
    id: "other",
    label: "Tools & OS",
    color: "#64748b",
    bgColor: "rgba(100, 116, 139, 0.1)",
    borderColor: "rgba(100, 116, 139, 0.3)",
    skills: ["Linux", "Git", "CI/CD", "Monitoring", "Prometheus", "Grafana", "Nginx"],
  },
];

// ── Experience ───────────────────────────────────────────────────────────────

export const experience = [
  {
    id: 1,
    company: "CodTech IT Solutions",
    role: "DevOps Intern",
    duration: "Jan 2025 – Feb 2025",
    type: "DevOps",
    color: "#00c3ff",
    icon: "terminal",
    achievements: [
      { text: "Automated AWS infrastructure provisioning using Terraform", metric: "70% setup time reduction" },
      { text: "Built end-to-end CI/CD pipelines with GitHub Actions", metric: "60% faster deployments" },
      { text: "Deployed and managed Dockerized microservices on AWS EC2", metric: null },
      { text: "Supported Kubernetes cluster workflows and pod management", metric: null },
      { text: "Implemented Infrastructure as Code (IaC) best practices", metric: null },
    ],
    skills: ["Terraform", "GitHub Actions", "Docker", "Kubernetes", "AWS EC2"],
  },
  {
    id: 2,
    company: "Excelerate",
    role: "Project Management Associate Intern",
    duration: "Aug 2025 – Sep 2025",
    type: "Management",
    color: "#a855f7",
    icon: "users",
    achievements: [
      { text: "Prepared and maintained technical documentation and reports", metric: "40% clarity improvement" },
      { text: "Coordinated sprint updates across cross-functional teams", metric: null },
      { text: "Managed and facilitated collaboration for 5+ member team", metric: null },
      { text: "Reduced delivery slippage through proactive risk tracking", metric: "25% slippage reduction" },
      { text: "Streamlined agile ceremonies and team communication flows", metric: null },
    ],
    skills: ["Agile", "Scrum", "Documentation", "Team Coordination", "Risk Management"],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: "ML Inference Microservice",
    subtitle: "FastAPI · Kubernetes · Docker",
    description:
      "Production-grade ML model serving system built with FastAPI, containerized with Docker, and orchestrated on Kubernetes. Handles 1k+ inference requests/day with horizontal pod autoscaling.",
    github: "https://github.com/DharshanKanth",
    live: null,
    category: "MLOps",
    color: "#a855f7",
    gradient: "from-purple-900/40 to-bg-primary",
    tags: ["FastAPI", "Docker", "Kubernetes", "Python", "HPA"],
    metrics: [
      { label: "Requests/day", value: "1k+" },
      { label: "Avg Latency", value: "<50ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    architecture: ["FastAPI App", "Docker Image", "K8s Deployment", "HPA", "Ingress"],
    problem: "Building a reliable, scalable ML model serving endpoint that can handle production traffic spikes without manual intervention.",
    stack: ["Python", "FastAPI", "Docker", "Kubernetes", "GitHub Actions"],
    featured: true,
  },
  {
    id: 2,
    title: "MERN App on Kubernetes",
    subtitle: "Kubernetes · Docker · MongoDB",
    description:
      "Full deployment of a MERN stack application on Kubernetes with rolling updates, zero-downtime deployments, persistent volume claims for MongoDB, and Ingress routing.",
    github: "https://github.com/DharshanKanth/Deploying-MernApp-on-K8s",
    live: null,
    category: "DevOps",
    color: "#326CE5",
    gradient: "from-blue-900/40 to-bg-primary",
    tags: ["Kubernetes", "Docker", "MongoDB", "React", "Node.js"],
    metrics: [
      { label: "Downtime", value: "0%" },
      { label: "Rolling Updates", value: "✓" },
      { label: "Pods", value: "6+" },
    ],
    architecture: ["React Frontend", "Node API", "MongoDB", "K8s Pods", "Ingress"],
    problem: "Deploying a multi-service MERN application with zero downtime, persistent storage, and production-grade orchestration.",
    stack: ["Docker", "Kubernetes", "Helm", "MongoDB", "React", "Node.js"],
    featured: true,
  },
  {
    id: 3,
    title: "AWS Resource Automation",
    subtitle: "Terraform · AWS · Shell Script",
    description:
      "Shell script-driven AWS resource automation system using Terraform. Provisions EC2 instances, IAM roles, VPC networking, S3 buckets, and security groups with full IaC principles.",
    github: "https://github.com/DharshanKanth/Automating-AWS-Resource-Management-with-Shell-Script-",
    live: null,
    category: "Cloud",
    color: "#FF9900",
    gradient: "from-amber-900/40 to-bg-primary",
    tags: ["Terraform", "AWS", "Shell", "EC2", "IAM", "VPC"],
    metrics: [
      { label: "Setup Time", value: "-70%" },
      { label: "Resources", value: "Auto" },
      { label: "IaC", value: "100%" },
    ],
    architecture: ["Shell Script", "Terraform", "AWS EC2", "IAM", "VPC", "S3"],
    problem: "Manual AWS resource provisioning causing inconsistency and long setup times across environments.",
    stack: ["Terraform", "Bash", "AWS CLI", "EC2", "IAM", "S3"],
    featured: true,
  },
  {
    id: 4,
    title: "AI Agent K8s Pod Monitor",
    subtitle: "AI · Kubernetes · Observability",
    description:
      "Intelligent Kubernetes pod monitoring system powered by an AI agent. Detects anomalies, sends alerts via webhooks, and suggests remediation actions using LLM-based analysis.",
    github: "https://github.com/DharshanKanth",
    live: null,
    category: "AI/MLOps",
    color: "#22c55e",
    gradient: "from-green-900/40 to-bg-primary",
    tags: ["Python", "Kubernetes", "AI Agent", "Prometheus", "Grafana"],
    metrics: [
      { label: "Alert MTTR", value: "<2min" },
      { label: "Accuracy", value: "94%" },
      { label: "Uptime", value: "99.9%" },
    ],
    architecture: ["K8s API", "AI Agent", "Prometheus", "Alert Engine", "Webhook"],
    problem: "Manual Kubernetes monitoring lacking intelligent anomaly detection and auto-remediation capabilities.",
    stack: ["Python", "Kubernetes API", "Prometheus", "LangChain", "FastAPI"],
    featured: false,
  },
  {
    id: 5,
    title: "DevSecOps Pipeline",
    subtitle: "CI/CD · Security · TypeScript",
    description:
      "Complete DevSecOps implementation on a TicTacToe demo app. Features SAST, DAST, SCA scanning, container security, and automated security gates in the CI/CD pipeline.",
    github: "https://github.com/DharshanKanth/devsecops-demo",
    live: null,
    category: "DevSecOps",
    color: "#ef4444",
    gradient: "from-red-900/40 to-bg-primary",
    tags: ["GitHub Actions", "SonarQube", "Trivy", "Docker", "TypeScript"],
    metrics: [
      { label: "Security Gates", value: "5" },
      { label: "Scan Time", value: "<3min" },
      { label: "Coverage", value: "100%" },
    ],
    architecture: ["Code Push", "SAST", "SCA", "Container Scan", "DAST", "Deploy"],
    problem: "Integrating comprehensive security scanning into the CI/CD pipeline without slowing developer velocity.",
    stack: ["GitHub Actions", "SonarQube", "Trivy", "OWASP", "Docker", "TypeScript"],
    featured: false,
  },
];

// ── Toolchain Pipeline ────────────────────────────────────────────────────────

export const toolchainStages = [
  { id: "code", label: "Code", tool: "GitHub", color: "#6e7681", icon: "github" },
  { id: "build", label: "Build", tool: "GitHub Actions", color: "#2496ED", icon: "play" },
  { id: "containerize", label: "Containerize", tool: "Docker", color: "#2496ED", icon: "box" },
  { id: "deploy", label: "Deploy", tool: "Kubernetes", color: "#326CE5", icon: "server" },
  { id: "provision", label: "Provision", tool: "Terraform", color: "#7B42BC", icon: "layers" },
  { id: "scale", label: "Scale", tool: "AWS", color: "#FF9900", icon: "cloud" },
  { id: "monitor", label: "Monitor", tool: "Prometheus", color: "#E6522C", icon: "activity" },
];

// ── Certifications ────────────────────────────────────────────────────────────

export const certifications = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    code: "CLF-C02",
    issuer: "Amazon Web Services",
    color: "#FF9900",
    bgColor: "rgba(255, 153, 0, 0.08)",
    borderColor: "rgba(255, 153, 0, 0.3)",
    status: "Certified",
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "Red Hat Certified System Administrator",
    code: "RHCSA",
    issuer: "Red Hat",
    color: "#EE0000",
    bgColor: "rgba(238, 0, 0, 0.08)",
    borderColor: "rgba(238, 0, 0, 0.3)",
    status: "Certified",
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Docker for Beginners",
    code: "KodeKloud",
    issuer: "KodeKloud",
    color: "#2496ED",
    bgColor: "rgba(36, 150, 237, 0.08)",
    borderColor: "rgba(36, 150, 237, 0.3)",
    status: "Completed",
    verifyUrl: "#",
  },
];

// ── Leadership ─────────────────────────────────────────────────────────────────

export const leadership = [
  {
    id: 1,
    role: "Placement Coordinator",
    org: "KPR Institute of Engineering and Technology",
    description: "Coordinated placement communication and processes for 100+ students, bridging students and company HR representatives.",
    impact: "100+ Students",
    color: "#00c3ff",
    icon: "users",
    achievements: [
      "Managed communication between 100+ students and hiring companies",
      "Coordinated placement drives and interview schedules",
      "Helped students prepare placement documentation",
    ],
  },
  {
    id: 2,
    role: "Executive — Software Development Club",
    org: "KPR Institute of Engineering and Technology",
    description: "Organized technical sessions and peer learning initiatives to upskill students in modern software development practices.",
    impact: "20+ Sessions",
    color: "#a855f7",
    icon: "code",
    achievements: [
      "Organized 20+ technical learning sessions and workshops",
      "Mentored junior students in DevOps and cloud technologies",
      "Managed club events and technical content calendar",
    ],
  },
];

// ── Infra Nodes ────────────────────────────────────────────────────────────────

export const infraNodes = [
  { id: "github", label: "GitHub", sublabel: "Source Control", color: "#6e7681", x: 50, y: 20 },
  { id: "actions", label: "GitHub Actions", sublabel: "CI/CD", color: "#2496ED", x: 200, y: 20 },
  { id: "docker", label: "Docker", sublabel: "Containerize", color: "#2496ED", x: 350, y: 20 },
  { id: "k8s", label: "Kubernetes", sublabel: "Orchestrate", color: "#326CE5", x: 500, y: 100 },
  { id: "terraform", label: "Terraform", sublabel: "Provision", color: "#7B42BC", x: 350, y: 180 },
  { id: "aws", label: "AWS EC2", sublabel: "Cloud Host", color: "#FF9900", x: 200, y: 180 },
  { id: "monitoring", label: "Monitoring", sublabel: "Observe", color: "#E6522C", x: 500, y: 260 },
];
