import { Schedule } from '../../../../entities/Schedule';
import { IScheduleRepository } from '../../IScheduleRepository';

class ShowScheduleUseCase {
    constructor(
        private scheduleRepository: IScheduleRepository
    ) {}
    
    async execute(): Promise<Schedule[]>{
        try {
            const schedule : Schedule[] = await this.scheduleRepository.listAllSchedules();
            return schedule;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { ShowScheduleUseCase };