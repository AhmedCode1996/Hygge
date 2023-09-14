export const getProducts = async () => {
  try {
    const res = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const data = await res.json();
    if (res.ok) return data;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export const getCategories = async () => {
  const res = await getProducts();
  const categoryData = res.map((product) => product.category);
  const uniqueValues = [...new Set(categoryData)];
  const data = uniqueValues.filter(
    (value) => value !== null && value !== undefined && value.length !== 0
  );
  return data;
};
