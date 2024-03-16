import { createRoot } from "react-dom/client";
import vkBridge from "@vkontakte/vk-bridge";
import { AppProvider } from "@/app/providers";

vkBridge.send("VKWebAppInit");

createRoot(document.getElementById("root")!).render(<AppProvider />);

if (import.meta.env.MODE === "development") {
    import("@/app/eruda");
}
