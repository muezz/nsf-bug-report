"use server";

import { actionClient } from "@/lib/safe-action";

export const signinWithGoogle = actionClient.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
});
