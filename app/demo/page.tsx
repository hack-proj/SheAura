import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Play, ArrowLeft } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">See SheAura in Action</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Watch our comprehensive demo to understand how SheAura can transform your health tracking experience.
            </p>
          </div>

          {/* Video Player Placeholder */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Play className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Demo Video Coming Soon</h3>
                  <p className="text-muted-foreground">Our comprehensive product demo will be available shortly</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>What You&apos;ll See</CardTitle>
                <CardDescription>Our demo covers all the key features that make SheAura special</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    Symptom tracking interface
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    AI insights dashboard
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    Period prediction calendar
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    Health pattern analysis
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    Community features
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
                <CardDescription>Don&apos;t wait - start your health journey today</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join thousands of women who are already using SheAura to better understand their bodies and improve
                  their health outcomes.
                </p>
                <Button asChild className="w-full">
                  <Link href="/auth">Create Your Account</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
