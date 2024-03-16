import type { PropsWithChildren } from "react";
import vkBridge, { parseURLSearchParamsForGetLaunchParams } from "@vkontakte/vk-bridge";
import { useAdaptivity, useAppearance, useInsets } from "@vkontakte/vk-bridge-react";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import "@vkontakte/vkui/dist/vkui.css";

import { transformVKBridgeAdaptivity } from "@/utils";
import { router } from "../routes";

export const VKProvider = ({ children }: PropsWithChildren) => {
    const vkBridgeAppearance = useAppearance() || undefined;
    const vkBridgeInsets = useInsets() || undefined;
    const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
    const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search);

    return (
        <ConfigProvider
            appearance={vkBridgeAppearance}
            platform={vk_platform === "desktop_web" ? "vkcom" : undefined}
            isWebView={vkBridge.isWebView()}
            hasCustomPanelHeaderAfter={true}
        >
            <AdaptivityProvider {...adaptivity}>
                <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
                    <RouterProvider router={router}>{children}</RouterProvider>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};
