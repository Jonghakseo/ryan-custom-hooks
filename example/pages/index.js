import { toCamel } from '../lib/util';

import hookConfig from '../../ryan-custom-hooks/package.json';
import { useMountFocus, useToggle } from "../../ryan-custom-hooks/src/index";

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === 'string';

  const repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];

  useMountFocus("input")
  const [ isBlack, toggleWB ] = useToggle(true)


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

        <h4>Examples</h4>
        <pre>
          <code>
{`const defalutValue = true; // optional

const [ isRyan, toggleRyan, setRyan ] = useToggle(defalutValue);

toggleRyan // === setRyan((prev) => !prev)
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

        <h4>Examples</h4>
        <pre>
          <code>
{`const targetRef = useRef(null)

// input targetId:string or ref:React.MutableRefObject
useMountFocus("target"); // or targetRef

return <input id="target" ref={targetRef}/>
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