function Product(props){
     const productObj = props.productObj;

    return(
        <div className="shadow-2xl p-5">
            <h2 className="text-2xl">{productObj.title}</h2>
            <img src={productObj.image} alt={productObj.title}/>
            <p className="font-bold">{productObj.price}</p>
            <p className="font-bold">{productObj.description}</p>
        </div>
    )
}

export default Product;