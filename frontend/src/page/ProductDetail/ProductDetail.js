import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetail.css"
import { getProducts, productDetails } from "../../productredux/productaction";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";


const ProductDetail=()=>{
  const navigate = useNavigate();
    const dispatch = useDispatch();
      const products = useSelector((state) => state.productGetReducer.products);
      const { id } = useParams();
      const [qty,setQty]= useState(1);
    console.log("ena el products" + products);
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch ]);
    console.table(products)
    const product = products.find((p) => p._id === id);
console.table(product);
console.log(id);
const addtoCart=()=>{

  navigate(`/cart/${id}?qty=${qty}`)
}
    return (
        <>
         {product ? (<body className="bodydetail">
        <div class="containerdetail">
  <div class="images">
  <img className="imgdetail" src={`${process.env.PUBLIC_URL}/images/${product.imageProduct}`} />
  </div>
  <div class="product1"> 
  
    <p className="pdetail"> {product.category}- by {product?.user?.firstName} {product?.user?.lastName}</p>
    <h1 className="h1detail">{product.productName}</h1>
    <h2 className="h2detail">{product.price} Dt </h2>
    <p class="desc pdetail">{product.description}.</p>

    <div class="buttons">

   <h2 className="stock">{product.countInStock> 0 ? product.countInStock+' items left in stock ': 'OUT OF STOCK' } </h2>
    {product.countInStock> 0 ? (
     <><Form.Control required as='select' value={qty} onChange={(e)=>setQty(e.target.value)}>{[
      ...Array(product.countInStock).keys()].map(x=>(<option key={x+1} value={x+1}>{x+1}</option>))}
    </Form.Control><button onClick={addtoCart}className="add">Add to Cart</button><button className="like"><span>♥</span></button></>  ): ''}
      
    </div>
  </div>
</div>

</body>  ) : (
        <p>No product found</p>
      )} </>
    )
}
export default ProductDetail;