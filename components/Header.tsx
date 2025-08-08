import Link from "next/link";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AuthDialog } from "./AuthDialog";
import { Button } from "./ui/button";

export default async function Header() {
  const supabase = createSupabaseServerClient(cookies());
  const { data: { session } } = await supabase.auth.getSession();
  const user = session?.user;

  async function handleSignOut() {
    "use server";
    const supabase = createSupabaseServerClient(cookies());
    await supabase.auth.signOut();
  }

  return (
    <header className="w-full bg-[#181825] border-b border-[#232336] text-white shadow-md">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-xl font-bold tracking-widest text-cyan-400 drop-shadow-cyberpunk">cyber-seed.dev</Link>
        <div>
          {user ? (
            <form action={handleSignOut} className="flex items-center gap-4">
              <span className="text-sm text-cyan-300">{user.email}</span>
              <Button type="submit" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-900/30">登出</Button>
            </form>
          ) : (
            <AuthDialog />
          )}
        </div>
      </nav>
    </header>
  );
}