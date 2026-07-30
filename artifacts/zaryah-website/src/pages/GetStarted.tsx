// Source: PDF Pages 15, 16
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    tag: "TRY US",
    title: "Discovery",
    price: "FREE",
    sub: "first sprint",
    desc: "Two weeks. We scope, prototype, and show you something working. Walk away with the code if we're not a fit.",
    best: "testing the partnership",
    featured: false,
  },
  {
    tag: "MOST CHOSEN",
    title: "Project Build",
    price: "FIXED",
    sub: "per milestone",
    desc: "Defined scope, fixed price, fixed timeline. We deliver, you ship. Production-ready handoff in 6–12 weeks.",
    best: "known specs, deadline pressure",
    featured: true,
  },
  {
    tag: "SCALE WITH US",
    title: "Embedded",
    price: "MO/MO",
    sub: "per engineer",
    desc: "1 to 20 engineers placed on your roster. Pause, scale, or convert anytime. They feel like your own team.",
    best: "long-haul, evolving roadmaps",
    featured: false,
  },
];

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(1, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  engagement: z.string().min(1, "Please select an engagement type"),
  project: z.string().min(10, "Please describe your project in a few words"),
});

type FormValues = z.infer<typeof schema>;

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      engagement: "",
      project: "",
    },
  });

  function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(
      `[Digitech Evoqe Inquiry] ${values.engagement} — ${values.company}`
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\nEngagement Type: ${values.engagement}\n\nProject Description:\n${values.project}`
    );
    window.location.href = `mailto:info@digitechevoqe.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center space-y-4 py-12"
      >
        <CheckCircle className="h-14 w-14 text-primary" />
        <h3 className="text-2xl font-bold">Your email client is ready.</h3>
        <p className="text-muted-foreground max-w-sm">
          Your inquiry has been pre-filled. Hit send and we'll come back within 48 hours with a plan, a price, and a path to production.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
          Submit another inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        data-testid="form-contact"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Smith"
                    {...field}
                    data-testid="input-name"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">Company</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Corp"
                    {...field}
                    data-testid="input-company"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-semibold">Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jane@acmecorp.com"
                  {...field}
                  data-testid="input-email"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="engagement"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-semibold">Engagement Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    data-testid="select-engagement"
                    className="bg-background border-border text-foreground"
                  >
                    <SelectValue placeholder="Select how you'd like to work together" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="Discovery (Free first sprint)">Discovery — Free first sprint</SelectItem>
                  <SelectItem value="Project Build (Fixed price)">Project Build — Fixed price per milestone</SelectItem>
                  <SelectItem value="Embedded (Monthly per engineer)">Embedded — Monthly per engineer</SelectItem>
                  <SelectItem value="Not sure yet">Not sure yet — help me decide</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="project"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-semibold">What do you want to build?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Bring us a problem, a sketch, or a vague hunch..."
                  rows={5}
                  {...field}
                  data-testid="textarea-project"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full h-14 text-base font-bold"
          data-testid="button-submit"
        >
          Send Inquiry — We'll respond in 48 hours
        </Button>
      </form>
    </Form>
  );
}

export default function GetStarted() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-4xl relative z-10 mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">How to Start</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Three doors. Walk through any of them.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.featured
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-widest rounded-full">
                    MOST CHOSEN
                  </div>
                )}
                <div className="text-xs font-bold tracking-widest text-primary uppercase mb-4">{plan.tag}</div>
                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2 text-sm">{plan.sub}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{plan.desc}</p>
                <div className="text-sm text-muted-foreground mb-6">
                  <span className="font-semibold text-foreground">Best for:</span> {plan.best}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center text-sm text-muted-foreground"
          >
            All three include: dedicated PM · daily syncs · weekly demos · your repo · your IP.
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 border-t border-border bg-muted/5">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              The first conversation is on the house.
            </h2>
            <p className="text-lg text-muted-foreground">
              Bring us a problem, a sketch, or a vague hunch. We'll come back in 48 hours with a plan, a price, and a path to production.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Free 60-min architecture review",
                "Custom POC scope within 5 days",
                "Fixed quote — no hourly games",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10"
          >
            <ContactForm />
          </motion.div>

          <div className="mt-10 text-center text-sm text-muted-foreground space-y-1">
            <p>Or reach us directly:</p>
            <a href="mailto:info@digitechevoqe.com" className="font-semibold text-primary hover:underline">
              info@digitechevoqe.com
            </a>
            <span className="mx-2">·</span>
            <a href="https://digitechevoqe.com" className="hover:text-primary">digitechevoqe.com</a>
            <p className="mt-2">India · UAE · Global</p>
          </div>
        </div>
      </section>
    </div>
  );
}
