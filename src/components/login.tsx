"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h3 className="text-center text-lg font-semibold text-foreground dark:text-foreground">
        Welcome Back
      </h3>
      <p className="text-center text-sm text-muted-foreground dark:text-muted-foreground">
        Enter your credentials to access your account.
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground dark:text-foreground"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="ephraim@blocks.so"
            className="mt-2"
            {...form.register("email", { required: true })}
          />
        </div>

        <div>
          <Label
            htmlFor="password"
            className="text-sm font-medium text-foreground dark:text-foreground"
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            autoComplete="password"
            placeholder="**************"
            className="mt-2"
            {...form.register("password", { required: true, minLength: 6, maxLength: 32 })}
          />
        </div>
        <Button type="submit" className="mt-4 w-full py-2 font-medium">
          Sign in
        </Button>
      </form>

      <p className="mt-6 text-sm text-muted-foreground dark:text-muted-foreground">
        Do you have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-primary hover:text-primary/90 dark:text-primary dark:hover:text-primary/90"
        >
          Register
        </Link>
      </p>
    </>
  );
}
