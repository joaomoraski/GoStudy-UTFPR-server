import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';

interface IUpdateReservation {
    id: string;
    fk_id_room?: string;
    fk_id_user?: string;
    fk_id_schedule?: string;
    reservationDate?: string;
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
        reservationDate
    }: IUpdateReservation): Promise<Reservation>{
        try {
            const reservation:Reservation = await this.reservationRepository.findById(id);

            if(!reservation) {
                throw new Error('Reserva não existe');
            }
    
            reservation.fk_id_room = fk_id_room ? fk_id_room : reservation.fk_id_room;
            reservation.fk_id_user = fk_id_user ? fk_id_user : reservation.fk_id_user;
            reservation.fk_id_schedule = fk_id_schedule ? fk_id_schedule : reservation.fk_id_schedule;
            reservation.reservationDate = reservationDate ? reservationDate : reservation.reservationDate;
            await this.reservationRepository.update(reservation);
    
            return reservation;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
        
    }
}
export { UpdateReservationUseCase };