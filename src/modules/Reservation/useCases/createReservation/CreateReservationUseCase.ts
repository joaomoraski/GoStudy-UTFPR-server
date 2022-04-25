import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';
import { IReservationDTO } from '../ReservationDTO';

class CreateReservationUseCase {
    constructor(
        private reservationRepository: IReservationRepository
    ) {}
    
    async execute( data: IReservationDTO): Promise<Reservation>{
        const reservation: Reservation = new Reservation(data);

        await this.reservationRepository.create(reservation);

        return reservation;
    }
}
export { CreateReservationUseCase };