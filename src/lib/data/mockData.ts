export const mockUser = {
  name: "Sarah",
  firstName: "Sarah",
  email: "sarah.ahmed@email.com",
  phone: "+971 50 123 4567",
  avatar: "S",
  language: "en",
  visaDaysLeft: 23,
  activeCases: 1,
  documents: 7,
};

export const mockDeadlines = [
  { id: 1, name: "Visa Renewal", sub: "Employment · GDRFA", daysLeft: 23, color: "#FEF2F2", icon: "⚡", urgent: true },
  { id: 2, name: "Emirates ID", sub: "Renewal due May 20", daysLeft: 45, color: "#FEF3C7", icon: "🪪", urgent: false },
  { id: 3, name: "Court Filing", sub: "Amended claim · Mar 15", daysLeft: 10, color: "#EDE9FE", icon: "⚖️", urgent: true },
  { id: 4, name: "Tenancy Renew", sub: "Ejari · Jul 24", daysLeft: 120, color: "#ECFDF5", icon: "🏠", urgent: false },
];

export const mockCases = [
  {
    id: "DXB-2024-1847",
    name: "Tenancy Dispute",
    status: "active",
    court: "Dubai Civil Court",
    nextHearing: "March 15 at 10:00 AM",
    hearingNote: "Bring original lease + payment receipts",
    progress: 3,
    totalSteps: 5,
    steps: ["Filed", "Hearing 1", "Hearing 2", "Judgment", "Closed"],
    actionDue: "Filing due in 10 days",
    urgent: true,
  },
  {
    id: "DXB-2023-0921",
    name: "Labor Complaint",
    status: "won",
    court: "MOHRE",
    nextHearing: "Resolved",
    progress: 5,
    totalSteps: 5,
    steps: ["Filed", "Mediation", "Hearing", "Judgment", "Closed"],
    actionDue: null,
    urgent: false,
  },
  {
    id: "DXB-2024-3012",
    name: "Contract Dispute",
    status: "pending",
    court: "Dubai Courts",
    nextHearing: "April 5 at 2:00 PM",
    progress: 1,
    totalSteps: 5,
    steps: ["Filed", "Review", "Hearing", "Judgment", "Closed"],
    actionDue: "Documents due in 3 days",
    urgent: true,
  },
];

export const mockServices = [
  { id: 1, name: "Family Law", icon: "👨‍👩‍👧", color: "#FFF0E6", specialty: "Divorce, custody, inheritance", price: "From AED 2,500" },
  { id: 2, name: "Real Estate", icon: "🏠", color: "#ECFDF5", specialty: "Contracts, disputes, tenancy", price: "From AED 1,800" },
  { id: 3, name: "Business", icon: "💼", color: "#FEF3C7", specialty: "Incorporation, contracts, compliance", price: "From AED 3,000" },
  { id: 4, name: "Criminal", icon: "⚖️", color: "#EDE9FE", specialty: "Defense, appeals, legal aid", price: "From AED 5,000" },
  { id: 5, name: "Traffic", icon: "🚗", color: "#E8F4FE", specialty: "Fines, disputes, license", price: "From AED 500" },
  { id: 6, name: "Labor", icon: "🏭", color: "#FFF5F5", specialty: "Contracts, complaints, MOHRE", price: "From AED 1,200" },
];

export const mockGovServices = [
  { id: 1, name: "Visa Renewal", icon: "🛂", price: "AED 70", sub: "Employment · GDRFA Dubai", color: "#E8F4FE" },
  { id: 2, name: "Ejari", icon: "🏠", price: "AED 60", sub: "Registration · DLD", color: "#ECFDF5" },
  { id: 3, name: "Labor Complaint", icon: "💼", price: "AED 50", sub: "MOHRE · Tasheel", color: "#FEF3C7" },
  { id: 4, name: "Emirates ID", icon: "🪪", price: "AED 40", sub: "Renewal · ICA", color: "#EDE9FE" },
];

export const mockLawyers = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    specialty: "Family Law",
    rating: 4.9,
    reviews: 312,
    match: 96,
    photo: "A",
    experience: "15 years",
    languages: ["Arabic", "English"],
    badge: "Top Rated",
  },
  {
    id: 2,
    name: "Fatima Hassan",
    specialty: "Real Estate",
    rating: 4.8,
    reviews: 241,
    match: 89,
    photo: "F",
    experience: "12 years",
    languages: ["Arabic", "English", "Hindi"],
    badge: "Verified",
  },
  {
    id: 3,
    name: "Karim Mansour",
    specialty: "Business Law",
    rating: 4.7,
    reviews: 189,
    match: 84,
    photo: "K",
    experience: "10 years",
    languages: ["Arabic", "English", "French"],
    badge: "Expert",
  },
];

export const mockNews = [
  { id: 1, title: "UAE minimum wage increases for skilled workers", tag: "🔴 Affects you", category: "Labor Law", time: "2 hours ago", color: "linear-gradient(135deg,#1B3A6B,#0D2040)" },
  { id: 2, title: "Golden Visa now available for teachers & nurses", tag: "🟢 Good news", category: "Immigration", time: "Yesterday", color: "linear-gradient(135deg,#059669,#047857)" },
  { id: 3, title: "Dubai Courts new e-filing rules from April 1", tag: "📋 Update", category: "Courts", time: "3 days ago", color: "linear-gradient(135deg,#7C3AED,#4C1D95)" },
];

export const mockFaqs = [
  { q: "Can my landlord evict me with 6 months left on my lease?", a: "Under UAE Rental Law Art. 25, your landlord must give 12 months written notice. With 6 months remaining you have full right to stay." },
  { q: "How do I renew my employment visa?", a: "Your employer must sponsor the renewal through GDRFA. Process takes 3-5 working days. Required: valid passport, Emirates ID, medical test." },
  { q: "What are the new Golden Visa rules?", a: "Golden Visa now available for 10-year stay. Eligible: investors, entrepreneurs, specialized talents, researchers, students." },
  { q: "Can I change jobs while my labor case is pending?", a: "Yes, but consult your lawyer first. MOHRE may freeze the case if you switch employers during active mediation." },
];

export const mockTemplates = [
  { id: 1, name: "Tenancy Contract", category: "Real Estate", icon: "📄", pages: 8 },
  { id: 2, name: "Employment Contract", category: "Business", icon: "📋", pages: 5 },
  { id: 3, name: "Power of Attorney", category: "General", icon: "📜", pages: 3 },
  { id: 4, name: "NOC Letter", category: "General", icon: "✉️", pages: 2 },
  { id: 5, name: " rental Dispute Claim", category: "Real Estate", icon: "⚖️", pages: 12 },
  { id: 6, name: "Business License App", category: "Business", icon: "🏢", pages: 6 },
];

export const mockCasePassport = {
  id: "DXB-2024-1847",
  name: "Tenancy Dispute",
  type: "Civil",
  court: "Dubai Civil Court",
  filedDate: "January 15, 2024",
  status: "Active",
  opposingParty: "Landlord: Oasis Properties LLC",
  claimAmount: "AED 85,000",
  nextHearing: "March 15, 2024 at 10:00 AM",
  assignedLawyer: "Ahmed Al-Rashid",
  milestones: [
    { date: "Jan 15, 2024", event: "Case Filed", done: true },
    { date: "Feb 10, 2024", event: "First Hearing", done: true },
    { date: "Mar 15, 2024", event: "Second Hearing", done: false, current: true },
    { date: "Apr 20, 2024", event: "Judgment", done: false },
  ],
  documents: ["Lease Agreement", "Payment Receipts", "Correspondence", "Court Filing"],
  notes: "Landlord claims unpaid rent for Oct-Dec 2023. Evidence shows payments were made via bank transfer. Need bank statement as evidence.",
};

export const mockChatMessages = [
  { role: "ai", text: "Hello Sarah! What legal question can I help you with today?" },
  { role: "user", text: "Can my landlord evict me with 6 months left on my lease?" },
  { role: "ai", text: "Under UAE Rental Law Art. 25, your landlord must give 12 months written notice. With 6 months remaining you have full right to stay. Want me to prepare a formal response letter?" },
];

export const chatSuggestions = [
  "Can I be evicted early?",
  "How to renew my visa?",
  "File a labor complaint",
  "Check my case status",
];
