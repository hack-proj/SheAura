import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-pink-400 font-bold">SheAura</h1>
      <Button>Click</Button>
      <UserButton/>
      <ModeToggle/>
    </div>
  );
}
