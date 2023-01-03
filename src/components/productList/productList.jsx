import "./productList.css";
import Product from "../product/product";
import {products} from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
      <h1 className="pl-title">I miei progetti</h1>
        <p className="pl-desc">
          Qui sotto trovi alcuni dei progetti che ho realizzato.
        </p>

      </div>
      <div className="pl-list">
        {products.map((item)=>(
                  <Product key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc} tagHtml={item.tagHtml} tagCss={item.tagCss} tagJavascript={item.tagJavascript} tagReact={item.tagReact} tagFigma={item.figma} tagWordpress={item.wordpress} tagElementor={item.elementor} tagHotjar={item.hotjar} tagAdobe={item.adobe}/>
        ))}

      </div>
    </div>
  )
}

export default ProductList;