const institutions = [
  {
    slug: "alok-dhara-vidyalaya",
    type: "school",
    name: "Alok Dhara Vidyalaya",
    address: "Dubra, Purulia, West Bengal — 723101",
    classes: "Nursery – XII",
    board: "WBBSE / WBCHSE",
    facilities: ["Library", "Science Lab", "Computer Lab", "Playground", "Smart Classes"],
    principalName: "Mr. Sample Principal",
    phone: "+91 90000 00001",
    email: "vidyalaya@example.com",
    photo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80"
  },
  {
    slug: "alok-dhara-neet-academy",
    type: "coaching",
    name: "Alok Dhara NEET Academy",
    address: "Station Road, Purulia, West Bengal — 723101",
    courses: ["NEET", "JEE", "WBJEE"],
    batches: ["Morning (6–9 AM)", "Evening (4–7 PM)", "Weekend"],
    fees: "₹25,000 – ₹45,000",
    faculty: ["Dr. Sample Faculty (Physics)", "Mr. Sample Teacher (Chemistry)", "Ms. Sample Ma'am (Biology)"],
    phone: "+91 90000 00002",
    email: "neet@example.com",
    photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80"
  },
  {
    slug: "alok-dhara-jee-academy",
    type: "coaching",
    name: "Alok Dhara JEE Academy",
    address: "College Para, Purulia, West Bengal — 723101",
    courses: ["JEE Main", "JEE Advanced", "WBJEE"],
    batches: ["Morning", "Evening"],
    fees: "₹30,000 – ₹50,000",
    faculty: ["Mr. Sample Sir (Maths)", "Dr. Sample Faculty (Physics)"],
    phone: "+91 90000 00003",
    email: "jee@example.com",
    photo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80"
  },
  {
    slug: "alok-dhara-govt-job",
    type: "coaching",
    name: "Alok Dhara Govt Job Coaching",
    address: "Main Road, Purulia, West Bengal — 723101",
    courses: ["WBCS", "SSC", "Railway", "Banking"],
    batches: ["Weekday", "Weekend"],
    fees: "₹15,000 – ₹35,000",
    faculty: ["Mr. Sample Sir (GK)", "Ms. Sample Ma'am (Maths)"],
    phone: "+91 90000 00004",
    email: "govtjob@example.com",
    photo: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80"
  },
  {
    slug: "alok-dhara-foundation",
    type: "coaching",
    name: "Alok Dhara Foundation Coaching",
    address: "School Para, Purulia, West Bengal — 723101",
    courses: ["Class 9–10 (Madhyamik)", "Class 11–12 (HS)"],
    batches: ["Morning", "Evening"],
    fees: "₹12,000 – ₹25,000",
    faculty: ["Mr. Sample Sir (Science)", "Ms. Sample Ma'am (Arts)"],
    phone: "+91 90000 00005",
    email: "foundation@example.com",
    photo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
  }
];

const notices = [
  { title: "Admissions Open for 2026–27 Session", date: "2026-11-01", category: "Admission", pinned: true, pdf: "#" },
  { title: "Half-Yearly Examination Routine Published", date: "2026-11-05", category: "Exam", pinned: true, pdf: "#" },
  { title: "Diwali Holiday Notice", date: "2026-11-03", category: "Holiday", pinned: false, pdf: "#" },
  { title: "Annual Sports Day on 15 December", date: "2026-11-02", category: "General", pinned: false, pdf: "#" },
  { title: "Class X Pre-Board Results Declared", date: "2026-10-28", category: "Result", pinned: false, pdf: "#" },
  { title: "Parent–Teacher Meeting on 20 November", date: "2026-10-25", category: "General", pinned: false, pdf: "#" },
  { title: "NEET Mock Test Schedule", date: "2026-10-22", category: "Exam", pinned: false, pdf: "#" },
  { title: "Winter Uniform Available from 1 November", date: "2026-10-20", category: "General", pinned: false, pdf: "#" },
  { title: "Scholarship Application Deadline Extended", date: "2026-10-18", category: "Admission", pinned: false, pdf: "#" },
  { title: "Republic Day Celebration Guidelines", date: "2026-10-15", category: "General", pinned: false, pdf: "#" }
];

const gallery = [
  { image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", caption: "Annual Sports Day", institution: "alok-dhara-vidyalaya", eventType: "Sports" },
  { image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80", caption: "Annual Function 2025", institution: "alok-dhara-vidyalaya", eventType: "Annual" },
  { image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80", caption: "Science Exhibition", institution: "alok-dhara-vidyalaya", eventType: "Exhibition" },
  { image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80", caption: "NEET Toppers Felicitation", institution: "alok-dhara-neet-academy", eventType: "Annual" },
  { image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80", caption: "JEE Mock Test", institution: "alok-dhara-jee-academy", eventType: "Exhibition" },
  { image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", caption: "Independence Day", institution: "alok-dhara-vidyalaya", eventType: "Annual" },
  { image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80", caption: "Sports Meet 2025", institution: "alok-dhara-neet-academy", eventType: "Sports" },
  { image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80", caption: "Art Competition", institution: "alok-dhara-foundation", eventType: "Exhibition" },
  { image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", caption: "Annual Day", institution: "alok-dhara-govt-job", eventType: "Annual" },
  { image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", caption: "Yoga Day", institution: "alok-dhara-vidyalaya", eventType: "Sports" },
  { image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", caption: "Prize Distribution", institution: "alok-dhara-jee-academy", eventType: "Annual" },
  { image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80", caption: "Science Fair", institution: "alok-dhara-foundation", eventType: "Exhibition" }
];

const testimonials = [
  { name: "Mrs. Sample Parent", role: "Parent, Class X", message: "The teaching quality is exceptional, and the staff truly care about each child's progress. My daughter has grown in confidence." },
  { name: "Mr. Sample Guardian", role: "Parent, NEET Batch", message: "The NEET coaching here is among the best in the region. The faculty are supportive, experienced, and genuinely invested." },
  { name: "Ms. Sample Alumna", role: "Alumna, Batch 2024", message: "This institution shaped my career and my character. I am forever grateful to the teachers who believed in me." }
];

const careers = [
  { position: "Mathematics Teacher", qualifications: "M.Sc Mathematics, B.Ed preferred", description: "Teach Class IX–XII Mathematics. Minimum 2 years of teaching experience required." },
  { position: "NEET Biology Faculty", qualifications: "M.Sc Biology / MBBS", description: "Teach NEET Biology batches. Prior experience with competitive exam coaching is required." },
  { position: "Office Assistant", qualifications: "Graduate, MS Office proficiency", description: "Handle admissions enquiries, student records, and front desk operations." }
];