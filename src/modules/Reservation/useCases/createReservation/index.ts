import { CreateReservationUseCase } from './CreateReservationUseCase';
import { CreateReservationController} from './CreateReservationController';
import { ReservationRepository } from '../../implementations/ReservationRepository';

const reservationRepository = new ReservationRepository();
const createReservationUseCase = new CreateReservationUseCase(
    reservationRepository
);

const createReservationController = new CreateReservationController(
    createReservationUseCase
);

export { createReservationUseCase, createReservationController };