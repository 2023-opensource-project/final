import { MongoClient} from 'mongodb';
import { fileURLToPath } from "url";
import express from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs';

const app = express();
const __dirname = fileURLToPath(new URL(".", import.meta.url));

app.use(cors());
app.use(express.static(path.join(__dirname, 'frontend/src')));

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(8080, async () => {
  try {
    const filePath = path.join(__dirname, 'frontend/src/CoverLetterComponents/CompanyList.jsx');
    const url = 'mongodb+srv://sonsuchang:hlove330812@cluster0.po8bgkv.mongodb.net/'
    const client = new MongoClient(url);
    const database = await client.db('company').collection('companydb').find().toArray();
    const companylist = [];
    database.forEach(function(database){
      var temp = {};
      temp['name'] = database.name;
      temp['job'] = Object.keys(database.job)[0];
      temp['questions'] = Object.values(Object.values(database.job)[0]);
      companylist.push(temp);
    })
    const content = `const companyList = ${JSON.stringify(companylist)}; export default companyList;`;
    fs.writeFileSync(filePath, content);
  }finally{
    console.log("hi")
  }
  console.log('listening on 8080')
})