import { UpdateReservationUseCase } from './UpdateReservationUseCase';
import { UpdateReservationController} from './UpdateReservationController';
import { ReservationRepository } from '../../implementations/ReservationRepository';

const reservationRepository = new ReservationRepository();
const updateReservationUseCase = new UpdateReservationUseCase(
    reservationRepository
);

const updateReservationController = new UpdateReservationController(
    updateReservationUseCase
);

export { updateReservationUseCase, updateReservationController };