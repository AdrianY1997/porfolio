"use client";

import { Header } from "./header";
import { Providers } from "../../app/providers";
import { Footer } from "./footer";
import { useEffect } from "react";

type PageContentProps = {
  children: React.ReactNode;
};
export const PageContent = (props: PageContentProps) => {
  let instance: HTMLDivElement;

  const componentDivMount = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      function resizeMain() {
        const main = document.querySelector("main");
        const headerHeight = document.querySelector("header").clientHeight;
        const footerHeight = document.querySelector("footer").clientHeight;

        const height = headerHeight + footerHeight + 8;

        main.style.setProperty("min-height", "calc(100vh - " + height + "px");
      }
      resizeMain();
      window.addEventListener("resize", resizeMain);
    `;
    instance.appendChild(script);
  };

  useEffect(() => {
    componentDivMount();
  });

  return (
    <>
      <Header />
      <Providers>{props.children}</Providers>
      <Footer />
      <div ref={(el) => (instance = el!)}></div>
    </>
  );
};
