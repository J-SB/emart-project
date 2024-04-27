const MySQLClient = require('./dbConnection')

const login = (req, res, next)=>{
    const data =  request.body;
    const username = data.username;
    const password = data.password;

    const sql = `SELECT * FROM user where username = ? ;`;

    const connection = MySQLClient.db
    connection.query(sql, [username], (err, result, fields)=>{
        if(err){
            console.log(`Error occurred : ${err}`)
            return res.statuscode(500).send("Something went Wrong")
        }
        else
        {
          if(result.length>0)
          {
            if(result[0].password == password)
            {
                res.statuscode(200).send('User is Authentic')
            }
            else{
                return res.statuscode(401).send("Invalid creds!!!")
            }
          }
          else{
            return res.statuscode(404).send("No Record Found !!!")
          }

        }
    })

}

const register = (req, res, next)=>{
    const data =  req.body;
    let user = {}
    if(data.name)
    user['name'] = data.name

    if(data.dob)
    user['dob'] = data.dob

    if(data.email)
    user['email'] = data.email


    //const user =  insert into user values (name, );
    if(user.id)
    {
        return res.send("User registered successfully")
    }
    else
    {
        return res.send("User registeration failed !!!")
    }

}

module.exports = {
    login,
    register
}