import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';

class DeleteReservationUseCase {
    constructor(
        private ReservationRepository: IReservationRepository
    ) {}
    
    async execute(id: string): Promise<Reservation>{
        const reservation:Reservation = await this.ReservationRepository.findById(id);

        if(!reservation) {
            throw new Error('Reserva não existe');
        }

        await this.ReservationRepository.delete(reservation);

        return reservation;
    }
}
export { DeleteReservationUseCase };