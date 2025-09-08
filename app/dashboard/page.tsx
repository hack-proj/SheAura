import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, TrendingUp, Heart, Bell, Plus } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">Here&apos;s your health summary for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Cycle Day</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">Day 14</div>
              <p className="text-xs text-muted-foreground">Ovulation predicted</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Symptoms Tracked</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Health Score</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Good</div>
              <p className="text-xs text-muted-foreground">Based on patterns</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Period</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 days</div>
              <p className="text-xs text-muted-foreground">Estimated</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Tracking */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Today&apos;s Tracking</CardTitle>
              <CardDescription>Record your symptoms and feelings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Symptom
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Physical</h4>
                    <p className="text-sm text-muted-foreground">Cramps, headache, fatigue</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Emotional</h4>
                    <p className="text-sm text-muted-foreground">Mood, energy, stress</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>Personalized health patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Pattern Detected</h4>
                  <p className="text-xs text-muted-foreground">
                    You tend to experience mild headaches 2-3 days before your period
                  </p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Recommendation</h4>
                  <p className="text-xs text-muted-foreground">Consider tracking sleep quality during this phase</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your health tracking history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">Mild cramps recorded</p>
                  <p className="text-sm text-muted-foreground">Yesterday, 2:30 PM</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">Period ended</p>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-secondary" />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">High energy level</p>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
