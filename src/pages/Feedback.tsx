import { useState } from "react";
import { MessageCircle, Send, Heart, Bug, Lightbulb, HelpCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const feedbackTypes = [
  {
    id: "general",
    label: "General Feedback",
    icon: MessageCircle,
    description: "Share your thoughts about the platform"
  },
  {
    id: "bug",
    label: "Bug Report",
    icon: Bug,
    description: "Report technical issues or errors"
  },
  {
    id: "feature",
    label: "Feature Request",
    icon: Lightbulb,
    description: "Suggest new features or improvements"
  },
  {
    id: "content",
    label: "Content Issue",
    icon: HelpCircle,
    description: "Report inaccurate or inappropriate content"
  },
  {
    id: "appreciation",
    label: "Appreciation",
    icon: Heart,
    description: "Share what you love about the platform"
  }
];

export default function Feedback() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    type: "general",
    subject: "",
    message: "", 
    email: "",
    url: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.message.trim()) {
      toast({
        title: "Message required",
        description: "Please share your feedback in the message field.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Feedback submitted",
        description: "Thank you for helping us improve! We'll review your feedback carefully.",
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="text-center shadow-peaceful">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-lotus mx-auto">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-heading font-bold text-foreground">
                Thank You!
              </h2>
              <p className="text-muted-foreground">
                Your feedback has been received and will help us make the platform better 
                for everyone seeking wisdom from the Gita.
              </p>
            </div>

            <div className="flex gap-3 justify-center">
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    type: "general",
                    subject: "",
                    message: "",
                    email: "",
                    url: ""
                  });
                }}
                variant="outline"
              >
                Submit More Feedback
              </Button>
              <Button asChild>
                <a href="/">Return Home</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-heading font-bold text-foreground">
              Share Your Feedback
            </h1>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Your input helps us improve this platform for spiritual seekers worldwide. 
            Whether it's a bug, suggestion, or appreciation, we'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <Card className="shadow-peaceful">
          <CardHeader>
            <CardTitle>Send Us Your Thoughts</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Feedback Type */}
              <div className="space-y-3">
                <Label className="text-base font-medium">What type of feedback is this?</Label>
                <RadioGroup 
                  value={formData.type} 
                  onValueChange={(value) => handleInputChange("type", value)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {feedbackTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={type.id} id={type.id} />
                      <Label 
                        htmlFor={type.id} 
                        className="flex items-center space-x-2 cursor-pointer flex-1 p-3 rounded-lg border border-transparent hover:border-border transition-gentle"
                      >
                        <type.icon className="w-4 h-4 text-primary" />
                        <div>
                          <div className="font-medium text-sm">{type.label}</div>
                          <div className="text-xs text-muted-foreground">{type.description}</div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject">Subject (Optional)</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="Brief summary of your feedback"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Please share your detailed feedback, including any relevant context..."
                  rows={5}
                  required
                />
              </div>

              {/* URL Context */}
              <div className="space-y-2">
                <Label htmlFor="url">Page URL (Optional)</Label>
                <Input
                  id="url"
                  value={formData.url}
                  onChange={(e) => handleInputChange("url", e.target.value)}
                  placeholder="If this relates to a specific page, paste the URL here"
                />
                <p className="text-xs text-muted-foreground">
                  Current page: {window.location.href}
                </p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="If you'd like a response (we won't share your email)"
                />
                <p className="text-xs text-muted-foreground">
                  Only provide your email if you want us to follow up with you.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.message.trim()}
                  className="min-w-[120px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Feedback
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-2">Privacy Note</h3>
              <p className="text-muted-foreground text-xs">
                We respect your privacy. Your feedback will only be used to improve 
                the platform and will not be shared with third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-muted-foreground text-xs">
                We review all feedback carefully. If you provided your email, 
                we'll typically respond within 2-3 business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}