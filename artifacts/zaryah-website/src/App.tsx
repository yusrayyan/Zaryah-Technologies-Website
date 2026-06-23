import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import WhoWeAre from "@/pages/WhoWeAre";
import WhatWeBuild from "@/pages/WhatWeBuild";
import CustomAISoftware from "@/pages/services/CustomAISoftware";
import AgenticAI from "@/pages/services/AgenticAI";
import AIAgents from "@/pages/services/AIAgents";
import ResourcePlacement from "@/pages/services/ResourcePlacement";
import HowWeWork from "@/pages/HowWeWork";
import TrackRecord from "@/pages/TrackRecord";
import TheMath from "@/pages/TheMath";
import Founder from "@/pages/Founder";
import Advisors from "@/pages/Advisors";
import GetStarted from "@/pages/GetStarted";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/what-we-build" component={WhatWeBuild} />
          <Route path="/services/custom-ai-software" component={CustomAISoftware} />
          <Route path="/services/agentic-ai" component={AgenticAI} />
          <Route path="/services/ai-agents" component={AIAgents} />
          <Route path="/services/resource-placement" component={ResourcePlacement} />
          <Route path="/how-we-work" component={HowWeWork} />
          <Route path="/track-record" component={TrackRecord} />
          <Route path="/the-math" component={TheMath} />
          <Route path="/founder" component={Founder} />
          <Route path="/advisors" component={Advisors} />
          <Route path="/get-started" component={GetStarted} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
