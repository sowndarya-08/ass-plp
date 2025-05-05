import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get('https://fakestoreapi.com/products');
  return { props: { products: res.data } };
}

export default function Home({ products }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
