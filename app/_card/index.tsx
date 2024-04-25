"use client";

import constants from "@/util/constants";
import { useQuery } from "@tanstack/react-query";
import { Root } from "../page";

export default function Card() {
  const { isPending, error, data } = useQuery<Root>({
    queryKey: ["repoData"],

    queryFn: () =>
      fetch(
        `${constants.BASE_URL}/products?page=1&rows=10&sortBy=id&orderBy=ASC`
      ).then((res) => res.json()),
  });

  return <div>sla</div>;
}
