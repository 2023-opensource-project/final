import { MongoClient} from 'mongodb';

const url = 'mongodb+srv://sonsuchang:hlove330812@cluster0.po8bgkv.mongodb.net/'
const client = new MongoClient(url);


async function run(){
  const companylist = [];
  try {
    const database = await client.db('company').collection('companydb').find().toArray();
    database.forEach(function(database){
      var temp = {};
      temp['name'] = database.name;
      temp['job'] = Object.keys(database.job)[0];
      temp['questions'] = Object.values(Object.values(database.job)[0]);
      companylist.push(temp);
    })
    console.log(companylist);
  }finally{
    console.log("hi")
  }
  return companylist
}

run();