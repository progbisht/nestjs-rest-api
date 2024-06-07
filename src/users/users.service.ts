import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService{
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,    
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            const rolesArray =  this.users.filter((user) => user.role === role)
            if(!rolesArray.length){
                throw new NotFoundException('Role not found')
            }

            return rolesArray
        }

        return this.users
    }

    findOne(id: number){
        const foundUser = this.users.find((user) => user.id === id)

        if(!foundUser){
            throw new NotFoundException('User not found.')
        }

        return foundUser
    }

    create(createUserDto: CreateUserDto){
        const userByHighestId = this.users.sort((a,b) => b.id - a.id)

        const newUser = {
            id: userByHighestId[0].id + 1,
            ...createUserDto
        }

        this.users.push(newUser)

        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto){
        const foundUser = this.users.find((user) => user.id === id)

        if(!foundUser){
            throw new NotFoundException('User not found')
        }

        const updatedUser = { ...foundUser, ...updateUserDto }

        this.users.push(updatedUser)

        return this.findOne(id)


    }

    delete(id: Number){
        const foundUser = this.users.find((user) => user.id === id)

        if(!foundUser){
            throw new NotFoundException('User not found')
        }

        const filteredUsers = this.users.filter((user) => user.id !== id)

        this.users = filteredUsers

        return foundUser
    }
}

