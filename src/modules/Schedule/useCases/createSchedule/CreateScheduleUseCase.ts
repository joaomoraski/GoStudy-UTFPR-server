import { Schedule } from '../../../../entities/Schedule';
import { IScheduleRepository } from '../../IScheduleRepository';
import { IScheduleDTO } from '../ScheduleDTO';

class CreateScheduleUseCase {
    constructor(
        private scheduleRepository: IScheduleRepository
    ) {}
    
    async execute( data: IScheduleDTO): Promise<Schedule>{
        try {
            const schedule: Schedule = new Schedule(data);

            await this.scheduleRepository.create(schedule);
            if (!schedule) throw new Error('Null Exception');
            return schedule;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { CreateScheduleUseCase };