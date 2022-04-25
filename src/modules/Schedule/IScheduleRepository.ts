import { Schedule } from "../../entities/Schedule";

interface IScheduleRepository {
    create(Schedule: Schedule): Promise<Schedule>;
    listAllSchedules(): Promise<Schedule[]>;
    findById(id: string): Promise<Schedule>;
    update(Schedule: Schedule): Promise<Schedule>;
    delete(Schedule: Schedule): Promise<Schedule>;
}

export { IScheduleRepository };