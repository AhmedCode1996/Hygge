/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";

import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

import { getCategories, getProducts } from "../../services/apiCall";

const Products = () => {
  const { isLoading, isError, data, status, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log(data);

  return <div>Products</div>;
};

export default Products;
