import inquirer from "inquirer"
import { IUser } from "./interfaces"

export const newUserPrompt = async(): Promise<IUser> => {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Introduce your name:'
        },
        {
            type: 'input',
            name: 'surname',
            message: 'Introduce your surname:'
        },
        {
            type: 'number',
            name: 'age',
            message: 'Introduce your age:'
        }
    ])
}