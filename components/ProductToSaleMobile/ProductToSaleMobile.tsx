import { useGlobalContext } from "../../context/GlobalContext"
import { RiDeleteBin7Fill } from "react-icons/ri";


interface Props {
  productToCart: ProductToCart[],
  totalAmountToCart: number,
}
const ProductToSaleMobile = ({ productToCart, totalAmountToCart }: Props) => {

  const { deleteProductCart } = useGlobalContext()
  return (
    <div className=" md:hidden w-full my-3">
      <ul className="grid grid-cols-1 gap-4 p-1">
        {
          productToCart &&
          productToCart.map((item, index) => {
            return (
              <li className="w-full bg-white p-2 rounded-md shadow-md">
                <div className="flex justify-between font-nunito  items-center">
                  <div className="flex gap-3">
                    <div className="rounded-full flex items-center justify-center bg-pink-600 text-white w-[20px] h-[20px]">
                      {index + 1}
                    </div>
                    <div className="text-slate-600 font-dmMono">
                      Cod: {item.code}
                    </div>
                  </div>
                  <div onClick={() => deleteProductCart(productToCart, item.code)} className='flex items-center justify-center cursor-pointer'>
                    <RiDeleteBin7Fill className="text-slate-700" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="capitalize text-slate-600">
                    {item.description}
                  </span>
                  <div className="text-green-600">
                    $ {item.price}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-blue-600">
                    stock: {item.stock}
                  </div>
                  <div className="text-blue-600 ">
                    cantidad: <span className="font-semibold">{item.amount}</span>
                  </div>
                </div>
                <div className="flex justify-between text-slate-600">
                  <div>Total :
                  </div>
                  <div>
                  {(Number(item.amount) * Number(item.price)).toFixed(2)}
                  </div>
                </div>
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}

export default ProductToSaleMobile