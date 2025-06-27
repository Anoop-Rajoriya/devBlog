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
import { Container, Loader } from "@/components";
import { Link } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/auth/useLogin";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

function LoginPage() {
  // Form validation with react-hook-form and shadcn-ui-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission using custom hook (useLogin())
  const { login, loading, error } = useLogin();

  const onSubmit = async (userDetails: z.infer<typeof formSchema>) => {
    await login(userDetails);
    form.reset();
  };

  return (
    <Container className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-xl md:text-2xl font-bold">
            Login you account
          </CardTitle>
          <CardDescription className="text-center">
            Enter following details bellow to login you account.
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
                className="font-semibold"
                type="submit"
                disabled={loading}
              >
                Login
                {loading && (
                  <Loader className="text-primary-foreground" size={4} />
                )}
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
              Don't have an account?
              <Link to="/register" className="cursor-pointer underline px-2">
                Register
              </Link>
            </p>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
}

export default LoginPage;
