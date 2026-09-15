"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { Chrome, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff0a_1px,transparent_1px),linear-gradient(to_bottom,#00ffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)]" />
      <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-500/20 animate-ping [animation-duration:3s]" />
      <div className="absolute h-[350px] w-[350px] rounded-full border border-cyan-500/30" />

      <div className="relative z-10 bg-zinc-900/90 backdrop-blur-sm border border-cyan-500/20 mx-auto h-fit w-full max-w-sm rounded-lg shadow-[0_0_40px_rgba(0,255,255,0.1)]">
        <div className="p-8 pb-6">
          <div>
            <Link href={"/"} className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Fetchly logo" width={32} height={32} />
              <h1 className="text-2xl font-bold text-cyan-400">
                Fetch<span className="text-white">ly</span>
              </h1>
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold text-white">
              Sign in to Fetchly
            </h1>
            <p className="text-sm text-zinc-400">
              Welcome back! Sign in to continue to Fetchly
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <Button
              variant="outline"
              className="w-full bg-transparent  border-cyan-500/30 text-white hover:bg-cyan-500/10 hover:text-cyan-300"
              onClick={() =>
                signIn.social({ provider: "github", callbackURL: "/" })
              }
            >
              <Github className="mr-2 h-4 w-4" />
              Sign in with GitHub
            </Button>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3">
          <Button
  variant="outline"
  className="w-full bg-transparent border-cyan-500/30 text-white hover:bg-cyan-500/10 hover:text-cyan-300"
  onClick={() =>
    signIn.social({ provider: "google", callbackURL: "/" })
  }
>
  <Chrome className="mr-2 h-4 w-4" />
  Sign in with Google
</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;