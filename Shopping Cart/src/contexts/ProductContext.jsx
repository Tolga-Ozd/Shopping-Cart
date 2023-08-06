const { createContext } = require("react");

const PorductContext = createContext()

const ProductProvider = () => {
  return (
    <div>ProductContext</div>
  )
}

export default ProductContext