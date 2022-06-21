import { ShowReservationUseCase } from './ShowReservationUseCase';
import { ShowReservationController} from './ShowReservationController';
import { ReservationRepository } from '../../implementations/ReservationRepository';

const reservationRepository = new ReservationRepository();
const showReservationUseCase = new ShowReservationUseCase(
    reservationRepository
);

const showReservationController = new ShowReservationController(
    showReservationUseCase
);

export { showReservationUseCase, showReservationController };