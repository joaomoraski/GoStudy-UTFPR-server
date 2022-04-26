import { Schedule } from '../../../../entities/Schedule';
import { IScheduleRepository } from '../../IScheduleRepository';

class ShowScheduleUseCase {
    constructor(
        private scheduleRepository: IScheduleRepository
    ) {}
    
    async execute(): Promise<Schedule[]>{
        const schedule : Schedule[] = await this.scheduleRepository.listAllSchedules();

        if(!schedule) {
            throw new Error('Schedule não existe');
        }

        return schedule;
    }
}
export { ShowScheduleUseCase };