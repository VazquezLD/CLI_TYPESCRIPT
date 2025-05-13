import inquirer from "inquirer";
import { getwithFS, savewithFS } from "./fsMethods";
import { newUserPrompt } from "./userPrompts";


export const getAllUsers = async () => {
    const currentUsers = await getwithFS('users');
    console.log(currentUsers);
}

export const createUser = async() => {
    const newUserData = await newUserPrompt();
    const currentUsers = await getwithFS('users');
    currentUsers.push(newUserData);
    await savewithFS('users', currentUsers)
}