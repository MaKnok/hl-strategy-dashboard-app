"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().refine((value) => strongPasswordRegex.test(value), {
    message:
      "Password must be at least 8 characters and include a number, a special character, an uppercase and a lowercase letter.",
  }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

function onSubmit(values: LoginForm) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

export default function LoginPage() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-1 flex justify-center items-center px-4">
        <Card className="w-full max-w-md md:max-w-lg">
          <CardHeader className="space-y-2 text-left items-start">
            <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 aspect-[162/74]">
              <Image
                src="/hiddenlaier.svg"
                alt="Hidden Laier"
                fill
                sizes="(max-width: 640px) 128px,
                (max-width: 768px) 144px,
                (max-width: 1024px) 160px,
                192px"
                className="object-contain"
                priority
              />
            </div>

            <CardTitle className="font-semibold mt-6 sm:mt-9 md:mt-11 lg:mt-12 text-xl md:text-2xl lg:text-3xl">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-col mt-6 md:mt-9 lg:mt-10">
            <div className="flex flex-col gap-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your e-mail address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password*</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" type="submit">
                    Sign in
                  </Button>
                </form>
              </Form>
              <Button className="w-full">Sign in with SSO</Button>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full">
                Sign in with Google
              </Button>
              <Button variant="outline" className="w-full">
                Sign in with Microsoft
              </Button>
              <Button variant="outline" className="w-full">
                Sign in with LinkedIn
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button variant="link">
              Don&apos;t have an account? Register here!
            </Button>
            <Button variant="link">I forgot my password</Button>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
