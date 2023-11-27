
import * as fs  from "fs";
import { NextResponse } from "next/server";


export async function POST(req,res) {
    
    let data=await fs.promises.readdir("contactdata");
    console.log(`req.body is:${req.body}`)
    
    fs.promises.writeFile(`contactdata/${data.length+1}.json`,req.body)
    return NextResponse.json(req);
}


