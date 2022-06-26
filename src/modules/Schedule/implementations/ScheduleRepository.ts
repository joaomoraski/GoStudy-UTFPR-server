import { ScheduleDB } from "../../../database/models/Schedule";
import { Schedule } from "../../../entities/Schedule";
import { IScheduleRepository } from "../IScheduleRepository";

class ScheduleRepository implements IScheduleRepository {

    async create(schedule: Schedule): Promise<Schedule> {
        try {
            await ScheduleDB.create({label: schedule.label, initial_time: schedule.initial_time, final_time: schedule.final_time});
            return schedule;
        } catch (error) {
            throw new Error(error);
        }
    }

    async listAllSchedules(): Promise<Schedule[]> {
        const schedules: any[] = await ScheduleDB.findAll();
        return schedules;
    }

    async findById(id: string): Promise<Schedule> {
        const schedule: any = await ScheduleDB.findByPk(id);
        return schedule;
    }

    async update(schedule: Schedule): Promise<Schedule> {
        await ScheduleDB.update({label: schedule.label, initial_time: schedule.initial_time, final_time: schedule.final_time}, {where: {id: schedule.id}});
        return schedule;
    }

    async delete(schedule: Schedule): Promise<Schedule> {
        try {
            await ScheduleDB.destroy({where: {id: schedule.id}});
            return schedule;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { ScheduleRepository };