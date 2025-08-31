import { FileText, Scale, Users, AlertTriangle, BookOpen, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Terms() {
  const lastUpdated = "December 2024";

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Scale className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-heading font-bold text-foreground">
              Terms of Service
            </h1>
          </div>
          <p className="text-muted-foreground">
            Please read these terms carefully before using Bhagavad Gita Help. 
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Quick Overview */}
        <Alert>
          <AlertTriangle className="w-4 h-4" />
          <AlertDescription>
            <strong>Important:</strong> This is an educational platform providing access to sacred texts 
            and AI-assisted learning. It is not a substitute for qualified spiritual guidance or 
            traditional study with authentic teachers.
          </AlertDescription>
        </Alert>

        {/* Acceptance of Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              By accessing or using Bhagavad Gita Help, you agree to be bound by these Terms of Service 
              and our Privacy Policy. If you do not agree with any part of these terms, please do not 
              use our platform.
            </p>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">What This Means</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• You understand this is an educational resource</li>
                <li>• You agree to use the platform respectfully and appropriately</li>
                <li>• You acknowledge the limitations of AI-generated content</li>
                <li>• You will not misuse or attempt to harm the platform</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Description of Service */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Our Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">What We Provide</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Access to the Bhagavad Gita text in multiple formats</li>
                <li>• AI-powered question and answer system with citations</li>
                <li>• Educational commentary from established sources</li>
                <li>• Reading tools and personalization features</li>
                <li>• Search and discovery functionality</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">What We Don't Provide</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Personal spiritual guidance or counseling</li>
                <li>• Religious or spiritual authority</li>
                <li>• Guarantees about the accuracy of AI responses</li>
                <li>• Replacement for traditional study or qualified teachers</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Your Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Appropriate Use</h3>
              <p className="text-sm text-muted-foreground mb-2">
                You agree to use our platform in a manner that is:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Respectful of the sacred nature of the texts</li>
                <li>• Educational and in good faith</li>
                <li>• Compliant with applicable laws and regulations</li>
                <li>• Non-harmful to the platform or other users</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Prohibited Activities</h3>
              <p className="text-sm text-muted-foreground mb-2">
                You may not:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Use the service for commercial purposes without permission</li>
                <li>• Attempt to reverse engineer or hack the platform</li>
                <li>• Submit inappropriate, offensive, or harmful content</li>
                <li>• Overload the system with excessive requests</li>
                <li>• Violate any applicable laws or regulations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* AI Limitations & Disclaimers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              AI Limitations & Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Understanding AI Responses</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• AI responses are generated based on training data and algorithms</li>
                <li>• Responses may contain errors, omissions, or misinterpretations</li>
                <li>• AI cannot replace human wisdom, experience, or spiritual guidance</li>
                <li>• Citations are provided for verification, which you are encouraged to check</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Your Responsibility</h3>
              <p className="text-sm text-muted-foreground">
                You are responsible for verifying any information that is important to you 
                through authoritative sources and qualified teachers. Our AI system is a learning 
                tool, not an authority on spiritual matters.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Intellectual Property & Content
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Sacred Texts</h3>
              <p className="text-sm text-muted-foreground">
                The Bhagavad Gita and other sacred texts are in the public domain as ancient 
                spiritual literature. We use established translations and commentaries with 
                proper attribution to their authors and publishers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Platform Content</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Our platform design, code, and user interface are our intellectual property</li>
                <li>• AI-generated responses are provided for educational use</li>
                <li>• You may share individual verses and responses with proper attribution</li>
                <li>• Commercial use of our platform content requires explicit permission</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">User Content</h3>
              <p className="text-sm text-muted-foreground">
                By submitting questions or feedback, you grant us the right to use this 
                content to improve our service, while maintaining your privacy as outlined 
                in our Privacy Policy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Service Availability</h3>
              <p className="text-sm text-muted-foreground">
                We strive to maintain continuous service but cannot guarantee uninterrupted 
                access. The platform is provided "as is" without warranties of any kind.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Content Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                While we make every effort to provide accurate information, we cannot guarantee 
                the completeness or accuracy of all content, especially AI-generated responses. 
                Users should verify important information independently.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Damages</h3>
              <p className="text-sm text-muted-foreground">
                We are not liable for any direct, indirect, incidental, or consequential damages 
                arising from your use of the platform. Your use of the service is at your own risk.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card>
          <CardHeader>
            <CardTitle>Changes to These Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We may update these Terms of Service from time to time to reflect changes in our 
              practices or for legal reasons. We will post any changes on this page and update 
              the "Last updated" date.
            </p>
            
            <p className="text-sm text-muted-foreground">
              Continued use of the platform after changes are posted constitutes acceptance of 
              the new terms. We encourage you to review these terms periodically.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              If you have questions about these Terms of Service, please contact us through 
              our <a href="/feedback" className="text-primary hover:underline">feedback page</a>. 
              We're committed to addressing any concerns you may have.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <div className="text-center text-sm text-muted-foreground bg-gradient-dawn rounded-lg p-6">
          <p>
            These terms are governed by applicable laws and are designed to promote respectful, 
            educational use of sacred wisdom. Our goal is to create a supportive environment 
            for spiritual learning while protecting both users and the integrity of the teachings.
          </p>
        </div>
      </div>  
    </div>
  );
}