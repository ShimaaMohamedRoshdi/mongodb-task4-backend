
//mongodb compass

const mongodb=require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionurl = "mongodb://127.0.0.1:27017";

const dbname ="proj-1" 
MongoClient.connect(connectionurl ,(error ,res1)=>{
    if (error){
        return console.log('error has occured')
    }
    console.log("All perf")
    const db = res1.db(dbname);

    /////////////////////////////////////
    //insertOne
    db.collection('users').insertOne({
        name:"shimaa" ,
        age:20
    },(error,data)=>{
        if(error){
            console.log("unable to insert data")
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertOne({
        name:"Hamza" ,
        age:10
    },(error,data)=>{
        if(error){
            console.log("unable to insert data")
        }
        console.log(data.insertedId)
    })
    /////////////////////////
    //insertMany
    db.collection('users').insertMany([
        {
            name:'asmaa',
            age:27
        },
        {
            name:'farah',
            age:27
        },
        {
            name:'maryam',
            age:27
        },
        {
            name:'noor',
            age:27
        },
        {
            name:'Zeen',
            age:27
        },
        {
            name:'tamim',
            age:22
        },
        {
            name:'aya',
            age:27
        },
        {
            name:'Ali',
            age:23
        },
        {
            name:'Mohamed',
            age:25
        },
        {
            name:'Aser',
            age:28
        }
    
    ],(error,data)=>{
            if(error){
                console.log("unable to insert data")

            }
            console.log(data.insertedCount)
        }
   
)
//////////////////////////////////
//findOne(Query ,options ,callback)
// db.collection('users').findOne({_id:mongodb.ObjectId("66b1027f2a742a86858c22c4")},(error,user)=>{
// if(error){
//     console.log("unable to find data")
// }
// console.log(user)
// })

// db.collection('users').find({age:22}).toArray((error,users)=>{
//     if(error){
//         return console.log("error has occured")
//     }
//     console.log(users)
// })
/////////////////////////////////////////
db.collection('users').find({age:27}).count((error,users)=>{
    if(error){
        return console.log("error has occured")
    }
    console.log(users)
})
/////////////////////////////////////////
//limit
db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
    if(error){
        return console.log("error has occured")
    }
    console.log(users)
})
////////////////////////////////////////////////////////
//update Operators
    //set=>Modify
    //inc =>increment to add
    //modified count
   
  db.collection('users').updateOne({_id:mongodb.ObjectId("66b26b3f9b254bdec4e60ab0")},{
    $set:{name:"Hatem"},
    $inc:{age:4}
  }).
  then((data1)=>{ console.log(data1.modifiedCount)})
  .catch((error)=>{console.log(error)})

  db.collection('users').updateOne({_id:mongodb.ObjectId("66b26c5eb5eed9b4c0696bc1")},{
    $set:{name:"Yassin"},
    $inc:{age:4}
  }).
  then((data1)=>{ console.log(data1.modifiedCount)})
  .catch((error)=>{console.log(error)})

  db.collection('users').updateOne({_id:mongodb.ObjectId("66b26c5eb5eed9b4c0696bc2")},{
    $set:{name:"Aya"},
    $inc:{age:4}
  }).
  then((data1)=>{ console.log(data1.modifiedCount)})
  .catch((error)=>{console.log(error)})

  db.collection('users').updateOne({_id:mongodb.ObjectId("66b26c5eb5eed9b4c0696bc3")},{
    $set:{name:"Mahmoud"},
    $inc:{age:4}
  }).
  then((data1)=>{ console.log(data1.modifiedCount)})
  .catch((error)=>{console.log(error)})

/////////////////////////////////////////////////////////
//update Many
  db.collection("users").updateMany({} ,{
    $inc:{age:10}
  })
  .then((data1)=>{console.log(data1.modifiedCount)})
  .catch((error)=>{console.log(error)})
///////////////////////////////////////////////////////////
//delete
// db.collection("users").deleteOne({_id:mongodb.ObjectId("66b1027f2a742a86858c22c4")})
// .then((data1)=>{ console.log(data1.deletedCount)})
// .catch((error)=>{console.log(error)})
//////////////////////////////////////////
//deleteMany
// db.collection("users").deleteMany({age:41})
// .then((data1)=>{ console.log(data1.deletedCount)})
// .catch((error)=>{console.log(error)})

///////////////////////////////////////////////////////////



})

