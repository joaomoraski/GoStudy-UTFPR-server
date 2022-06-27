import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';

class ShowReservationUseCase {
    constructor(
        private ReservationRepository: IReservationRepository
    ) {}
    
    async execute(): Promise<Reservation[]>{
        try {
            const reservation:Reservation[] = await this.ReservationRepository.listAllReservations();
                
            return reservation;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
        
    }
}
export { ShowReservationUseCase };