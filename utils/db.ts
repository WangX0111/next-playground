export async function getUserFromDb(email: string, pwHash: string) {
   return {
      email,
      pwHash,
   };
}