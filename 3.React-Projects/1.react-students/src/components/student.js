function Student(props) {
  return (
  
    // 1. Hardcoded
    // <div className='card'> 
    //   <h1>Martin Randolph</h1>
    //   <h3>Course: Frontend</h3>
    //   <p>Email: martin.randolph@gmail.com</p>
    // </div> 

    
    // 2. Works with method 2.1 and 2.2 in list.js
    // <div className="card">
    //   <h1>{props.firstName} {props.lastName}</h1>
    //   <h3>Course: {props.course}</h3>
    //   <p>Email:{props.email}</p>
    //   <p>Age: {props.age}</p>
    // </div>

    // Works with method 3 in list.js
     <div className="card">
        <h1>{props.data.firstName} {props.data.lastName}</h1>
        <h3>Course: {props.data.course}</h3>
        <p>Email:{props.data.email}</p>
        <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;