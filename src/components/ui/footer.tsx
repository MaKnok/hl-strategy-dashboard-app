import { Button } from "./button";

export default function Footer() {
  return (
    <footer className="w-full text-foreground py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm text-accent-foreground">
          Copyright &copy; {new Date().getFullYear()} Hidden Layer
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms of Use
          </Button>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </div>
      </div>
    </footer>
  );
}
