import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Image from "next/image";

export default async function HomePage() {

  const products = await getProducts({isFeatured : true});
  const billboard = await getBillboards("4bad2fcf-3137-47cd-97d1-b02f3917b6f3")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title = {"Featured Products"} items = {products}/>
      </div>
      
      </div>

    </Container>
  );
}
