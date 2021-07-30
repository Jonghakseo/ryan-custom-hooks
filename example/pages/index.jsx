import { toCamel } from '../lib/util';
import hookConfig from '../../ryan-custom-hooks/package.json';
import useToggle from "../../ryan-custom-hooks/src/useToggle";
import useMountFocus from "../../ryan-custom-hooks/src/useMountFocus";
import {useEffect} from "react";

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === 'string';

  const repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];

  const [ isOn, toggleOnOff, setToggle ] = useToggle(true)
  useMountFocus("target_input")

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
          simple state management of "true" / "false"
        </p>

        <p>toggle is {isOn ? "ON" : "OFF"}</p>
        <button onClick={toggleOnOff}>toggle</button>
        <button onClick={()=>setToggle(true)}>toggle on</button>
        <button onClick={()=>setToggle(false)}>toggle off</button>

        <h4>Examples</h4>
        <pre>
          <code>
{`const [ isOn, toggleOnOff, setToggle ] = useToggle(true)
// initial value is optional. default = false

<p>toggle is {isOn ? "ON" : "OFF"}</p>

<button onClick={toggleOnOff}>toggle</button>
<button onClick={()=>setToggle(true)}>toggle on</button>
<button onClick={()=>setToggle(false)}>toggle off</button>
`}
          </code>
        </pre>
        <br/>
        <h3>
          useMountFocus
        </h3>
        <p>
          element auto focus when components mounted
        </p>
        <input id="target_input" />

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

      </section>

      <footer>
        <p>
          Made by <a href={authorUrl}>{ authorName }</a>
        </p>
      </footer>
    </main>
  );

}