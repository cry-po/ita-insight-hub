import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Sun, Moon, Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Library", href: "/library" },
  { name: "Read", href: "/read/gita/1" },
  { name: "Chat", href: "/chat" },
  { name: "About", href: "/about" },
];

export function Header() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/read/gita/1") {
      return location.pathname.startsWith("/read");
    }
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-peaceful hover:opacity-80"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-lotus">
            <Flower className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-semibold text-lg text-foreground">
            Bhagavad Gita Help
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-peaceful hover:text-primary",
                isActive(item.href)
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Search Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchOpen(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Search className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-muted-foreground hover:text-foreground">
                <Menu className="w-4 h-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "text-left px-2 py-1 text-sm font-medium transition-peaceful hover:text-primary rounded-md",
                      isActive(item.href)
                        ? "text-primary font-semibold bg-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Modal - Placeholder for now */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-lg">
            <div className="mx-4 bg-card border border-border rounded-lg shadow-peaceful p-4">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search chapters, verses, or concepts..."
                  className="flex-1 border-0 bg-transparent p-0 text-sm focus-visible:ring-0"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Start typing to search the sacred texts...
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}