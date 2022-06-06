import { DeleteReservationUseCase } from './DeleteReservationUseCase';
import { DeleteReservationController} from './DeleteReservationController';
import { ReservationRepository } from '../../implementations/ReservationRepository';

const reservationRepository = new ReservationRepository();
const deleteReservationUseCase = new DeleteReservationUseCase(
    reservationRepository
);

const deleteReservationController = new DeleteReservationController(
    deleteReservationUseCase
);

export { deleteReservationUseCase, deleteReservationController };