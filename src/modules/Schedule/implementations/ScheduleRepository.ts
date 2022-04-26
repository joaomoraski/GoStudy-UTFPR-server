import { Schedule } from "../../../entities/Schedule";
import { IScheduleRepository } from "../IScheduleRepository";

// Apagar aqui
const label = '1';
const initial_time = '1';
const final_time = '1';

class ScheduleRepository implements IScheduleRepository {

    async create(schedule: Schedule): Promise<Schedule> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return schedule;
    }

    async listAllSchedules(): Promise<Schedule[]> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const schedule: Schedule = Schedule.create(label, initial_time, final_time);
        const schedules: Schedule[] = [schedule];
        return schedules;
    }

    async findById(id: string): Promise<Schedule> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const schedule: Schedule = Schedule.create(label, initial_time, final_time, id);
        return schedule;
    }

    async update(schedule: Schedule): Promise<Schedule> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return schedule;
    }

    async delete(schedule: Schedule): Promise<Schedule> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return schedule;
    }
}

export { ScheduleRepository };