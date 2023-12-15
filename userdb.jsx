// import { MongoClient} from 'mongodb';

// const url = 'mongodb+srv://sonsuchang:hlove330812@cluster0.po8bgkv.mongodb.net/'
// const client = new MongoClient(url);


// async function userdb({
//   id,
//   password,
// }){
//   try {
//     const database = await client.db('user').collection('userdb').find().toArray();
//     database.forEach(function(database){
//       console.log(database.job)
//     })
//   }finally{
//     console.log("hi")
//   }
// }

// export default userdb;