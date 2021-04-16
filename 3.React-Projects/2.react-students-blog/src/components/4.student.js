import Button from './3.button'


function Student(props) {
  
  const age = () => {
    return Math.floor(Math.random() * 100 + 1);
  }

  return (
    <div className="card">
      <h1 style=
        {(props.isBlack) ?
        { color: 'black' } :
        { color: props.data.color }}>
        {props.data.firstName} {props.data.lastName}</h1> 
        
        <h3>Course: {props.data.course}</h3>
        
        <p>Email:{props.data.email}</p>
        
        <p>Age: {age()}</p>
        
        <Button click={props.toggleColor} buttonTitle="Toggle Name" />
    </div>
  );
}

export default Student;
