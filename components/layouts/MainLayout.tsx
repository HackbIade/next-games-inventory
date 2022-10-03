import Head from "next/head";
import { AppNavbar } from "../ui";
import { MainLayoutProps } from "./types";

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "My games collection"}</title>
        <meta name="author" content="Ncodes" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content={`${title}, games, collection, collector, inventory`}
        />
        <meta name="description" content="Games Inventory to collectors" />
      </Head>
      <AppNavbar {...{ title }} />
      <main>{children}</main>
    </>
  );
};
