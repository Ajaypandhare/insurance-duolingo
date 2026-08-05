const lessonContent = [
  {
    id: 1,
    title: "What is Insurance?",
    category: "Basics",
    difficulty: "Beginner",
    duration: "10 min",
    xp: 50,

    description:
      "Learn the fundamentals of insurance, how it works, and why it is important.",

    objectives: [
      "Understand the meaning of insurance",
      "Learn how insurance works",
      "Know important insurance terms",
      "Understand risk protection",
      "Prepare for the lesson quiz",
    ],

   sections: [
  {
    id: 1,
    type: "intro",
    icon: "📖",
    title: "Introduction",
    content:
      "Insurance is a financial agreement between an insurance company (insurer) and a customer (policyholder). The customer pays a premium, and in return, the insurer provides financial protection against covered losses.",

    tip: "Insurance protects your financial future against unexpected events."
  },

  {
    id: 2,
    type: "importance",
    icon: "🛡️",
    title: "Why Insurance is Important",

    points: [
      "Protects you from unexpected financial loss.",
      "Provides peace of mind.",
      "Supports your family during difficult times.",
      "Helps businesses recover from risks."
    ]
  },

  {
    id: 3,
    type: "terms",
    icon: "📚",
    title: "Key Insurance Terms",

    terms: [
      {
        name: "Premium",
        meaning: "The amount paid to keep the insurance policy active."
      },
      {
        name: "Policy",
        meaning: "The legal contract between the insurer and policyholder."
      },
      {
        name: "Claim",
        meaning: "A request made to receive benefits from the insurer."
      },
      {
        name: "Coverage",
        meaning: "The risks and losses covered under the policy."
      }
    ]
  },

  {
    id: 4,
    type: "example",
    icon: "🚗",
    title: "Real Life Example",

    heading: "Car Insurance Example",

    story: [
      "Rahul buys car insurance for ₹8,000 per year.",
      "Three months later, his car is involved in an accident.",
      "The repair estimate is ₹60,000.",
      "Because Rahul has valid insurance coverage, the insurer pays the repair cost according to the policy terms."
    ],

    takeaway:
      "Insurance reduces large unexpected financial expenses."
  },

  {
    id: 5,
    type: "summary",
    icon: "✅",
    title: "Summary",

    points: [
      "Insurance protects against financial risk.",
      "A premium keeps your policy active.",
      "A claim is used to request compensation.",
      "Coverage defines what the insurer will pay for."
    ]
  }
],

    rewards: {
      xp: 50,
      badge: "Insurance Beginner",
      unlock: "Why Insurance?",
    },
  },
];

export default lessonContent;