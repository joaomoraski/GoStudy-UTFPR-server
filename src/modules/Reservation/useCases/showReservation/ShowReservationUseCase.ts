import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';

class ShowReservationUseCase {
    constructor(
        private ReservationRepository: IReservationRepository
    ) {}
    
    async execute(): Promise<Reservation[]>{
        const reservation:Reservation[] = await this.ReservationRepository.listAllReservations();

        if(!Reservation) {
            throw new Error('Reserva não existe');
        }

        return reservation;
    }
}
export { ShowReservationUseCase };