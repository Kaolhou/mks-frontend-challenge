"use client";
import constants from "@/util/constants";
import { useQuery } from "@tanstack/react-query";
import { Product, Root } from "../page";
import Card from "./card";
import classnames from "../page.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ErrorRenderer from "./error";
import Header from "./header";
import Sidebar, { SidebarProps } from "./sidebar";

export default function Container() {
  const [errorNotification, setErrorNotification] = useState("");
  const [sidebar, setSidebar] = useState<SidebarProps>({
    isOpen: false,
    itens: [],
  });
  const toggleSidebar = (prevent = false) =>
    prevent
      ? setSidebar((prev) => ({ ...prev, isOpen: prev.isOpen || !prev.isOpen }))
      : setSidebar((prev) => ({ ...prev, isOpen: !prev.isOpen }));

  const addItem = (item: Product, amount: number) => {
    const index = sidebar.itens.findIndex((i) => i.id == item.id);
    let newItens;
    if (index === -1) {
      newItens = [...sidebar.itens, { ...item, amount: amount }];
    } else {
      newItens = [...sidebar.itens];
      newItens[index] = {
        ...newItens[index],
        amount: newItens[index].amount + amount,
      };
    }

    setSidebar({ ...sidebar, itens: newItens.filter((i) => i.amount != 0) });
  };
  const { isPending, error, data } = useQuery<Root>({
    queryKey: ["repoData"],

    queryFn: async () => {
      const data = await fetch(
        `${constants.BASE_URL}/products?page=1&rows=${constants.AMOUNT_OF_ITENS}&sortBy=id&orderBy=ASC`
      );
      const result = await data.json();
      if (data.status !== 200) {
        setErrorNotification(result.message);
        throw new Error(result.message);
      }
      return result;
    },
    retry: false,
  });

  return (
    <>
      <Header
        onClick={() => toggleSidebar(true)}
        amount={sidebar.itens.reduce((prev, cur) => prev + cur.amount, 0)}
      />
      <Sidebar {...sidebar} setSidebar={setSidebar} addItem={addItem} />

      <div className={classnames["container"]}>
        <AnimatePresence initial={false}>
          {errorNotification ? (
            <ErrorRenderer
              message={error?.message}
              setErrorNotification={setErrorNotification}
            />
          ) : null}
        </AnimatePresence>
        {isPending || error
          ? Array.from({ length: 8 }).map((_, i) => <div key={i}>{i}</div>)
          : data?.products.map((i) => (
              <Card
                {...i}
                key={i.id}
                toggleSidebar={toggleSidebar}
                addItem={addItem}
              />
            ))}
      </div>
    </>
  );
}
