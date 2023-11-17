'use client';
import '@src/app/globals.css';
import { ReactNode } from 'react';
import { Provider } from "react-redux";
import { store } from "@src/app/store";
import { Header } from "@src/components/header";
import { Footer } from "@src/components/footer";
import { Loading } from "@src/components/loading";

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className="h-screen flex flex-col">
    <Provider store={store}>
      <Loading />
      <Header/>
      <main className="flex-1">
        {children}
      </main>
      <Footer/>
    </Provider>
    </body>
    </html>
  );
}
