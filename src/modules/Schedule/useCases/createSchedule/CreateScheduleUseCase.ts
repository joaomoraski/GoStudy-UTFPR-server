import { Schedule } from '../../../../entities/Schedule';
import { IScheduleRepository } from '../../IScheduleRepository';
import { IScheduleDTO } from '../ScheduleDTO';

class CreateScheduleUseCase {
    constructor(
        private scheduleRepository: IScheduleRepository
    ) {}
    
    async execute( data: IScheduleDTO): Promise<Schedule>{
        const schedule: Schedule = new Schedule(data);

        await this.scheduleRepository.create(schedule);

        return schedule;
    }
}
export { CreateScheduleUseCase };