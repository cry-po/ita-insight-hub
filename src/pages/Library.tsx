import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Filter, Search, Grid3X3, List, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const texts = [
  {
    id: "bhagavad-gita",
    title: "Bhagavad Gita",
    subtitle: "The Song of God",
    description: "The eternal dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, revealing profound truths about life, duty, and spirituality.",
    chapters: 18,
    verses: 700,
    languages: ["Sanskrit", "English", "Hindi"],
    translators: ["Paramahansa Yogananda", "Eknath Easwaran", "Barbara Stoler Miller"],
    themes: ["Dharma", "Karma Yoga", "Bhakti", "Self-realization"],
    featured: true,
    available: true,
  },
  {
    id: "upanishads",
    title: "Principal Upanishads",
    subtitle: "The Philosophical Foundations",
    description: "Ancient philosophical texts that form the theoretical basis for Hinduism, exploring the nature of reality and consciousness.",
    chapters: 108,
    verses: 2000,
    languages: ["Sanskrit", "English"],
    translators: ["Patrick Olivelle", "Swami Nikhilananda"],
    themes: ["Brahman", "Atman", "Meditation", "Wisdom"],
    featured: false,
    available: false,
  },
  {
    id: "yoga-sutras",
    title: "Yoga Sutras of Patanjali",
    subtitle: "The Science of Yoga",
    description: "The foundational text of classical yoga philosophy, presenting the eight-limbed path to spiritual realization.",
    chapters: 4,
    verses: 196,
    languages: ["Sanskrit", "English"],
    translators: ["Swami Satchidananda", "Georg Feuerstein"],
    themes: ["Eight Limbs", "Samadhi", "Concentration", "Ethics"],
    featured: false,
    available: false,
  },
];

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTheme, setFilterTheme] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredTexts = texts.filter((text) => {
    const matchesSearch = text.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         text.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         text.themes.some(theme => theme.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTheme = filterTheme === "all" || text.themes.some(theme => 
      theme.toLowerCase().includes(filterTheme.toLowerCase())
    );

    return matchesSearch && matchesTheme;
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-heading font-bold text-foreground">Sacred Library</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore timeless wisdom through carefully curated translations and commentaries 
          of sacred texts from the dharmic tradition.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search texts, themes, or concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterTheme} onValueChange={setFilterTheme}>
            <SelectTrigger className="w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Themes</SelectItem>
              <SelectItem value="dharma">Dharma</SelectItem>
              <SelectItem value="yoga">Yoga</SelectItem>
              <SelectItem value="meditation">Meditation</SelectItem>
              <SelectItem value="wisdom">Wisdom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {filteredTexts.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No texts found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredTexts.map((text) => (
              <Card 
                key={text.id} 
                className={`transition-peaceful hover:shadow-peaceful ${text.featured ? 'ring-2 ring-primary/20' : ''} ${!text.available ? 'opacity-60' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-heading flex items-center gap-2">
                        {text.title}
                        {text.featured && <Star className="w-4 h-4 text-primary fill-current" />}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground">
                        {text.subtitle}
                      </CardDescription>
                    </div>
                    {!text.available && (
                      <Badge variant="secondary" className="text-xs">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {text.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Chapters:</span>
                      <span className="text-muted-foreground ml-1">{text.chapters}</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Verses:</span>
                      <span className="text-muted-foreground ml-1">{text.verses}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {text.themes.slice(0, 3).map((theme) => (
                        <Badge key={theme} variant="outline" className="text-xs">
                          {theme}
                        </Badge>
                      ))}
                      {text.themes.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{text.themes.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    {text.available ? (
                      <>
                        <Button asChild className="flex-1">
                          <Link to={`/read/${text.id}/1`}>
                            Read Now
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                      </>
                    ) : (
                      <Button disabled className="flex-1">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}