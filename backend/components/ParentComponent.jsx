import Aside from './Aside';
import Header from './Header';

function ParentComponent(props) {
  return (
    <div>
      <Header handleClickAsideOpen={props.appAsideOpen} />
      <Aside
        handleAsideOpen={props.appOpen}
        handleClickAsideOpen={props.appAsideOpen}
      />
    </div>
  );
}

export default ParentComponent;
