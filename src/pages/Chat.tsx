import { useState, useRef, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { 
  Send, 
  Loader2, 
  MessageCircle, 
  BookOpen, 
  Sparkles, 
  Copy, 
  RefreshCw,
  AlertTriangle,
  ExternalLink,
  Bot,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  citations?: Citation[];
  isStreaming?: boolean;
}

interface Citation {
  verse: string;
  text: string;
  chapter: number;
  verseNumber: number;
}

const quickActions = [
  {
    icon: BookOpen,
    label: "Explain verse",
    prompt: "/explain verse ",
    description: "Get detailed explanation of any verse"
  },
  {
    icon: MessageCircle,
    label: "Compare commentaries",
    prompt: "/compare commentaries ",
    description: "Compare different interpretations"
  },
  {
    icon: Sparkles,
    label: "Summarize chapter",
    prompt: "/summarize chapter ",
    description: "Get chapter summaries"
  },
  {
    icon: BookOpen,
    label: "Define term",
    prompt: "/define ",
    description: "Understand Sanskrit terms"
  }
];

const sampleQuestions = [
  "What does Krishna mean by 'dharma' in the Gita?",
  "How can I apply karma yoga in daily life?",
  "What is the significance of Arjuna's dilemma?",
  "Explain the concept of self-realization",
  "What are the different paths of yoga mentioned?"
];

export default function Chat() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pre-populate with verse context if provided
  useEffect(() => {
    const verse = searchParams.get("verse");
    if (verse && messages.length === 0) {
      setInput(`Please explain verse ${verse} and its deeper meaning.`);
      inputRef.current?.focus();
    }
  }, [searchParams, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response with citations
    setTimeout(() => {
      const mockResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: `Thank you for your question about the Bhagavad Gita. Based on the sacred teachings, I can provide insight into your inquiry.

The concept you're asking about is deeply rooted in Krishna's teachings to Arjuna. The Gita emphasizes that true wisdom comes from understanding our eternal nature and acting without attachment to results.

As Krishna explains, when we act according to our dharma (righteous duty) without being attached to the fruits of our actions, we find peace and spiritual growth. This is the essence of karma yoga - the path of selfless action.

The key is to remain centered in the Self while engaging fully with the world. This balance between action and detachment is what leads to liberation.`,
        timestamp: new Date(),
        citations: [
          {
            verse: "2.47",
            text: "You have the right to perform your prescribed duty, but not to the fruits of action.",
            chapter: 2,
            verseNumber: 47
          },
          {
            verse: "3.19", 
            text: "Therefore, always perform your duty efficiently and without attachment.",
            chapter: 3,
            verseNumber: 19
          }
        ]
      };

      setMessages(prev => [...prev, mockResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleQuickAction = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  const handleSampleQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  const copyMessage = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast({
        title: "Message copied",
        description: "The message has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl h-[calc(100vh-8rem)]">
      <div className="flex flex-col h-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-heading font-bold text-foreground flex items-center justify-center gap-2">
            <Bot className="w-8 h-8 text-primary" />
            Ask the Gita
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get trustworthy insights from the Bhagavad Gita with clear citations. 
            Ask questions about verses, concepts, or practical applications of the teachings.
          </p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-hidden">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-8">
              {/* Quick Actions */}
              <div className="w-full max-w-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <Card 
                      key={action.label}
                      className="cursor-pointer transition-peaceful hover:shadow-peaceful hover:border-primary/30"
                      onClick={() => handleQuickAction(action.prompt)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                            <action.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground text-sm">{action.label}</div>
                            <div className="text-xs text-muted-foreground">{action.description}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sample Questions */}
              <div className="w-full max-w-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Popular Questions</h3>
                <div className="space-y-2">
                  {sampleQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left justify-start h-auto p-3 text-sm"
                      onClick={() => handleSampleQuestion(question)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{question}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full overflow-y-auto pb-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className={`flex items-start pt-1 ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-gradient-lotus text-primary-foreground'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                    </div>

                    {/* Message Content */}
                    <div className={`flex-1 ${message.type === 'user' ? 'order-1' : 'order-2'}`}>
                      <Card className={`${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-card border-border/40'
                      }`}>
                        <CardContent className="p-4">
                          <div className="prose prose-sm max-w-none">
                            <div className="whitespace-pre-wrap leading-relaxed">
                              {message.content}
                            </div>
                          </div>

                          {/* Citations */}
                          {message.citations && message.citations.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-border/40">
                              <div className="text-sm font-medium text-muted-foreground mb-2">Sources:</div>
                              <div className="space-y-2">
                                {message.citations.map((citation, index) => (
                                  <Link
                                    key={index}
                                    to={`/read/gita/${citation.chapter}/${citation.verseNumber}`}
                                    className="flex items-start gap-2 p-2 rounded-md bg-muted/50 hover:bg-muted transition-gentle group"
                                  >
                                    <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                      <div className="font-medium text-sm text-foreground">
                                        Bhagavad Gita {citation.verse}
                                      </div>
                                      <div className="text-xs text-muted-foreground line-clamp-2">
                                        {citation.text}
                                      </div>
                                    </div>
                                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-gentle" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Message Actions */}
                          {message.type === 'assistant' && (
                            <div className="flex items-center justify-end gap-2 mt-3 pt-3 border-t border-border/20">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyMessage(message.content)}
                                className="h-7 px-2 text-xs"
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                Copy
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="flex items-start pt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-lotus text-primary-foreground">
                        <Bot className="w-4 h-4" />
                      </div>
                    </div>
                    <Card className="bg-card border-border/40">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin text-primary" />
                          <span className="text-sm text-muted-foreground">Consulting the sacred texts...</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="space-y-4">
          {/* Disclaimer */}
          <Alert>
            <AlertTriangle className="w-4 h-4" />
            <AlertDescription className="text-xs">
              AI responses are generated based on traditional texts and commentaries. 
              Always verify important guidance with authentic sources and qualified teachers.
            </AlertDescription>
          </Alert>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask about verses, concepts, or how to apply teachings..."
                className="pr-12"
                disabled={isLoading}
              />
              <Button
                size="sm"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-1 top-1 h-8 w-8 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="text-center text-xs text-muted-foreground">
            Use "/" commands like /explain, /compare, /summarize, or /define for structured responses
          </div>
        </div>
      </div>
    </div>
  );
}