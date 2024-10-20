import userModels from "../module/userModels.js";


export const createUser = async(req, res) => {

    try {
        const newUser = new userModels(req.body);
        const { email } = newUser;

        const userExist = await userModels.findOne({ email });
        
        if (userExist) {
            return res.status(400).json({Message: `${email} User already exists`});
        }
        const savedData = await newUser.save();
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({ Message: "error in create users" });
    }
}


export const getUser = async(req, res) => {

    try {
        const userInfo = await userModels.find()

        if( !userInfo || userInfo.length === 0 ){
            return res.status(400).json({ Message: "No users" })
        }
        res.status(200).json(userInfo);

    } catch (error) {
        res.status(500).json({ Message: "error in get users" });
    }
}


export const removeUser = async(req, res) => {

    try {
        const id = req.params.id;

        const userExist = await userModels.findById(id);

        if(!userExist) {
           return res.status(400).json('No users');
        }

        const userDelete = await userModels.findByIdAndDelete(id);
        res.status(200).json(userDelete);

    } catch (error) {
        res.status(500).json({ Message : "Error in user remove" });
    }
}


export const getOneUser = async(req, res) => {

    try {
        
        const id = req.params.id;
        const getOne = await userModels.findById(id);

        if( !getOne ){
            return res.status(400).json({ Message: "No user" });
        }
        res.status(200).json(getOne);

    } catch (error) {
        res.status(500).json({ Message: "Error in get one user" });
    }
}


export const updateUser = async(req, res) => {
    
    try {
        
        const id = req.params.id;

        const userExist = await userModels.findById(id);

        if( !userExist ){
            return res.status(400).json({ Message: "No user" })
        }
        
        const updatedData = userModels.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.status(200).json(updatedData);

    } catch (error) {
       res.status(500).json({ Message: "Error in update user" });
    }
}