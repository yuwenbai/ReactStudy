import React , { useRef, useEffect }from "react";
import "./css/About.css";
import history from './Route'
function About() {
  useEffect(()=>{
    console.log('About userEffect')
    console.log('About', history)
}, [])
  function handleSubmit(e) {
    console.log("handleSubmit ", e);
    e.preventDefault();
    alert("Hello, world!");
    // history.push('/home')
  }
  return (
    <div className="body">
      <header className="About-header">
        <h1 className="center">This heading will be center-aligned</h1>
        {/* <form onSubmit={handleSubmit}>
          <input type="submit" value="提交" />
        </form> */}

        <button type="button" onClick={()=>alert('hi')}
          >
          Say hi!
        </button>

        <div id="outer">
          <div id="inner">
            some text. some text. some text.
            <p>this is a paragragh.</p>
          </div>
        </div>

        <p id="red">这个段落是红色。</p>
        <p id="green">这个段落是绿色。</p>
        <p>
          The strongly emphasized word in this paragraph is<strong>red</strong>.
        </p>
        <h1>This subhead is also red.</h1>
        <h2>This subhead is also red.</h2>
        <h2>
          The strongly emphasized word in this subhead is<strong>blue</strong>.
        </h2>
        <h1>i am about </h1>
        <p>
          <strong>
            我是粗体字，不是斜体字，因为我不在列表当中，所以这个规则对我不起作用
          </strong>
        </p>

        {/* <ol> */}
        <li>
          <strong>我就是斜体字。这是因为 strong 元素位于 li 元素内。</strong>
        </li>
        <li>我是111正常的字体。</li>
        {/* </ol> */}

        <p className="spread"> This is some spread text. This is some text </p>
      </header>
      {/* <body> */}
      <ul>
        <li>项目一</li>
        <li className="special">项目二</li>
        <li>
          项目 <em>三</em>
        </li>
      </ul>

      <p>
        This is a paragraph of text. In the text is a <span>span element</span>
        and also a <a href="http://example.com">link</a>.
      </p>

      <p className="special"> what color am i ???</p>
      <div className="outer">
        <div className="box">The inner box is 90% - 30px.</div>
      </div>
      {/* </body> */}

      <div className='radius'>
        <h4 className='textEffect'>
        这个矩形有圆角哦
          </h4> 
      </div>
      <p className="spread"> body part </p>
    </div>
  );
}

export default About;
