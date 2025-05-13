import inquirer from 'inquirer';
import { createUser, getAllUsers } from './helpers/listOptions';


const main = async() => {

    let inUse = true;

    while(inUse){
        const options = await inquirer.prompt(
        {
            type: 'list',
            name: 'chosenOption',
            message: 'Choose an option: ',
            choices: [
                {
                    value: 1,
                    name: 'See al Users.'
                },
                {
                    value: 2,
                    name: 'Create a user.'
                },
                {
                    value: 3,
                    name: 'Exit.'
                }
            ]
        }
    )

    switch(options.chosenOption){
        case 1:
            console.log('\nOption 1\n')
            await getAllUsers();
            break;
        case 2:
            console.log('\nOption 2\n')
            await createUser();
            break;
        case 3:
            console.log('\nExit\n')
            inUse = false
            break;
        default:
            console.log('\nDefault\n')
            inUse = false
            break;
    }
    }

};

main()