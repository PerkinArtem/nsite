import ProductsList from "../components/Products/ProductsList";

const Page = () => {
  return (
    <div className="container">
      <ProductsList columns={4} gap={6}/>
    </div>
  );
}

export default Page;