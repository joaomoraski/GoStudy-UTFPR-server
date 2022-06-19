import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';

class BrowseReservationUseCase {
    constructor(
        private reservationRepository: IReservationRepository
    ) {}
    
    async execute(query:string): Promise<Reservation>{
        try {
            const reservation:Reservation = await this.reservationRepository.findById(query);
            return reservation;
        } catch (error) {
            throw new Error('Reserva não existe');
        }

    }
}
export { BrowseReservationUseCase };