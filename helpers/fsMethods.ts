import fs from 'fs';
import { IUser } from './interfaces';

export const getwithFS = (name:string): Promise<IUser[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile(name +'.json', "utf8", (err, content) => {
            if(err){
                reject(err)
            }
            resolve(JSON.parse(content))
        })
    })
}

export const savewithFS = (file: string, content: IUser[]): Promise<void> =>{
    return new Promise((resolve, reject) => {
        fs.writeFile(file + '.json', JSON.stringify(content), (err) =>{
            if(err){
                reject(err)
            }
            resolve(console.log('\nUsuario creado con exito! \n'))
        })
    })

}
