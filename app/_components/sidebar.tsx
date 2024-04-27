"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Product } from "../page";
import classnames from "../page.module.scss";
import { montserrat } from "../layout";
import { CloseButton } from "./error";
import Item from "./item";

export type ItemWithAmount = Product & { amount: number };
export interface SidebarProps {
  isOpen: boolean;
  itens: ItemWithAmount[];
}

export default function Sidebar({
  addItem,
  setSidebar,
  ...sidebar
}: SidebarProps & {
  setSidebar: (s: SidebarProps) => void;
  addItem: (item: Product, amount: number) => void;
}) {
  return (
    <AnimatePresence>
      {sidebar.isOpen ? (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className={classnames["aside"] + " " + montserrat.className}
        >
          <div>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 20,
              }}
            >
              <h2 style={{ padding: "0px 10px" }}>Carrinho de Compras</h2>
              <span
                className={classnames["button"]}
                onClick={() => setSidebar({ ...sidebar, isOpen: false })}
                style={{ cursor: "pointer" }}
              >
                <CloseButton fill="#ffffff" stroke="hsl(180, 0%, 100%)" />
              </span>
            </span>
            <div className={classnames["itens-container"]}>
              {sidebar.itens.map((item) => {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    addItem={addItem}
                    removeItem={() =>
                      setSidebar({
                        ...sidebar,
                        itens: sidebar.itens.filter((i) => i.id != item.id),
                      })
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className={classnames["result"]}>
            <div className={classnames["total"]}>
              <span>Total: </span>
              <span>
                R$
                {sidebar.itens.reduce(
                  (current, acul) =>
                    current + acul.amount * parseFloat(acul.price),
                  0
                )}
              </span>
            </div>
            <button
              onClick={() =>
                alert(
                  `processando pagamento de R$${sidebar.itens.reduce(
                    (current, acul) =>
                      current + acul.amount * parseFloat(acul.price),
                    0
                  )}`
                )
              }
            >
              Finalizar compra
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
