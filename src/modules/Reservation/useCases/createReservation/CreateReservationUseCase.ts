import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';
import { IReservationDTO } from '../ReservationDTO';

class CreateReservationUseCase {
    constructor(
        private reservationRepository: IReservationRepository
    ) {}
    
    async execute( data: IReservationDTO): Promise<Reservation>{
        try {
            const reservation: Reservation = new Reservation(data);

            await this.reservationRepository.create(reservation);
            if (!reservation) throw new Error("Null Exception");
            return reservation;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { CreateReservationUseCase };