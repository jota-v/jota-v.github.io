import Inferno from 'inferno';
import { css, speedy } from 'glamor';
speedy(true)
// import NavBar from './../components/navbar/NavBar';

const Styles = css({
  color: 'pink',
  fontSize: 22
});

function Layout({ children }) {
  return <div className={`${Styles}`}>{ children }</div>
}

export default Layout;
