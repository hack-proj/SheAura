import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Calendar, Brain, Heart, Users, MapPin, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Empower Your Health Journey<br />with
            <span className="text-primary"> SheAura</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Track symptoms, gain AI-powered insights, and take control of your
            health with our comprehensive platform designed for women.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 bg-transparent"
            >
              <Link href="/demo">Try Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Everything You Need for Complete Health Tracking
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Intelligent Symptom Tracker</CardTitle>
                <CardDescription>
                  Record daily symptoms with our intuitive calendar view. Track
                  patterns across menstrual, urinary, and general health
                  categories.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <CardTitle>AI-Powered Insights</CardTitle>
                <CardDescription>
                  Get personalized health insights based on your symptom
                  patterns. Raise awareness about potential health topics to
                  discuss with your doctor.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Period & Ovulation Tracker</CardTitle>
                <CardDescription>
                  Complete menstrual cycle monitoring with ovulation
                  predictions. Understand your body&apos;s natural rhythms and
                  patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Knowledge Hub</CardTitle>
                <CardDescription>
                  Access reliable health information from trusted sources like
                  WHO and NHS. Articles, FAQs, and videos on women&apos;s health
                  topics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Doctor Locator</CardTitle>
                <CardDescription>
                  Find nearby gynecologists and clinics with our integrated map
                  feature. Connect with healthcare providers in your area.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Secure Community</CardTitle>
                <CardDescription>
                  Join our anonymous, safe space for discussing health concerns.
                  Get emotional support and connect with other women.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of women who are already using SheAura to better
            understand their bodies and improve their health outcomes.
          </p>
          <Button size="lg" asChild className="text-lg px-8">
            <Link href="/auth">Start Your Journey Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                S
              </span>
            </div>
            <span className="font-bold text-xl text-primary">SheAura</span>
          </div>
          <p className="text-muted-foreground">
            Empowering women through intelligent health tracking and insights.
          </p>
        </div>
      </footer>
    </div>
  );
}
