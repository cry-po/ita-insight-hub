import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  BookOpen, 
  MessageCircle,
  Copy,
  Share,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Sample Gita data
const gitaData = {
  1: {
    title: "Arjuna's Dilemma",
    sanskrit: "अर्जुन उवाच",
    verses: {
      1: {
        sanskrit: "दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।\nआचार्यमुपसंगम्य राजा वचनमब्रवीत्॥",
        transliteration: "dṛṣṭvā tu pāṇḍavānīkaṃ vyūḍhaṃ duryodhanas tadā\nācāryam upasaṅgamya rājā vacanam abravīt",
        translation: "Seeing the Pandava army arranged in battle formation, King Duryodhana approached his teacher Drona and spoke these words.",
        commentary: {
          yogananda: "In this opening verse, we see the beginning of the great spiritual battle that is about to unfold. Duryodhana represents the ego-mind, while the Pandavas represent the forces of righteousness within us.",
          easwaran: "The Gita begins not with philosophy but with a crisis. This is how spiritual growth often begins - in moments of great difficulty and moral confusion.",
        }
      },
      2: {
        sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता॥",
        transliteration: "paśyaitāṃ pāṇḍu-putrāṇām ācārya mahatīṃ camūm\nvyūḍhāṃ drupada-putreṇa tava śiṣyeṇa dhīmatā",
        translation: "Behold, O Teacher, this mighty army of the sons of Pandu, arrayed by the son of Drupada, your intelligent disciple.",
        commentary: {
          yogananda: "The 'mighty army' represents the disciplined spiritual forces within the devotee, organized by discrimination (Drupada's son represents discriminative intelligence).",
          easwaran: "Here we see the importance of proper guidance and the organization of our inner resources for the spiritual battle ahead.",
        }
      }
    }
  }
};

export default function Reader() {
  const { chapter, verse } = useParams();
  const { toast } = useToast();
  const [currentChapter, setCurrentChapter] = useState(parseInt(chapter || "1"));
  const [currentVerse, setCurrentVerse] = useState(parseInt(verse || "1"));
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [fontSize, setFontSize] = useState("normal");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCommentary, setSelectedCommentary] = useState("yogananda");

  const chapterData = gitaData[currentChapter as keyof typeof gitaData];
  const verseData = chapterData?.verses[currentVerse as keyof typeof chapterData.verses];

  useEffect(() => {
    if (chapter) setCurrentChapter(parseInt(chapter));
    if (verse) setCurrentVerse(parseInt(verse));
  }, [chapter, verse]);

  const copyVerse = async () => {
    if (!verseData) return;
    
    const verseText = `${verseData.sanskrit}\n\n${verseData.transliteration}\n\n${verseData.translation}\n\n— Bhagavad Gita ${currentChapter}.${currentVerse}`;
    
    try {
      await navigator.clipboard.writeText(verseText);
      toast({
        title: "Verse copied",
        description: "The verse has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  const shareVerse = async () => {
    if (!verseData) return;
    
    const shareData = {
      title: `Bhagavad Gita ${currentChapter}.${currentVerse}`,
      text: verseData.translation,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await copyVerse();
      }
    } catch (err) {
      console.log("Share failed:", err);
    }
  };

  if (!chapterData || !verseData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Chapter not found</h2>
          <p className="text-muted-foreground mb-4">
            The requested chapter or verse is not available yet.
          </p>
          <Button asChild>
            <Link to="/read/gita/1/1">Go to Chapter 1</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-heading font-bold text-foreground">
            Chapter {currentChapter}: {chapterData.title}
          </h1>
          <p className="text-muted-foreground">Verse {currentVerse} of {Object.keys(chapterData.verses).length}</p>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={copyVerse}>
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={shareVerse}>
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Reading Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Verse Content */}
          <Card className="shadow-verse">
            <CardContent className="p-8 space-y-6">
              {/* Sanskrit */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">Sanskrit</Label>
                <div className="sanskrit text-2xl leading-relaxed text-foreground font-medium">
                  {verseData.sanskrit}
                </div>
              </div>

              {/* Transliteration */}
              {showTransliteration && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Transliteration</Label>
                  <div className="text-lg leading-relaxed text-muted-foreground italic">
                    {verseData.transliteration}
                  </div>
                </div>
              )}

              <Separator />

              {/* Translation */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">Translation</Label>
                <div className="verse-text text-foreground">
                  {verseData.translation}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commentary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Commentary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedCommentary} onValueChange={setSelectedCommentary}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="yogananda">Yogananda</TabsTrigger>
                  <TabsTrigger value="easwaran">Easwaran</TabsTrigger>
                </TabsList>
                <TabsContent value="yogananda" className="mt-4 space-y-4">
                  <p className="text-sm leading-relaxed text-foreground">
                    {verseData.commentary.yogananda}
                  </p>
                </TabsContent>
                <TabsContent value="easwaran" className="mt-4 space-y-4">
                  <p className="text-sm leading-relaxed text-foreground">
                    {verseData.commentary.easwaran}
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              disabled={currentVerse === 1}
              asChild={currentVerse > 1}
            >
              {currentVerse > 1 ? (
                <Link to={`/read/gita/${currentChapter}/${currentVerse - 1}`}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Link>
              ) : (
                <>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </>
              )}
            </Button>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Play className="w-4 h-4 mr-2" />
                Play Audio
              </Button>
            </div>

            <Button 
              variant="outline"
              disabled={currentVerse === Object.keys(chapterData.verses).length}
              asChild={currentVerse < Object.keys(chapterData.verses).length}
            >
              {currentVerse < Object.keys(chapterData.verses).length ? (
                <Link to={`/read/gita/${currentChapter}/${currentVerse + 1}`}>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Reading Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Reading Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="transliteration">Show Transliteration</Label>
                <Switch
                  id="transliteration"
                  checked={showTransliteration}
                  onCheckedChange={setShowTransliteration}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Font Size</Label>
                <div className="flex gap-2">
                  <Button 
                    variant={fontSize === "small" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFontSize("small")}
                  >
                    A
                  </Button>
                  <Button 
                    variant={fontSize === "normal" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFontSize("normal")}
                  >
                    A
                  </Button>
                  <Button 
                    variant={fontSize === "large" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFontSize("large")}
                  >
                    A
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chapter Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Chapter {currentChapter}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-5 gap-1">
                {Object.keys(chapterData.verses).map((v) => (
                  <Button
                    key={v}
                    variant={parseInt(v) === currentVerse ? "default" : "outline"}
                    size="sm"
                    className="w-8 h-8 p-0"
                    asChild
                  >
                    <Link to={`/read/gita/${currentChapter}/${v}`}>
                      {v}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Concepts */}
          <Card>
            <CardHeader>
              <CardTitle>Related Concepts</CardTitle>  
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Dharma</Badge>
                <Badge variant="secondary">Righteousness</Badge>
                <Badge variant="secondary">Duty</Badge>
                <Badge variant="secondary">Battle</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Ask AI */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MessageCircle className="w-5 h-5" />
                Ask about this verse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get deeper insights about this verse from our AI guide.
              </p>
              <Button asChild className="w-full">
                <Link to={`/chat?verse=${currentChapter}.${currentVerse}`}>
                  Ask the Gita
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}