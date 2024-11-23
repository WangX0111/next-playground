import { createClient } from '@/utils/supabase/server';

export default async function ListFromSupabase() {
  const supabase = await createClient();
  const { data: list } = await supabase.from("prompts").select();

  return <pre>{JSON.stringify(list, null, 2)}</pre>
}