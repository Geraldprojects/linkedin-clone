import './InputOptions.css';

function inputOptions({Color,Icon, Title}) {
  return <div className="inputOption">

          <Icon style={{color:Color}}/>
          <h4>{Title}</h4>
  </div>;
}

export default inputOptions;
