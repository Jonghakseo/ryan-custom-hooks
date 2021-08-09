import { toCamel } from '../lib/util';
import hookConfig from '../../ryan-custom-hooks/package.json';
import useToggle from "../../ryan-custom-hooks/src/useToggle";
import useMountFocus from "../../ryan-custom-hooks/src/useMountFocus";
import useFocusBlur from "../../ryan-custom-hooks/src/useFocusBlur";
import useDidMount from "../../ryan-custom-hooks/src/useDidMount";
import useScrollIntoView from "../../ryan-custom-hooks/src/useScrollIntoView";
import useLocalstorage from "../../ryan-custom-hooks/src/useLocalStorage";
import useStepHandler from "../../ryan-custom-hooks/src/useStepHandler";

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === 'string';

  const repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];

  const [ isOn, toggle ] = useToggle(true);

  useMountFocus("target_input")

  const isFocused = useFocusBlur("focus_area")

  useDidMount(()=>{
    document.body.style.background = '#cbc5c5'
  })

  const { scrollYIntoView, scrollXIntoView } = useScrollIntoView()

  const [key, setKey, remove] = useLocalstorage("data_sample",10)

  const steps = [
    {key: 1, value: <div>1</div>},
    {key: 2, value: <div>2</div>},
    {key: 3, value: <div>3</div>}
  ]

  const [handler, render] = useStepHandler(steps, 1)
  console.log(handler.now,render())
  return (
    <main>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

        footer p {
          font-size: .9em;
        }

        footer p,
        footer a {
          color: #546e7a;
        }
      `}</style>

      <section>

        <h1>{ toCamel(name) }</h1>
        <p>{ description }</p>

        { repositoryExists && (
          <p>
            <a href={repositoryUrl}>
              { repositoryUrlDisplay }
            </a>
          </p>
        )}

        <h2>How to use</h2>

        <h3>
          useToggle
        </h3>

        <p>
          Simple state management of "true" / "false"
        </p>

        {/*<p>toggle is {isOn ? "ON" : "OFF"}</p>*/}
        {/*<button onClick={toggle}>toggle</button>*/}
        {/*<button onClick={toggle.on}>toggle on</button>*/}
        {/*<button onClick={toggle.off}>toggle off</button>*/}

        <h4>Examples</h4>
        <pre>
          <code>
{`const [ isOn, toggle ] = useToggle(true)
// initial value is optional. default = false

<p>toggle is {isOn ? "ON" : "OFF"}</p>

<button onClick={toggle}>toggle</button>
<button onClick={toggle.on}>toggle on</button>
<button onClick={toggle.off}>toggle off</button>
`}
          </code>
        </pre>
        <br/>
        <h3>
          useMountFocus
        </h3>
        <p>
          Element auto focus when components mounted
        </p>
        {/*<input id="target_input" />*/}

        <h4>Examples</h4>
        <pre>
          <code>
{`const targetRef = useRef(null)

// INPUT (targetId:string or ref:React.MutableRefObject)
useMountFocus("target_input") // or targetRef

<input id="target_input" /> // or <input ref={targetRef}/>
`}
          </code>
        </pre>
        <br/>
        <h3>
          useFocusBlur
        </h3>
        <p>
          Determine if a reference is in focus or blur
        </p>
        {/*<span>{isFocused ? "Focus" : "Blur"}</span>*/}
        {/*<div style={{ background:"grey" }} id={"focus_area"}>focus area</div>*/}
        <h4>Examples</h4>
        <pre>
          <code>
{`const isFocused = useFocusBlur("focus_area")

// INPUT (targetId:string or ref:React.MutableRefObject)
useFocusBlur("focus_area") // or targetRef

<div id="focus_area" /> // or Any DOM Element 
`}
          </code>
        </pre>
        <br/>
        <h3>
          useDidMount
        </h3>
        <p>
          Callback function that works at the same time as the mount
        </p>
        {/*<div style={{ background:"grey" }} id={"focus_area"}>focus area</div>*/}
        <h4>Examples</h4>
        <pre>
          <code>
{`useDidMount(()=>{
    document.body.style.background = '#cbc5c5'
})
`}
          </code>
        </pre>
        <br/>
        <h3>
          useScrollIntoView
        </h3>
        <p>
          Automatic scrolling to the position of an element within a view
        </p>
        {/*<div style={{ background:"grey" }} id={"focus_area"}>focus area</div>*/}
        <h4>Examples</h4>

        {/*<button onClick={()=>scrollXIntoView("target_x")}>Scroll X into View</button>*/}
        {/*<button onClick={()=>scrollYIntoView("target_y")}>Scroll Y into View</button>*/}
        {/*<div style={{width:'300px', height:"300px", background:"white", overflow:"auto", display:"flex"}}>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"red"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"green"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"blue"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"orange"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"red"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"green"}} id={"target_x"}>target_x</div>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"blue"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"orange"}}/>*/}
        {/*</div>*/}
        {/*<div style={{width:'300px', height:"300px", background:"white", overflow:"auto", display:"block"}}>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"red"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"green"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"blue"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"orange"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"red"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"green"}}/>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"blue"}} id={"target_y"}>target_y</div>*/}
        {/*  <div style={{minWidth:'200px', minHeight:"200px", background:"orange"}}/>*/}
        {/*</div>*/}
        <pre>
          <code>
{`const { scrollYIntoView } = useScrollIntoView()

// INPUT (targetId:string or ref:React.MutableRefObject)
<button onClick={() => scrollYIntoView("target_x")}>Scroll X into View</button>

<Container>
    <Item/>
    <Item/>
    <Item>target_x</Item>
    <Item/>
</Container>
`}
          </code>
        </pre>
        <br/>
        <h3>
          useLocalStorage
        </h3>
        <p>
         Hook to manage local storage items
        </p>
        {/*<span>{isFocused ? "Focus" : "Blur"}</span>*/}
        {/*<div style={{ background:"grey" }} id={"focus_area"}>focus area</div>*/}
        <h4>Examples</h4>
        <pre>
          <code>
{`const [data, setData, reset] = useLocalStorage("local_data", { data: "initData" })`}
          </code>
        </pre>
        <br/>
        <h3>
          useStepHandler
        </h3>
        <p>
         Hook to make easy step handling
        </p>
        {/*<span>{isFocused ? "Focus" : "Blur"}</span>*/}
        {/*<div style={{ background:"grey" }} id={"focus_area"}>focus area</div>*/}
        <h4>Examples</h4>
        <pre>
          <code>
{`const [data, setData, reset] = useLocalStorage("local_data", { data: "initData" })`}
          </code>
        </pre>


      </section>
      <footer>
        <p>
          Made by <a href={authorUrl}>{ authorName }</a>
        </p>
      </footer>
    </main>
  );

}
