import { Schedule } from '../../../../entities/Schedule';
import { IScheduleRepository } from '../../IScheduleRepository';

class BrowseScheduleUseCase {
    constructor(
        private scheduleRepository: IScheduleRepository
    ) {}
    
    async execute(query:string): Promise<Schedule>{
        try {
            const schedule:Schedule = await this.scheduleRepository.findById(query);
            if (!schedule) throw new Error('Horário não existe');
            return schedule;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }

    }
}
export { BrowseScheduleUseCase };