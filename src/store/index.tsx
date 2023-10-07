"use client";
import { rootStore, AsyncStorage, DevInspectorPlugin, DevTool, helper, StoragePlugin, ThemePlugin, } from "@dappworks/kit";
import { signIn } from "next-auth/react";
import { Project } from "./project";

export const init = () => {
  if (helper.env.isBrowser()) {
    rootStore.addStores([
      new DevTool({
        disabled: process.env.NODE_ENV != "development",
      }),
      new StoragePlugin(),
      new AsyncStorage(),
      new DevInspectorPlugin({ disabled: process.env.NODE_ENV != "development" }),
      new ThemePlugin(),
      new Project(),
    ]);

    if (process.env.NODE_ENV == "development") {
      rootStore.events.on("*", console.log);
    }

    rootStore.events.on("next.signIn.github", () => {
      signIn("github");
    });
  }
}
