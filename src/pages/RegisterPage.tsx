import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

import { Link } from "react-router";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useRegister from "@/hooks/auth/useRegister";
import { Loader } from "@/components";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),

  email: z.string().email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

function RegisterPage() {
  // Form validation using react-hook-form with shadcn-ui-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  // Form data submision with custom hook (useRegister())
  const { register, loading, error } = useRegister();
  const onSubmit = async (userDetails: z.infer<typeof formSchema>) => {
    await register(userDetails);
    form.reset();
  };

  return (
    <Container className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <CardTitle className="text-xl md:text-2xl font-semibold">
            Register Your Account
          </CardTitle>
          <CardDescription className="text-center">
            Enter following details bellow to register you account.
          </CardDescription>
          {error && (
            <p className="text-destructive capitalize text-center">{error}</p>
          )}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 px-3"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="User name"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="User email"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="User password"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full font-semibold flex items-center justify-center gap-3"
                disabled={loading}
              >
                Register
                {loading && <Loader className="text-primary-foreground" size={4} />}
              </Button>
            </form>
          </Form>
          <Container className="flex-col gap-4 mt-2">
            <Button
              variant="outline"
              className="font-semibold"
              disabled={loading}
            >
              Continue with Google
            </Button>
            <p className="w-full text-center text-sm md:text-base">
              Do have an account?
              <Link to="/login" className="cursor-pointer underline px-2">
                Log in
              </Link>
            </p>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegisterPage;
