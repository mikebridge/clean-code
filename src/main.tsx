import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <div>
      <h1>Same Interface, Different Implementation</h1>
      <ul>
        <li><Link to="./di1" relative="path">Simple Version</Link></li>
        <li><Link to="./di2" relative="path">Presentation vs. Container</Link></li>
        <li><Link to="./di3" relative="path">Extract Hook</Link></li>
        <li><Link to="./di4" relative="path">Create a Service</Link></li>
        <li><Link to="./di4" relative="path">Dependency Inject<sup>*</sup> Service</Link></li>
      </ul>
      <div>
        <p><sup>*</sup> technically, useComicLoader uses the <a rel="noreferrer" target="_blank" aria-label="Service Locator" href={"https://martinfowler.com/articles/injection.html#UsingAServiceLocator"}>Service Locator</a> pattern.</p>
      </div>
    </div>
  )
}