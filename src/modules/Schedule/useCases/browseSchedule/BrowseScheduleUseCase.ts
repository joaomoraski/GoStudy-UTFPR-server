import { Schedule } from '../../../../entities/Schedule';
import { IScheduleRepository } from '../../IScheduleRepository';

class BrowseScheduleUseCase {
    constructor(
        private scheduleRepository: IScheduleRepository
    ) {}
    
    async execute(query:string): Promise<Schedule>{
        try {
            const schedule:Schedule = await this.scheduleRepository.findById(query);
            return schedule;
        } catch (error) {
            throw new Error('Sala não existe');
        }

    }
}
export { BrowseScheduleUseCase };