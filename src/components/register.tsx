"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Login() {
  const form = useForm({
    defaultValues: {
      name: "",
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
        Create an Account
      </h3>
      <p className="text-center text-sm text-muted-foreground dark:text-muted-foreground">
        Please fill in the details below to create an account.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <Label
            htmlFor="name"
            className="text-sm font-medium text-foreground dark:text-foreground"
          >
            Full Name
          </Label>
          <Input
            type="text"
            id="name"
            autoComplete="name"
            placeholder="John Doe"
            className="mt-2"
            {...form.register("name", { required: true, minLength: 2, maxLength: 50 })}
          />
        </div>

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
            {...form.register("email", { required: true, pattern: /^\S+@\S+$/i, minLength: 5, maxLength: 100 })}
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
          Register
        </Button>
      </form>

      <p className="mt-6 text-sm text-muted-foreground dark:text-muted-foreground">
        Do you have an account?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-primary hover:text-primary/90 dark:text-primary dark:hover:text-primary/90"
        >
          Sign in
        </Link>
      </p>

    </>
  );
}
