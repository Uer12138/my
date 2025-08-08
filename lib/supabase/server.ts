import { createServerClient } from '@supabase/ssr';

export const createSupabaseServerClient = (cookies: any) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          cookies.set(name, value, options);
        },
        remove(name: string, options: any) {
          cookies.set(name, '', { ...options, maxAge: -1 });
        },
        getAll() {
          return Array.from(cookies.getAll?.() ?? []);
        },
        setAll(cookieList: any[]) {
          cookieList.forEach(({ name, value, options }) => {
            cookies.set(name, value, options);
          });
        },
      },
    }
  );
};