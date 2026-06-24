import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold tracking-tight">ZARYAH TECHNOLOGIES</h3>
            <p className="text-muted-foreground max-w-sm">
              We build the AI software that grows your business.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/who-we-are" className="hover:text-primary">Who We Are</Link></li>
              <li><Link href="/what-we-build" className="hover:text-primary">What We Build</Link></li>
              <li><Link href="/how-we-work" className="hover:text-primary">How We Work</Link></li>
              <li><Link href="/track-record" className="hover:text-primary">Track Record</Link></li>
              <li><Link href="/the-math" className="hover:text-primary">The Math</Link></li>
              <li><Link href="/founder" className="hover:text-primary">Our Founder</Link></li>
              <li><Link href="/advisors" className="hover:text-primary">Advisors & Board</Link></li>
              <li><Link href="/get-started" className="hover:text-primary">Get Started</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact & Global</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:info@zaryahtech.com" className="hover:text-primary">info@zaryahtech.com</a></li>
              <li><a href="https://zaryahtech.com" className="hover:text-primary">zaryahtech.com</a></li>
              <li className="pt-2">Locations:</li>
              <li className="font-medium text-foreground">India &middot; UAE &middot; Global</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Zaryah Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
