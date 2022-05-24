import type { NextPage, NextPageWithLayout } from "next";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";

declare module "next" {
    type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
        getLayout?: (page: ReactElement) => ReactElement;
    };
    type NextPageWithDefaultLayout = NextPageWithLayout & {
        subTitle: string;
    };
}

declare module "next/app" {
    type AppPropsWithLayout<P = {}> = AppProps<P> & {
        Component: NextPageWithDefaultLayout<P>;
    };
}
