export const FEEDS = {
  top: [
    "https://techcrunch.com/tag/artificial-intelligence/feed/",
    "https://venturebeat.com/category/ai/feed/",
    "https://www.theverge.com/artificial-intelligence/rss/",
    "https://www.technologyreview.com/feed/",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://futurism.com/categories/ai-artificial-intelligence/feed",
    "https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml",
    "https://news.google.com/rss/search?q=artificial+intelligence&hl=en-GB&ceid=GB:en"
  ],
  trending: [
    "https://news.google.com/rss/search?q=AI+breakthrough&hl=en-GB&ceid=GB:en",
    "https://techcrunch.com/tag/artificial-intelligence/feed/"
  ],
  business: [
    "https://news.google.com/rss/search?q=AI+site:bloomberg.com&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=AI+site:businessinsider.com&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22artificial+intelligence%22+site:forbes.com&hl=en-GB&ceid=GB:en",
  ],
  health: [
    "https://www.sciencedaily.com/rss/health_medicine/health_informatics.xml",
    "https://www.sciencedaily.com/rss/health_medicine/medical_technology.xml",
    "https://www.healthcareitnews.com/tags/artificial-intelligence/feed",
    "https://www.medtechdive.com/feeds/news/",
    "https://www.fiercehealthcare.com/technology/rss",
    "https://news.google.com/rss/search?q=%22artificial+intelligence%22+healthcare&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22AI+in+medicine%22&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22digital+health%22+AI&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22medical+AI%22+diagnosis&hl=en-GB&ceid=GB:en",
    "https://www.nature.com/npjdigitalmed.rss"
  ],
  science: [
    "https://export.arxiv.org/rss/cs.LG",
    "https://www.technologyreview.com/feed/",
    "https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml"
  ],
  education: [
    "https://www.edsurge.com/news.rss",
    "https://www.insidehighered.com/rss/technology",
    "https://er.educause.edu/articles.rss",
    "https://www.timeshighereducation.com/news/teaching-and-learning/rss",
    "https://edtechmagazine.com/higher/rss.xml",
    "https://www.chronicle.com/section/technology/rss",
    "https://news.google.com/rss/search?q=%22AI+in+education%22&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22AI+in+the+classroom%22&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22AI+edtech%22&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22artificial+intelligence%22+learning&hl=en-GB&ceid=GB:en"
  ],
  sports: [
    "https://www.sportspromedia.com/feed/",
    "https://www.sportsbusinessjournal.com/en-us/RSS-Feeds/technology",
    "https://news.google.com/rss/search?q=%22AI+sports+analytics%22&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22sports+performance+data%22&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22wearable+sports+technology%22&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22AI%22+sports+technology&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22machine+learning%22+sports&hl=en-GB&ceid=GB:en",
    "https://news.google.com/rss/search?q=%22sports+tech%22+AI&hl=en-GB&ceid=GB:en"
  ]
} as const;

export type Category = keyof typeof FEEDS;
