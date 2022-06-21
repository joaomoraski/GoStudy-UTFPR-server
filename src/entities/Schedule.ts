class Schedule {
    id?: string;
    label: string;
    initial_time: string;
    final_time: string;

    constructor({ label, initial_time, final_time }: Schedule) {
        return Object.assign(this, {
            label,
            initial_time,
            final_time
        });
    }

    static create(label: string, initial_time: string, final_time: string, id?: string) {
        const schedule = new Schedule({
            id,
            label,
            initial_time,
            final_time
        });
        return schedule;
    }
}

export { Schedule };