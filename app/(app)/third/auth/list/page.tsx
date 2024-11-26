
// import { createClient } from '@/utils/supabase/server';
import {auth,signIn,signOut} from "@/auth";

export default async function ListFromSupabase() {
    const session = await auth()
 
    if (!session?.user) {

        return (
            <div>
            <h1>You are not logged in</h1>
            <form
                action={async () => {
                "use server"
                await signIn()
                }}
            >
                <button type="submit">Sign in</button>
            </form>
            </div>
        )
    }
   
    return (
      <div>
        <h1>You are logged in</h1>
        <form
            action={async () => {
            "use server"
            await signOut()
            }}
        >
            <button type="submit">Sign out</button>
        </form>
      </div>
    )
};