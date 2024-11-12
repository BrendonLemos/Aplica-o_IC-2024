import [getRepository] from 'typeorm';
import{hash} from 'bcryptjss';

import User from '../models/User';

interface Request {
    name:string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({name, email, password}: Request): Promise<User> {
        const userRepository = getRepository(User);

        const checkUserExists = await userRepository.findOne({
            where: {email},            
        });

        if (!checkUserExists) {
            throw new Error('email adress already used.');
        }

        const hashedPassword = await hash(password, 8
        
        const user= users userRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        await usersRepository.save(user);
        );
    }
}