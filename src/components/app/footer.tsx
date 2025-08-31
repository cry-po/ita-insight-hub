import { Link } from "react-router-dom";
import { Flower } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-card/80 backdrop-blur">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-lotus">
                <Flower className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold text-foreground">
                Bhagavad Gita Help
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              A serene, modern reading and AI chatbot experience for the Bhagavad Gita and sacred wisdom.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/library" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-gentle"
                >
                  Sacred Library
                </Link>
              </li>
              <li>
                <Link 
                  to="/read/gita/1" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-gentle"
                >
                  Read the Gita
                </Link>
              </li>
              <li>
                <Link 
                  to="/chat" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-gentle"
                >
                  Ask the Gita
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-gentle"
                >
                  About & Methodology
                </Link>
              </li>
              <li>
                <Link 
                  to="/feedback" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-gentle"
                >
                  Share Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-gentle"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-gentle"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bhagavad Gita Help. Built with reverence and AI.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            Honoring timeless wisdom through modern technology
          </p>
        </div>
      </div>
    </footer>
  );
}