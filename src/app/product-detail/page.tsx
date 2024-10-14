import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

// at the moment reviews take 4 sec to load thats why the route product-detail
// will take 4 sec to display product detail page
// the solution is suspence it can imediately shows fallback text and then loads component it also reduces response time

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>Product page loading.....</p>}>
        <Product />
      </Suspense>

      <Suspense fallback={<p>Reviews page loading....</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
