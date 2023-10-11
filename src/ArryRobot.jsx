import './task.css'
export function ArryRobot(){

    const users = [
        {
          id:1,
          name:'robot',
          image:'https://robohash.org/user1'
      },
      {
        id:2,
        name:'robot',
        image:'https://robohash.org/user2'
    },
    {
      id:3,
      name:'robot',
      image:'https://robohash.org/user3'
    },
    {
      id:4,
      name:'robot',
      image:'https://robohash.org/user4'
    },
    {
      id:5,
      name:'robot',
      image:'https://robohash.org/user5'
    },
    {
      id:6,
      name:'robot',
      image:'https://robohash.org/user6'
    },
    {
      id:7,
      name:'robot',
      image:'https://robohash.org/user7'
    },
    {
        id:8,
        name:'robot',
        image:'https://robohash.org/user8'
      }
  ]

  return(
    <div className="box-robots">
   {users.map((user, index) => {
        return (
        <div className='box-robot' key={index}>
            <h1>{index+1} {user.name}</h1>
            <img src={user.image} />
          </div>)
            
        
       })} 
       </div>
  )

}