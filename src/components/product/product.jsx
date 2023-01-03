import "./product.css";

const Product = ({img,link,title,desc,tagHtml,tagCss,tagJavascript,tagReact}) => {

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      <div className="title">
      <p>{title}</p></div>
      <p>{desc}</p>
      <div className="tagContainer">
      {tagHtml && <p className="tag tagHtml">{tagHtml}</p>}
      {tagCss && <p className="tag tagCss">{tagCss}</p>}
      {tagJavascript && <p className="tag tagJavascript">{tagJavascript}</p>}
      {tagReact && <p className="tag tagReact">{tagReact}</p>}
      </div>
    </div>
  )
}

export default Product