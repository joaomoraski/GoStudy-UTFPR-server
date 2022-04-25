import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';

interface IUpdateReservation {
    id: string;
    fk_id_room?: string;
    fk_id_user?: string;
    fk_id_schedule?: string;
    date?: Date;
}

class UpdateReservationUseCase {
    constructor(
        private reservationRepository: IReservationRepository
    ) {}
    
    async execute({
        id,
        fk_id_room,
        fk_id_user,
        fk_id_schedule,
        date
    }: IUpdateReservation): Promise<Reservation>{
        const reservation:Reservation = await this.reservationRepository.findById(id);

        if(!reservation) {
            throw new Error('Reserva não existe');
        }

        reservation.fk_id_room ? fk_id_room : reservation.fk_id_room;
        reservation.fk_id_user ? fk_id_user : reservation.fk_id_user;
        reservation.fk_id_schedule ? fk_id_schedule : reservation.fk_id_schedule;
        reservation.date ? date : reservation.date;

        await this.reservationRepository.update(reservation);

        return reservation;
    }
}
export { UpdateReservationUseCase };