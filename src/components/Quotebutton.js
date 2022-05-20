function Quotebutton({changequotes, randomColor, colors}) {
    return (
      <div className="bt">
        <button className="bat" onClick={changequotes} style={{background:colors[randomColor]}}> 
        <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    );
  }
  
export default Quotebutton;
  