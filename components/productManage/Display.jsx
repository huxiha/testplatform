
import ShowProduct from './ShowProduct';

const Display = ({products, searchedName, searchedVersion, showDetails, setShowdetails}) => {

    let productList = products;
    productList = searchedVersion? productList.filter((product) => {return product.productVersion === searchedVersion}) : productList;
    productList = searchedName? productList.filter((product) => {return product.productName.includes(searchedName)}) : productList;

    

    return (

        <div>
            {
                productList.map((product) => (
                    <ShowProduct product={product} showDetails={showDetails} setShowdetails={setShowdetails}/>
                ))
                
            }
        </div>
        
     );
}
 
export default Display;