import mangoose from "mongoose";

const connect = async() => {
    try {
        // @ts-ignore
        await mangoose.connect(process.env.MONGO)
    } catch (error) {
        throw new Error("Coonection failed")
    }
}

export default connect;