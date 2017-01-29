import Inferno from 'inferno';
import { css, speedy } from 'glamor';
speedy(true)
// import NavBar from './../components/navbar/NavBar';

let rule = css({
  color: 'pink'
});

function Layout({ children }) {
  return <div className={`${rule}`}>hola { children }</div>
}

export default Layout;
