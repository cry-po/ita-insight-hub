import { BookOpen, Users, Shield, Sparkles, Heart, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: BookOpen,
    title: "Canonical Sources",
    description: "All content is based on authentic translations and established commentaries from respected scholars and spiritual teachers."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Our AI system uses advanced reasoning to provide meaningful explanations while always citing specific verses and sources."
  },
  {
    icon: Shield,
    title: "Ethical Approach",
    description: "We prioritize accuracy, respect, and humility in presenting these sacred teachings, acknowledging the limitations of AI."
  },
  {
    icon: Users,
    title: "Inclusive Access",
    description: "Making timeless wisdom accessible to seekers from all backgrounds through modern, intuitive interfaces."
  }
];

const sources = [
  {
    name: "Paramahansa Yogananda",
    work: "God Talks with Arjuna: The Bhagavad Gita",
    description: "Comprehensive commentary blending Eastern wisdom with Western understanding"
  },
  {
    name: "Eknath Easwaran", 
    work: "The Bhagavad Gita",
    description: "Clear, practical translation focused on spiritual practice"
  },
  {
    name: "Barbara Stoler Miller",
    work: "The Bhagavad-Gita: Krishna's Counsel in Time of War", 
    description: "Scholarly translation preserving poetic beauty and philosophical depth"
  },
  {
    name: "Swami Sivananda",
    work: "The Bhagavad Gita",
    description: "Traditional commentary emphasizing practical spiritual application"
  }
];

const methodology = [
  {
    step: "1",
    title: "Source Analysis",
    description: "Our AI is trained on multiple authentic translations and commentaries, creating a comprehensive knowledge base."
  },
  {
    step: "2", 
    title: "Contextual Understanding",
    description: "Questions are analyzed for context, allowing for relevant responses that consider the broader philosophical framework."
  },
  {
    step: "3",
    title: "Citation Generation",
    description: "Every response includes specific verse references and source attributions for verification and deeper study."
  },
  {
    step: "4",
    title: "Ethical Guidelines",
    description: "Responses are filtered to ensure respectful, accurate representation of the teachings while acknowledging limitations."
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-lotus">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl font-heading font-bold text-foreground">
          About Bhagavad Gita Help
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          We believe that timeless wisdom should be accessible to modern seekers. 
          Our mission is to create a respectful, accurate, and helpful bridge between 
          the sacred teachings of the Bhagavad Gita and today's spiritual explorers.
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="secondary" className="px-3 py-1">
            <Target className="w-3 h-3 mr-1" />
            Educational Purpose
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <Shield className="w-3 h-3 mr-1" />
            Non-Commercial
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <Heart className="w-3 h-3 mr-1" />
            Community Driven
          </Badge>
        </div>
      </div>

      {/* Mission & Features */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Our Approach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine traditional scholarship with modern technology to make the 
            Gita's teachings more accessible while maintaining the highest standards 
            of accuracy and respect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="transition-peaceful hover:shadow-peaceful">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Methodology */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            How Our AI Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI system follows a carefully designed process to ensure accurate, 
            helpful, and respectful responses to your questions about the Gita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-lotus text-primary-foreground font-bold text-lg mx-auto mb-2">
                  {step.step}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Trusted Sources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI responses are grounded in established translations and commentaries 
            from respected scholars and spiritual teachers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sources.map((source, index) => (
            <Card key={index} className="border-l-4 border-l-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">{source.name}</CardTitle>
                <div className="text-sm font-medium text-primary">{source.work}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {source.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ethics & Limitations */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ethics & Limitations
          </h2>
        </div>

        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Our Commitment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• We present teachings with humility and respect for their sacred nature</li>
                <li>• All responses include clear citations for verification and deeper study</li>
                <li>• We acknowledge that AI cannot replace authentic spiritual guidance</li>
                <li>• We encourage users to seek qualified teachers for personal spiritual development</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Important Disclaimers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• AI responses are educational tools, not authoritative spiritual guidance</li>
                <li>• Always verify important concepts with authentic sources and qualified teachers</li>
                <li>• Individual spiritual practice requires personal discernment and possibly guidance</li>
                <li>• We are not affiliated with any particular spiritual organization or tradition</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Community */}
      <section className="text-center space-y-6 bg-gradient-dawn rounded-2xl p-8">
        <h2 className="text-2xl font-heading font-bold text-foreground">
          Built for the Community
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          This project is created with love and respect for the timeless wisdom of the Gita. 
          We welcome feedback, suggestions, and contributions from the community to make 
          this resource even more helpful for spiritual seekers worldwide.
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>for the spiritual community</span>
        </div>
      </section>
    </div>
  );
}