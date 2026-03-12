export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Cognitive Behavioral Therapy: A Guide to CBT",
    slug: "understanding-cognitive-behavioral-therapy-cbt",
    excerpt: "Learn how cognitive behavioral therapy can help you transform negative thinking patterns and improve your mental health.",
    content: `Cognitive Behavioral Therapy (CBT) is one of the most researched and effective forms of psychotherapy. It works by identifying and changing negative thought patterns and behaviors that contribute to emotional distress.

CBT is based on the idea that our thoughts, feelings, and actions are interconnected. By changing our thoughts and behaviors, we can improve our emotional wellbeing.

Key benefits of CBT include:
- Improved mood and reduced anxiety
- Better stress management
- Enhanced problem-solving skills
- Breaking negative thought cycles
- Long-lasting results

Whether you're dealing with anxiety, depression, or other challenges, CBT can provide practical tools and strategies.`,
    author: "Dr. Sarah Mitchell",
    date: "2024-03-10",
    readTime: 8,
    category: "Mental Health",
    tags: ["cbt", "therapy", "mental-health", "anxiety"],
    image: "https://images.unsplash.com/photo-1574024589473-19baf07999be?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Managing Anxiety: Evidence-Based Techniques That Work",
    slug: "managing-anxiety-evidence-based-techniques",
    excerpt: "Discover proven techniques for managing anxiety and developing lasting coping strategies.",
    content: `Anxiety is one of the most common mental health challenges people face. The good news is that there are evidence-based techniques that can help.

Breathing exercises, progressive muscle relaxation, mindfulness meditation, and cognitive reframing are all proven to reduce anxiety.

Start with these techniques:
1. Deep breathing exercises (4-7-8 technique)
2. Progressive muscle relaxation
3. Mindfulness and meditation
4. Cognitive reframing
5. Regular exercise and healthy sleep

Consistency is key. Most people see improvements within 2-4 weeks of regular practice.`,
    author: "Dr. James Chen",
    date: "2024-03-08",
    readTime: 7,
    category: "Anxiety Management",
    tags: ["anxiety", "coping-strategies", "mental-wellness", "stress-relief"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Depression Treatment Options: Therapy vs Medication vs Combined",
    slug: "depression-treatment-options-therapy-medication",
    excerpt: "Explore the various treatment approaches for depression and how they work together.",
    content: `Depression is treatable, and there are several evidence-based approaches available.

The most effective treatment depends on the type and severity of depression. Many people benefit from a combination of therapy and medication.

Therapy options include:
- Cognitive Behavioral Therapy (CBT)
- Interpersonal Therapy (IPT)
- Psychodynamic Therapy
- Behavioral Activation

Medication may include:
- SSRIs (Selective Serotonin Reuptake Inhibitors)
- SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)
- Other antidepressants

The key is finding what works for you with professional guidance. Recovery is possible.`,
    author: "Dr. Emily Rodriguez",
    date: "2024-03-05",
    readTime: 9,
    category: "Depression",
    tags: ["depression", "treatment", "mental-health", "therapy"],
    image: "https://images.unsplash.com/photo-1527482797697-8795b1a55a45?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Mindfulness and Meditation: Start Your Daily Practice Today",
    slug: "mindfulness-meditation-daily-practice",
    excerpt: "Beginner's guide to starting a mindfulness meditation practice for better mental health.",
    content: `Mindfulness and meditation are powerful tools for mental wellness. Research shows regular practice can:

- Reduce stress and anxiety
- Improve focus and concentration
- Enhance emotional regulation
- Promote better sleep
- Lower blood pressure

Getting started is simple:
1. Find a quiet space
2. Sit comfortably
3. Focus on your breath
4. Start with 5-10 minutes daily
5. Gradually increase duration

There's no "perfect" way to meditate. Consistency matters more than duration. Even 5 minutes daily can make a difference.

Try apps like Headspace or Calm to guide your practice.`,
    author: "Dr. Michael Park",
    date: "2024-03-03",
    readTime: 6,
    category: "Wellness",
    tags: ["mindfulness", "meditation", "stress-relief", "wellness"],
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "Healthy Sleep Habits: The Psychotherapist's Guide to Better Rest",
    slug: "healthy-sleep-habits-guide",
    excerpt: "Learn how to establish sleep hygiene practices that improve sleep quality and mental health.",
    content: `Sleep and mental health are deeply connected. Poor sleep worsens anxiety and depression, while quality sleep improves emotional resilience.

Sleep hygiene essentials:
- Consistent sleep schedule (same bed/wake time)
- Cool, dark bedroom
- No screens 1 hour before bed
- Limit caffeine after 2 PM
- Regular exercise (but not before bed)
- Relaxation techniques before sleep

The 4-7-8 breathing technique:
- Inhale for 4 counts
- Hold for 7 counts
- Exhale for 8 counts
- Repeat 4 times

If you struggle with sleep, CBT-I (Cognitive Behavioral Therapy for Insomnia) is highly effective. Most people see improvement in 4-6 weeks.`,
    author: "Dr. Lisa Thompson",
    date: "2024-02-28",
    readTime: 7,
    category: "Sleep Wellness",
    tags: ["sleep", "insomnia", "sleep-hygiene", "mental-health"],
    image: "https://images.unsplash.com/photo-1540575467063-178f50002cbe?w=800&h=400&fit=crop"
  },
  {
    id: "6",
    title: "Relationships and Boundaries: Building Healthy Connections",
    slug: "healthy-relationships-boundaries",
    excerpt: "Develop skills for building and maintaining healthy relationships with clear boundaries.",
    content: `Healthy relationships are fundamental to mental health. Setting boundaries is essential.

Common boundary challenges:
- Saying "no" without guilt
- Communicating needs clearly
- Dealing with difficult people
- Managing expectations

Steps to set healthy boundaries:
1. Identify your limits
2. Communicate clearly and kindly
3. Be consistent
4. Expect pushback
5. Adjust as needed

Assertiveness doesn't mean rudeness. It means expressing your needs respectfully.

Key communication tips:
- Use "I" statements
- Be specific about your needs
- Listen actively
- Respect others' boundaries

Strong relationships require emotional honesty and mutual respect.`,
    author: "Dr. Rebecca Foster",
    date: "2024-02-25",
    readTime: 8,
    category: "Relationships",
    tags: ["relationships", "boundaries", "communication", "mental-health"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop"
  },
  {
    id: "7",
    title: "Stress Management: Practical Strategies for Daily Life",
    slug: "stress-management-daily-strategies",
    excerpt: "Discover practical stress management techniques you can use in your daily life.",
    content: `Chronic stress impacts every aspect of our health. Learning to manage stress is crucial.

The stress response cycle:
1. Stressor occurs
2. Fight-or-flight activated
3. Physical symptoms appear
4. Recovery phase

Effective stress management tools:
- Time management and prioritization
- Regular physical exercise
- Healthy diet
- Adequate sleep
- Social connections
- Relaxation techniques
- Hobbies and interests

The 5-4-3-2-1 grounding technique:
- Name 5 things you see
- 4 things you touch
- 3 things you hear
- 2 things you smell
- 1 thing you taste

This immediate technique helps during stressful moments.

Remember: Stress is normal. It's how you manage it that matters.`,
    author: "Dr. David Kumar",
    date: "2024-02-22",
    readTime: 8,
    category: "Stress Management",
    tags: ["stress", "stress-management", "coping", "wellness"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f70504504?w=800&h=400&fit=crop"
  },
  {
    id: "8",
    title: "Self-Esteem and Self-Worth: Building Confidence From Within",
    slug: "self-esteem-confidence-building",
    excerpt: "Learn how to develop healthy self-esteem and genuine confidence.",
    content: `Self-esteem is the foundation of mental health. It's not about arrogance—it's about respecting yourself.

Components of healthy self-esteem:
- Self-awareness
- Self-acceptance
- Self-compassion
- Self-care
- Self-advocacy

Building self-esteem:
1. Challenge negative self-talk
2. Practice self-compassion
3. Set realistic goals
4. Celebrate small wins
5. Surround yourself with positive people
6. Engage in activities you enjoy
7. Practice gratitude

The inner critic is often louder than we realize. Recognizing and challenging negative thoughts is key.

Quick self-esteem boost:
- Write 3 things you're good at
- List accomplishments from the past week
- Practice positive affirmations
- Spend time on self-care

Remember: Your worth isn't determined by achievements or others' opinions.`,
    author: "Dr. Patricia Anderson",
    date: "2024-02-19",
    readTime: 7,
    category: "Self-Development",
    tags: ["self-esteem", "confidence", "self-worth", "personal-growth"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=400&fit=crop"
  },
  {
    id: "9",
    title: "Understanding Trauma: Healing from Past Experiences",
    slug: "understanding-trauma-healing",
    excerpt: "Learn about trauma, its effects, and evidence-based healing approaches.",
    content: `Trauma can have lasting effects on mental health, but healing is possible with proper support.

Common trauma responses:
- Hypervigilance
- Flashbacks
- Avoidance
- Emotional numbness
- Difficulty sleeping
- Irritability

Evidence-based trauma treatments:
- EMDR (Eye Movement Desensitization and Reprocessing)
- Trauma-Focused CBT
- Somatic Experiencing
- Narrative Exposure Therapy

Recovery takes time:
- Be patient with yourself
- Seek professional help
- Build a support system
- Practice self-care
- Develop healthy coping strategies

Trauma isn't your fault, but healing is your choice. Professional support significantly improves outcomes.

If you're struggling with trauma, you're not alone. Treatment works, and recovery is possible.`,
    author: "Dr. Jennifer Walsh",
    date: "2024-02-16",
    readTime: 9,
    category: "Trauma & Recovery",
    tags: ["trauma", "healing", "mental-health", "recovery"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
  },
  {
    id: "10",
    title: "Emotional Intelligence: Mastering Your Emotions and Relationships",
    slug: "emotional-intelligence-mastery",
    excerpt: "Develop emotional intelligence skills for better relationships and life outcomes.",
    content: `Emotional intelligence (EI) is a key predictor of success and wellbeing. It's the ability to understand and manage emotions.

Five components of emotional intelligence:
1. Self-awareness
2. Self-regulation
3. Social awareness (empathy)
4. Relationship management
5. Motivation

Improving emotional intelligence:
- Practice self-reflection
- Develop empathy
- Improve listening skills
- Manage emotions effectively
- Build conflict resolution skills

Self-awareness exercise:
- Notice your emotions throughout the day
- Identify triggers
- Understand your patterns
- Observe without judgment

High emotional intelligence leads to:
- Better relationships
- Improved mental health
- Greater resilience
- Enhanced decision-making
- Better communication

Developing EI is a lifelong journey. Start with self-awareness and build from there.`,
    author: "Dr. Thomas Mitchell",
    date: "2024-02-13",
    readTime: 8,
    category: "Emotional Intelligence",
    tags: ["emotional-intelligence", "emotions", "relationships", "personal-growth"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  }
];
