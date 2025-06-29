import logo from './logo.svg';
import './App.css';
import Chai from './chai';

function App() {
return (
  <>
    <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
      <a class="navbar-brand" href="#">App</a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading1">First</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading2">Second</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
            <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
      <h4 id="scrollspyHeading1">First heading</h4>
      <p>...This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
      <h4 id="scrollspyHeading2">Second heading</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
      <h4 id="scrollspyHeading3">Third heading</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
      <h4 id="scrollspyHeading4">Fourth heading</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="scrollspyHeading5">Fifth heading</h4>
      <p>.This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting...</p>
    </div>
    <div>
      <h1>Hello, world! | SHREYAS RANJAN</h1>
    </div>

    
<Chai/>


  </>
  
);

}

export default App;
