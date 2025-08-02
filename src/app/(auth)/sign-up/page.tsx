"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
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
import Link from "next/link";

export const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

const signUpFormSchema = z
  .object({
    username: z.string().min(5, "Username must be at least 5 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().refine((value) => strongPasswordRegex.test(value), {
      message:
        "Password must be at least 8 characters and include a number, a special character, an uppercase and a lowercase letter.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type SignUpForm = z.infer<typeof signUpFormSchema>;

function onSubmit(values: SignUpForm) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

export default function SignUpPage() {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-1 flex justify-center items-center px-4">
        <Card className="w-full md:w-[650px] lg:w-[1008px] mx-auto">
          <CardHeader className="space-y-2 text-left items-start">
            <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 aspect-[162/74]">
              <Link href="/">
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
              </Link>
            </div>

            <CardTitle className="font-semibold mt-6 sm:mt-9 md:mt-11 lg:mt-12 text-xl md:text-2xl lg:text-3xl">
              Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-col md:flex-row mt-6 md:mt-9 lg:mt-10 md:gap-8">
            <div className="flex flex-col md:w-full gap-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 md:grid grid-cols-2 gap-x-6"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User name*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your user name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm password*</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    className="w-full mt-5"
                    type="submit"
                    disabled={
                      !form.formState.isValid || form.formState.isSubmitting
                    }
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 md:flex-row">
            <Button variant="linklogin" size="link">
              <Link href="/">Login</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
