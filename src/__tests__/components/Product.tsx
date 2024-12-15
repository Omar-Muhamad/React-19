import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import ProductCard from "@/_components/ProductCard";

describe("Page", () => {
  const mockProduct = {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  };

  it("renders a heading", async () => {
    render(<ProductCard product={mockProduct} />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it("renders the product information", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProduct.image);
    expect(image).toHaveAttribute("alt", mockProduct.title);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} $`)).toBeInTheDocument();
  });
});
