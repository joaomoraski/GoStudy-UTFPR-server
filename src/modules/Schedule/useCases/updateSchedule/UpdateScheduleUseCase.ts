import { Schedule } from '../../../../entities/Schedule';
import { IScheduleRepository } from '../../IScheduleRepository';

interface IUpdateSchedule {
    id: string;
    label?: string;
    initial_time?: string;
    final_time?: string;
}

class UpdateScheduleUseCase {
    constructor(
        private scheduleRepository: IScheduleRepository
    ) { }

    async execute({
        id,
        label,
        initial_time,
        final_time
    }: IUpdateSchedule): Promise<Schedule> {
        const schedule: Schedule = await this.scheduleRepository.findById(id);

        if (!schedule) {
            throw new Error('Schedule não existe');
        }

        schedule.label = label ? label : schedule.label;
        schedule.initial_time = initial_time ? initial_time : schedule.initial_time;
        schedule.final_time = final_time? final_time : schedule.final_time;

        await this.scheduleRepository.update(schedule);

        return schedule;
    }
}
export { UpdateScheduleUseCase };