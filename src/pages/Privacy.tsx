import { Shield, Eye, Database, Users, Lock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Privacy() {
  const lastUpdated = "December 2024";

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-heading font-bold text-foreground">
              Privacy Policy
            </h1>
          </div>
          <p className="text-muted-foreground">
            We respect your privacy and are committed to protecting your personal data. 
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Quick Summary */}
        <Alert>
          <AlertCircle className="w-4 h-4" />
          <AlertDescription>
            <strong>In short:</strong> We collect minimal data, use it only to improve your experience 
            with our spiritual learning platform, never sell your information, and give you control 
            over your data at all times.
          </AlertDescription>
        </Alert>

        {/* Data Collection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              What Data We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Automatically Collected</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Basic usage analytics (pages visited, time spent, device type)</li>
                <li>• Technical information (IP address, browser type, operating system)</li>
                <li>• Performance metrics to improve site speed and functionality</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Information You Provide</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Questions you ask our AI chatbot</li>
                <li>• Feedback and suggestions you submit</li>
                <li>• Reading preferences and bookmarks (stored locally)</li>
                <li>• Theme preferences and settings</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">What We Don't Collect</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Personal identification information (name, email, phone)</li>
                <li>• Financial or payment information</li>
                <li>• Detailed personal profiles or behavioral tracking</li>
                <li>• Third-party account information</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Data */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              How We Use Your Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">To Improve Your Experience</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Provide relevant and accurate responses to your questions</li>
                <li>• Remember your preferences and settings</li>
                <li>• Improve AI responses based on common questions</li>
                <li>• Optimize site performance and loading times</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">To Maintain Quality</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Monitor for inappropriate use or abuse</li>
                <li>• Identify and fix technical issues</li>
                <li>• Understand which features are most helpful</li>
                <li>• Ensure accurate citations and source references</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Storage & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Data Storage & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Local Storage</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Your reading preferences, bookmarks, and settings are stored locally in your browser. 
                This means:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Data stays on your device</li>
                <li>• You have full control over this information</li>
                <li>• We cannot access your local preferences</li>
                <li>• Clearing your browser data will remove these preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Server Storage</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Chat interactions and analytics are processed securely:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• All data is encrypted in transit and at rest</li>
                <li>• Chat logs are anonymized and stored temporarily</li>
                <li>• No personal identifiers are linked to your questions</li>
                <li>• Regular security audits and updates</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Third-Party Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground">
                We use privacy-focused analytics tools to understand how our platform is used. 
                These tools are configured to:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4 mt-2">
                <li>• Collect only aggregate, anonymous data</li>
                <li>• Respect "Do Not Track" preferences</li>
                <li>• Not use cookies for tracking</li>
                <li>• Not create individual user profiles</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">AI Processing</h3>
              <p className="text-sm text-muted-foreground">
                Your questions are processed by our AI system, which:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4 mt-2">
                <li>• Does not retain personal information from your queries</li>
                <li>• Processes questions to provide relevant responses</li>
                <li>• Uses aggregated data to improve response quality</li>
                <li>• Follows strict data handling guidelines</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Your Rights & Choices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">You Can Always:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Clear your local data by clearing browser storage</li>
                <li>• Use the site without providing any personal information</li>
                <li>• Contact us to request deletion of any server-side data</li>
                <li>• Opt out of analytics by using browser privacy settings</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Browser Controls</h3>
              <p className="text-sm text-muted-foreground">
                Most browsers allow you to control data collection through settings for cookies, 
                local storage, and tracking protection. We respect all these preferences.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Contact & Policy Updates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Questions or Concerns?</h3>
              <p className="text-sm text-muted-foreground">
                If you have any questions about this privacy policy or how we handle your data, 
                please visit our <a href="/feedback" className="text-primary hover:underline">feedback page</a> to 
                get in touch.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Policy Changes</h3>
              <p className="text-sm text-muted-foreground">
                We may update this privacy policy from time to time. Any changes will be posted 
                on this page with an updated revision date. We encourage you to review this policy 
                periodically.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground bg-gradient-dawn rounded-lg p-6">
          <p>
            This privacy policy reflects our commitment to protecting your privacy while 
            providing meaningful access to spiritual wisdom. We believe that learning about 
            sacred teachings should be both accessible and respectful of your personal privacy.
          </p>
        </div>
      </div>
    </div>
  );
}