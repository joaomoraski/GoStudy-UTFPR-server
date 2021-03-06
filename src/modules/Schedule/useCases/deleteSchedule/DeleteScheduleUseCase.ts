import { Schedule } from '../../../../entities/Schedule';
import { IScheduleRepository } from '../../IScheduleRepository';

class DeleteScheduleUseCase {
    constructor(
        private scheduleRepository: IScheduleRepository
    ) {}
    
    async execute(id: string): Promise<Schedule>{
        try {
            const schedule : Schedule = await this.scheduleRepository.findById(id);

            if(!schedule) {
                throw new Error('Schedule não existe');
            }

            await this.scheduleRepository.delete(schedule);

            return schedule;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { DeleteScheduleUseCase };