import Student from './student'
import studentsListData from '../data/students-list'


function List() {
    return (
        <div>
            {/* 1. Hardcoded */}
            {/* 
            <Student firstName="Luca" lastName="Toma" course="HTML" email="nume@gmail.com" />
            <Student firstName ="Andrei" lastName = "Tom" course ="HTML" email = "nume@gmail.com"/> 
            */}
            
            
            {/* 2. Loop on students - pass each field of object */}
            {/* studentsListData.map( (dateStudent) =>
            (
                <Student firstName = {dateStudent.firstName} lastName = {dateStudent.lastName} course = {dateStudent.course} email = {dateStudent.email} age = '23'/>
            )) */}
    
            
            {/* 3. Pass whole object */}
            {
                studentsListData.map( (dateStudent) =>
                (
                    <Student data = {dateStudent} age='23'/>
                )
                )
            }
    </div>
)
}

export default List;