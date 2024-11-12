import  {uuid} from 'express'; 
import {getCustomRepository} from 'typorm';
import {parseISO} from 'date-fns';

import AppointmentsRepository from '../repositories/ AppointmentsRepository'.
import { CreateAppointmentsService } from '../service/CreateAppointmentsService;

const appointmentsRouter = Router();

appointmentsRouter.get('/, async (request, response') =>{
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return Response.json(appointments);
});

appointmentsRouter.post('/. async (request, response) =>{
    try{
        const {provider_id, date} = request.body;

        const parsedDate = parseISO(date);

        const createAppointment = new CreateAppointmentsService();

        const appointment = await createAppointment.execute({
            date: parsedDate,
            provider_id,
        });
        return Response.json(appointment);
    } catch (err){
        return Response.status(400).json({error: err.message}); 
    }
