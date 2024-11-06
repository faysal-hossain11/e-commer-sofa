import bcrypt from "bcryptjs";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    // connection with mongodb database
    await dbConnect();

    // password convart to with bcryptjs
    const hashedPassword = await bcrypt.hash(password, 5);

    // create a new user
    const newUser = {
        name,
        email,
        password: hashedPassword,
    }

    // set as a schema file 
    try{
        await userModel.create(newUser);
        return new NextResponse("User has been created successfully!", {
            status: 201
        })

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500
        })
    }
    
}