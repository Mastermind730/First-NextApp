import * as fs  from "fs";
import { NextResponse } from "next/server";

export async function GET(req,res) {
    try {
        let data=await fs.promises.readdir("blogdata");
    let myfile;
    let allblogs=[];
    for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item);
    myfile=await fs.promises.readFile("blogdata/"+item,"utf-8");
    // console.log(myfile);
    allblogs.push(JSON.parse(myfile));
    // res.status(200).json(data);
    

    }
    return NextResponse.json(allblogs);
    } catch (error) {
        // res.status(500).send({ error: 'failed to fetch data' })
        return NextResponse.json({ error: 'failed to fetch data' });
    }
    

}





