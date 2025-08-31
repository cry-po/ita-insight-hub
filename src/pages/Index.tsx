import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  MessageCircle, 
  Search, 
  Star, 
  Quote, 
  ArrowRight, 
  Sparkles, 
  Heart,
  PlayCircle,
  Users,
  Shield,
  Flower
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const featuredChapters = [
  {
    chapter: 1,
    title: "Arjuna's Dilemma",
    description: "The beginning of the spiritual battle - Arjuna's moral crisis and Krishna's first response",
    verses: 47,
    themes: ["Dharma", "Duty", "Inner conflict"]
  },
  {
    chapter: 2,
    title: "The Eternal Self", 
    description: "Krishna reveals the immortal nature of the soul and the path of discriminative wisdom",
    verses: 72,
    themes: ["Self-realization", "Wisdom", "Detachment"]
  },
  {
    chapter: 3,
    title: "The Path of Action",
    description: "Karma yoga - the way of selfless action without attachment to results",
    verses: 43,
    themes: ["Karma Yoga", "Selfless action", "Spiritual duty"]
  },
  {
    chapter: 4,
    title: "The Divine Knowledge",
    description: "The eternal teaching of yoga and Krishna's divine manifestations through the ages",
    verses: 42,
    themes: ["Divine incarnation", "Eternal teaching", "Sacred knowledge"]
  }
];

const testimonials = [
  {
    quote: "The AI guidance helped me understand concepts I've struggled with for years. The citations make it easy to dive deeper.",
    author: "Sarah M.",
    role: "Yoga Teacher"
  },
  {
    quote: "Finally, a modern way to engage with ancient wisdom. The reading experience is beautiful and respectful.",
    author: "Dr. Patel",
    role: "Philosophy Professor"
  },
  {
    quote: "As a beginner, I appreciate how accessible this makes the Gita's profound teachings.",
    author: "Michael R.",
    role: "Student"
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Beautiful Reading",
    description: "Sanskrit, transliteration, and multiple translations with commentary"
  },
  {
    icon: MessageCircle,
    title: "AI Guidance",
    description: "Ask questions and get answers with clear verse citations"
  },
  {
    icon: Search,  
    title: "Smart Search",
    description: "Find verses, concepts, and teachings instantly"
  },
  {
    icon: Shield,
    title: "Trusted Sources",
    description: "Based on established translations and scholarly commentary"
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log("Searching for:", searchQuery.trim());
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-dawn">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Hero Icon */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-lotus shadow-lotus">
              <Flower className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Read. Search. 
              <br />
              <span className="bg-gradient-lotus bg-clip-text text-transparent">
                Ask the Gita.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the timeless wisdom of the Bhagavad Gita through beautiful reading, 
              intelligent search, and AI-powered guidance with trusted citations.
            </p>
          </div>

          {/* Hero Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button asChild size="lg" className="px-8 shadow-lotus hover:shadow-peaceful">
              <Link to="/read/gita/1">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse the Gita
              </Link>
            </Button>
            
            <Button asChild variant="secondary" size="lg" className="px-8">
              <Link to="/chat">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask the Gita
              </Link>
            </Button>
          </div>

          {/* Global Search */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search chapters, verses, or concepts..."
                  className="pl-12 pr-24 h-14 text-lg bg-card/80 backdrop-blur border-2 border-border/40 focus:border-primary/40 rounded-2xl shadow-peaceful"
                />
                <Button 
                  type="submit"
                  size="sm"
                  className="absolute right-2 px-6"
                  disabled={!searchQuery.trim()}
                >
                  Search
                </Button>
              </div>
            </form>
            <p className="text-sm text-muted-foreground mt-2">
              Try searching: "dharma", "karma yoga", or "chapter 2 verse 47"
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Modern Tools for Ancient Wisdom
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how we've carefully designed each feature to enhance your journey 
              through the sacred teachings of the Gita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center transition-peaceful hover:shadow-peaceful hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Chapters */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Featured Chapters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your journey with these foundational chapters that form the core 
              of Krishna's teachings to Arjuna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredChapters.map((chapter) => (
              <Card key={chapter.chapter} className="transition-peaceful hover:shadow-peaceful group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Chapter {chapter.chapter}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {chapter.verses} verses
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{chapter.title}</CardTitle>
                    </div>
                    <Star className="w-5 h-5 text-primary/60" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {chapter.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {chapter.themes.map((theme) => (
                      <Badge key={theme} variant="outline" className="text-xs">
                        {theme}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild className="flex-1 group-hover:shadow-lotus">
                      <Link to={`/read/gita/${chapter.chapter}`}>
                        Read Chapter
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/library">
                View All Chapters
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Explanation */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-12 text-center space-y-8">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-lotus shadow-lotus">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Trusted AI Guidance
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our AI system is trained on authentic translations and established commentaries. 
                  Every response includes clear citations so you can verify and explore deeper.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <Users className="w-6 h-6 text-primary mx-auto" />
                  <div className="font-semibold text-foreground">Scholarly Sources</div>
                  <div className="text-muted-foreground">
                    Based on respected translations and commentaries
                  </div>
                </div>
                <div className="space-y-2">
                  <Quote className="w-6 h-6 text-primary mx-auto" />
                  <div className="font-semibold text-foreground">Clear Citations</div>
                  <div className="text-muted-foreground">
                    Every response links to specific verses and sources
                  </div>
                </div>
                <div className="space-y-2">
                  <Shield className="w-6 h-6 text-primary mx-auto" />
                  <div className="font-semibold text-foreground">Ethical Approach</div>
                  <div className="text-muted-foreground">
                    Respectful of sacred teachings with clear limitations
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">How it works</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto">1</div>
                    <div className="font-medium">Ask your question</div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto">2</div>
                    <div className="font-medium">AI analyzes context</div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto">3</div>
                    <div className="font-medium">Provides clear answer</div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto">4</div>
                    <div className="font-medium">Shows verse citations</div>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="shadow-lotus">
                <Link to="/chat">
                  Try AI Guidance
                  <MessageCircle className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from fellow seekers who have found value in this platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="transition-peaceful hover:shadow-peaceful">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-sm text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="pt-4 border-t border-border/40">
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Begin Your Journey Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're new to the Gita or deepening your practice, start exploring 
              the profound wisdom that has guided seekers for millennia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button asChild size="lg" className="px-8 shadow-lotus">
              <Link to="/read/gita/1">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Reading
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/about">
                <Heart className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free to use • Respectfully designed • Community supported
          </p>
        </div>
      </section>
    </div>
  );
}
