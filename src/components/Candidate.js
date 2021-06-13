import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

function Candidate( { candidate }) {

    const [count, setCount] = useState(0)


      
        let room = null

       !!candidate.room? room = candidate.room.name : room = "Completed"

        return(
            <Card>
                <Card.Body>{candidate.number} | {candidate.name} | {room} | <Button onClick={() => setCount(count + 1)}>+ {count}</Button></Card.Body>
            </Card>
        )
}

export default Candidate

// import React, { useState } from 'react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
